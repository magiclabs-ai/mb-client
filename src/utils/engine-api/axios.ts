import {assign, mergeNestedObject} from '../toolbox'
import axios, {AxiosRequestConfig} from 'axios'

type baseRequest = {
  url: string
  needsToken?: boolean
  options?: AxiosRequestConfig<any>
}

type payloadRequest = baseRequest & {
  payload?: unknown
}

type createAxiosConfigProps = {
  needsToken?: boolean
  options?: AxiosRequestConfig<any>
}

function createAxiosConfig({needsToken = true ,options}: createAxiosConfigProps): AxiosRequestConfig<any> {
  let config = {}
  needsToken && assign(config, ['headers', 'Authorization'] , 'Bearer TEST')
  options && (config = mergeNestedObject(config, options))
  return config
}

export async function get ({url, needsToken}: baseRequest) {
  return await axios.get(url, createAxiosConfig({needsToken}))
}

export async function download ({url, needsToken}: baseRequest) {
  return await axios.get(url, createAxiosConfig({needsToken, options: {responseType: 'blob'}}))
}

export async function remove ({url, needsToken}: baseRequest) {
  return await axios.delete(url, createAxiosConfig({needsToken}))
}

export async function post ({url, needsToken, options, payload = {}}: payloadRequest) {
  return await axios.post(url, payload, createAxiosConfig({needsToken, options}))
}

export async function put ({url, needsToken, options, payload}: payloadRequest) {
  return await axios.put(url, payload, createAxiosConfig({needsToken, options}))
}
