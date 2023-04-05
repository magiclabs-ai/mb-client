import {camelCaseObjectKeysToSnakeCase} from '../utils/toolbox'
import DesignRequest from './design-request'

export type BookDesignRequest = {
  occasion: string
  style: string
  book_format: string
  cover_type: string
  page_type: string
  image_density: string
  embellishment_level: string
  text_sticker_level: string
}

export type BookDesignSpecs = {
  sbitems: Array<string>
  image_sorting: string
}

export type BookProps = {
  state: string
  title: string
  design_request: BookDesignRequest
  design_specs: BookDesignSpecs
}


export class Book {
  state: string
  title: string
  design_request: BookDesignRequest
  design_specs: BookDesignSpecs

  constructor(props: BookProps) {
    this.state = props.state
    this.title = props.title
    this.design_request = props.design_request
    this.design_specs = props.design_specs
  }

  updateBook(props: DesignRequest) {
    const designRequestInSnakeCase = camelCaseObjectKeysToSnakeCase(props as unknown as Record<string, unknown>)
    this.title = designRequestInSnakeCase.title as string
    Object.keys(this.design_request).forEach((k) => {
      const key = k as keyof BookDesignRequest
      const typeOfValue = this.design_request[key]
      this.design_request[key] = designRequestInSnakeCase[key] as typeof typeOfValue
    })
  }

}
