import {assign, mergeNestedObject} from '../toolbox'
import axios, {AxiosRequestConfig} from 'axios'

type baseRequest = {
  url: string
  apiKey: string
  options?: AxiosRequestConfig<any>
}

type payloadRequest = baseRequest & {
  payload?: unknown
}

type createAxiosConfigProps = {
  apiKey: string
  options?: AxiosRequestConfig<any>
}

function createAxiosConfig({apiKey, options}: createAxiosConfigProps): AxiosRequestConfig<any> {
  let config = {}
  apiKey && assign(config, ['headers', 'Authorization'] , `API-Key ${apiKey}`)
  options && (config = mergeNestedObject(config, options))
  return config
}

function cleanUrl(url: string) {
  return url.replaceAll(' ', '').trim()
}

export async function get ({url, apiKey, options}: baseRequest) {
  return await axios.get(cleanUrl(url), createAxiosConfig({apiKey, options}))
}

export async function remove ({url, apiKey, options}: baseRequest) {
  return await axios.delete(cleanUrl(url), createAxiosConfig({apiKey, options}))
}

export async function post ({url, apiKey, options, payload = {}}: payloadRequest) {
  return await axios.post(cleanUrl(url), payload, createAxiosConfig({apiKey, options}))
}

export async function put ({url, apiKey, options, payload}: payloadRequest) {
  return await axios.put(cleanUrl(url), payload, createAxiosConfig({apiKey, options}))
}

export async function APIHandler<T>(fn: () => Promise<T>) {
  try {
    return await fn()
  } catch (error) {
    return Promise.reject(error)
  }
}
