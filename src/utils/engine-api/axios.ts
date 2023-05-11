import * as z from 'zod'
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
  needsToken && assign(config, ['headers', 'Authorization'] , 'Bearer TOKEN')
  options && (config = mergeNestedObject(config, options))
  return config
}

export async function get ({url, needsToken, options}: baseRequest) {
  return await axios.get(url, createAxiosConfig({needsToken, options}))
}

export async function remove ({url, needsToken, options}: baseRequest) {
  return await axios.delete(url, createAxiosConfig({needsToken, options}))
}

export async function post ({url, needsToken, options, payload = {}}: payloadRequest) {
  return await axios.post(url, payload, createAxiosConfig({needsToken, options}))
}

export async function put ({url, needsToken, options, payload}: payloadRequest) {
  return await axios.put(url, payload, createAxiosConfig({needsToken, options}))
}

export async function APIHandler<T>(fn: () => Promise<T>) {
  try {
    return await fn()
  } catch (error) {
    return Promise.reject(error)
  }
}
