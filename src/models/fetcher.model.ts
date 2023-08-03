import {mergeNestedObject} from '@/utils/toolbox'

export type CallProps = {
  path: string
  options?: any
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

  async call(props: CallProps) {
    try {
      const baseOptions = {...this.options}
      const options = props.options ? mergeNestedObject(baseOptions, props.options) : baseOptions
      options.body = JSON.stringify(options.body)
      const res = await fetch(this.cleanUrl((new URL(props.path, this.baseUrl)).href), options)
      return res.json()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  cleanUrl(url: string) {
    return url.replaceAll(' ', '').trim()
  }
}
