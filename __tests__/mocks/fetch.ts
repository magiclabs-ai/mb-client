import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import 'vitest-fetch-mock'

export const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()
