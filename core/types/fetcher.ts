import {mergeNestedObject} from '../utils/toolbox'

export type CallProps = {
  path: string
  qs?: string
  options?: RequestInit
  apiKey?: string
}

export const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
}

export class Fetcher {
  baseUrl: URL
  options: RequestInit

  constructor(baseUrl: string, options?: RequestInit | undefined) {
    this.baseUrl = new URL(baseUrl)
    this.options = mergeNestedObject(baseOptions, options || {})
  }

  async call<T>(props: CallProps): Promise<T> {
    const {options, path, qs} = props

    if (options?.body && typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body)
    }

    const finalOptions = options ? mergeNestedObject({...this.options}, options) : {...this.options}

    const qualityScore = qs ? `?${qs}` : ''

    const response = await fetch(this.cleanUrl(`${this.baseUrl}${path}${qualityScore}`), finalOptions)

    if (response.ok) {
      const result = await response.text()
      try {
        return JSON.parse(result) as T
      } catch (error) {
        return result as T
      }
    }

    let detail: string | undefined
    try {
      detail = JSON.stringify((await response.json())?.detail)
    } catch (error) {
      detail = response.statusText
    }

    throw Error(`${response.status} ${detail}`)
  }

  cleanUrl(url: string) {
    return url.replace(/\/\//g, '/').replaceAll(' ', '').trim()
  }
}
