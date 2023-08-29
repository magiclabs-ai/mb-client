import {EngineAPI, paginatedResponseSchema} from '..'
import {embellishmentServerSchemas} from '../../embellishment'
import {handleAsyncFunction} from '@/core/utils/toolbox'

export class EmbellishmentsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  listForStyle(
    styleSlug: string
  ) {
    return handleAsyncFunction(async () => {
      console.log('listForStyle', styleSlug, this.engineAPI)
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/embellishments/style/${styleSlug}`
      })
      // const res = {
      //   next_cursor: null,
      //   count: 1,
      //   results: [
      //     {
      //       'active': true,
      //       'anchors': {
      //         'x0': 0.0242,
      //         'y1': 0.96,
      //         'x1': 0.9758,
      //         'y0': 0.04
      //       },
      //       'compatible_colors': [],
      //       'compatibles': [],
      //       'h_flippable': false,
      //       'height': 310,
      //       'is_specific': false,
      //       'margin': 0,
      //       'max_surface': 0.0,
      //       'min_surface': 0.0,
      //       'name': 'emb_sfly_sb-frame-rec-round-corners-long',
      //       'orientation': null,
      //       'orientations': [],
      //       'pattern': 'pattern-02-03',
      //       'primary_color': '#FFFFFF',
      //       'rotatable': true,
      //       'scale': 0.0,
      //       'stacking': 'front',
      //       'text': null,
      //       'thickness': null,
      //       'type': 'FRAME',
      //       'url': 'https://mb-sls-engine-dev-sls-ab12.s3.amazonaws.com/library/embs/0af7a1a48a715a07a84b6e20a04f785b',
      //       'v_flippable': false,
      //       'width': 512,
      //       'id': '0af7a1a4-8a71-5a07-a84b-6e20a04f785b',
      //       'style': 'modern-black-sfly'
      //     }
      //   ]
      // }
      // const stringOrNumber = z.union([embellishmentBackgroundServerSchema, embellishmentFrameServerSchema])
      // return stringOrNumber.parse(res.results)

      
      return paginatedResponseSchema(embellishmentServerSchemas).parse(res)
    })
  }

}
