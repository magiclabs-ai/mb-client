import {styles} from '../data/design-request'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assign(obj: Record<string, any>, fields: Array<string>, value: unknown) {
  const lastKey = fields.pop() || ''
  const lastObj = fields.reduce((obj, key) => 
    obj[key] = obj[key] || {}, 
  obj) 
  lastObj[lastKey] = value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeNestedObject(obj: Record<string, any>, objToMerge: Record<string, any>) {
  Object.keys(objToMerge).map(key => {
    if (typeof obj[key] === 'object' && typeof objToMerge[key] === 'object') {
      mergeNestedObject(obj[key], objToMerge[key])
    } else {
      obj[key] = objToMerge[key]
    }
  })
  return obj
}

export function camelCaseToKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function camelCaseToSnakeCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
}

export function camelCaseObjectKeysToSnakeCase(camelCaseObject: Record<string, unknown>) {
  Object.keys(camelCaseObject).map(key => {
    const snakeCaseKey = camelCaseToSnakeCase(key)
    if (snakeCaseKey.includes('_')) {
      camelCaseObject[snakeCaseKey] = camelCaseObject[key]
      delete camelCaseObject[key]
    }
    if (typeof camelCaseObject[snakeCaseKey] === 'object') {
      camelCaseObject[snakeCaseKey] =
      camelCaseObjectKeysToSnakeCase(camelCaseObject[snakeCaseKey] as Record<string, unknown>)
    }
  })
  return camelCaseObject
}

export function snakeCaseToCamelCase(str: string) {
  return str.replace(/([-_][a-z])/g, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
}

export function snakeCaseObjectKeysToCamelCase(snakeCaseObject: Record<string, unknown>) {
  Object.keys(snakeCaseObject).map(key => {
    const camelCaseKey = snakeCaseToCamelCase(key)
    if (camelCaseKey !== key) {
      snakeCaseObject[camelCaseKey] = snakeCaseObject[key]
      delete snakeCaseObject[key]
    }
    if (typeof snakeCaseObject[camelCaseKey] === 'object') {
      snakeCaseObject[camelCaseKey] =
       snakeCaseObjectKeysToCamelCase(snakeCaseObject[camelCaseKey] as Record<string, unknown>)
    }
  })
  return snakeCaseObject
}

export function camelCaseToWords(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
}

export async function handleAsyncFunction<T>(fn: () => Promise<T>) {
  try {
    return await fn()
  } catch (error) {
    return Promise.reject(error)
  }
}

export function isURL(str: string) {
  const pattern = /^(https|ws|wss):\/\/[^ "]+$/
  return pattern.test(str)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function bindThisToFunctions<TClass extends { new (): any}>(
  instance: InstanceType<TClass>
): void {
  for (const name of Object.getOwnPropertyNames(
    Object.getPrototypeOf(instance)
  )) {
    if (typeof instance[name] === 'function' && name !== 'constructor') {
      instance[name] = instance[name].bind(instance)
    }
  }
}

export function formatReturnJSON(value: unknown) {
  return JSON.stringify(value, null, 2)
}

export function cleanJSON(obj: unknown) {
  return JSON.parse(JSON.stringify(obj))
}

export function getStyleIdBySlug(slug: string): string | undefined {
  for (const id  in styles) {
    const style = styles[id as unknown as keyof typeof styles]
    if (style.slug === slug) {
      return id
    }
  }
  return undefined
}

export function chunkArray(array: Array<unknown>, chunkSize: number) {
  const chunks = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    chunks.push(chunk)
  }
  return chunks
}
