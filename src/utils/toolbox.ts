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
