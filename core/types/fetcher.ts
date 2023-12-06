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

  async call<T>(props: CallProps) {
    try {
      if (props.options?.body && typeof props.options.body !== 'string') {
        props.options.body = JSON.stringify(props.options?.body)
      }
      const baseOptions = {...this.options}
      const options = props.options ? mergeNestedObject(baseOptions, props.options) : baseOptions
      const qs = props.qs ? `?${props.qs}` : ''
      const res = await fetch(this.cleanUrl(`${this.baseUrl}${props.path}${qs}`), options)
      if (res.status >= 200 && res.status < 300 && res.ok) {
        const result = await res.text()
        try {
          return JSON.parse(result) as T
        } catch (error){
          return result as T
        }
      } else {
        let detail = res.statusText
        try { 
          detail = JSON.stringify((await res.json())?.detail)
        } catch (error) { /* empty */ }
        throw Error(`${res.status} ${detail}`)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  cleanUrl(url: string) {
    return url.replace(/\/\//g, '/').replaceAll(' ', '').trim()
  }
}
