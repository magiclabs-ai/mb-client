import {Mock, vi} from 'vitest'
import axios from 'axios'

vi.mock('axios')
export const axiosGet = axios.get as Mock
export const axiosDelete = axios.delete as Mock
export const axiosPost = axios.post as Mock
export const axiosPut = axios.put as Mock
