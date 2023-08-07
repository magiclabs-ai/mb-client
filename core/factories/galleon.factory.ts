import {BookCreationRequest} from '@/core/models/galleon'
import {faker} from '@faker-js/faker'

export type galleonFactoryProps = {
  title?: string
}

export function galleonFactory(props?: galleonFactoryProps): BookCreationRequest {
  return {
    'title': props?.title || faker.lorem.words(3),
    'binding': 'sl',
    'coverSpecId': '11x14_bk_hard',
    'styleId': 5161,
    'userId': '01H0D0SNQ05H00ERKG9NRV1GQT',
    'magicShopBook': {
      'pages': [
        {
          'pageNum': 1,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-sapphire',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_gray',
                'position': {
                  'x': 0.0,
                  'y': 0.96875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'bd480e91-12d7-43a8-998f-36a76930bf5d',
                  'finalCrop': [
                    4.155587823638307e-17,
                    0.001055181026380368,
                    0.9237658253468962,
                    0.9980757832527607
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.5916666666666667,
                  'width': 0.9000000000000001,
                  'height': 0.31666666666666676,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 3
              }
            ]
          }
        },
        {
          'pageNum': 2,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-sapphire',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_gray',
                'position': {
                  'x': 0.0,
                  'y': 0.96875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'd8090571-a078-4275-8985-e7121c3297c5',
                  'finalCrop': [
                    0.070862735930242,
                    0.0,
                    0.6757048411933999,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.008333333333333304,
                  'y': 0.5916666666666667,
                  'width': 0.5666666666666669,
                  'height': 0.31666666666666676,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '466754bf-d8ba-4ab2-9a31-46068cdfcbf0',
                  'finalCrop': [
                    0.058809065491988985,
                    0.00025045871747572814,
                    0.8938356104780887,
                    0.992252826690615
                  ]
                },
                'position': {
                  'x': -0.4083333333333333,
                  'y': 0.09166666666666666,
                  'width': 1.3166666666666664,
                  'height': 0.48333333333333345,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2
              },
              {
                'type': 'embellishment',
                'id': 'emb_pplains_am-texture-circle-frost',
                'position': {
                  'x': -0.05833333333333335,
                  'y': 0.5333333333333333,
                  'width': 0.1166666666666667,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 4
              }
            ]
          }
        },
        {
          'pageNum': 3,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_white',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-paint-sapphire',
                'position': {
                  'x': 0.0,
                  'y': 0.8583333333333333,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '88606d07-311c-41e1-bea7-1d6fc70b449d',
                  'finalCrop': [
                    0.17915298968239823,
                    0.0,
                    0.7703108844192406,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.01,
                  'y': 0.3416666666666667,
                  'width': 0.5850000000000001,
                  'height': 0.31666666666666665,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 2
              }
            ]
          }
        },
        {
          'pageNum': 4,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_white',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-paint-sapphire',
                'position': {
                  'x': 0.0,
                  'y': 0.8583333333333333,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'db7ffae8-d785-4d4e-8966-501486c1ac3f',
                  'finalCrop': [
                    0.06415409330404728,
                    0.002503752708333333,
                    1.0,
                    0.9978238642214646
                  ]
                },
                'position': {
                  'x': -0.5333333333333333,
                  'y': 0.175,
                  'width': 1.5433333333333332,
                  'height': 0.6499999999999999,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1
              }
            ]
          }
        },
        {
          'pageNum': 5,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_antique-white',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'baa2816e-c41a-404d-8a73-33b6878231aa',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.04,
                  'y': -0.02,
                  'width': 1.0316666666666667,
                  'height': 0.5116666666666666,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'bb1831fc-a2db-4b0d-bacf-ce052a42d521',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.04,
                  'y': 0.5083333333333333,
                  'width': 1.0316666666666667,
                  'height': 0.5116666666666667,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 6,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_dark-gray',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-paint-pumpkin',
                'position': {
                  'x': 0.0,
                  'y': 0.8408203125,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '73f77bc2-4047-40ed-bd0f-b75212cf7651',
                  'finalCrop': [
                    2.478781565533229e-17,
                    0.0,
                    0.9999999999999999,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666656,
                  'y': 0.21666666666666665,
                  'width': 0.8166666666666667,
                  'height': 0.5666666666666668,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': -1,
          'type': 'frontCover',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_pumpkin',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-striae-frost',
                'position': {
                  'x': 0.0,
                  'y': 0.90166015625,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'a994bf13-13e9-46c2-9d8c-45137d9c4a90',
                  'finalCrop': [
                    9.988511242691467e-18,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.02,
                  'y': 0.4250000000000001,
                  'width': 1.04,
                  'height': 0.44166666666666665,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'bd480e91-12d7-43a8-998f-36a76930bf5d',
                  'finalCrop': [
                    2.624349901237673e-16,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.5916666666666667,
                  'y': 0.21666666666666667,
                  'width': 0.31666666666666676,
                  'height': 0.27499999999999997,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_rugged',
                'position': {
                  'x': 0.0,
                  'y': 0.8666666666666667,
                  'width': 0.9912280701754386,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 10
              },
              {
                'type': 'textArea',
                'horizJustification': 'center',
                'vertJustification': null,
                'text': 'My Book',
                'fontId': 'font_avante-garde_book',
                'fontSize': 34,
                'fontColor': '#000000',
                'seqNum': 5,
                'z': 200,
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.30000000000000004,
                  'width': 0.4833333333333334,
                  'height': 0.10833333333333327,
                  'rotation': 0
                }
              }
            ]
          }
        },
        {
          'pageNum': 7,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-sapphire',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_lure_es-zigzag-white',
                'position': {
                  'x': 0.0,
                  'y': 0.982421875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'embellishment',
                'id': 'emb_pplains_am-leaf5-frost',
                'position': {
                  'x': 0.03436027482471871,
                  'y': 0.232324160740369,
                  'width': 0.11666666666666667,
                  'rotation': 1
                },
                'seqNum': 2,
                'z': 2
              }
            ]
          }
        },
        {
          'pageNum': 8,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-sapphire',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_lure_es-zigzag-white',
                'position': {
                  'x': 0.0,
                  'y': 0.982421875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '9fdad740-04d3-49fd-8907-dac5e2b23012',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.9083333333333333,
                  'y': 0.09166666666666666,
                  'width': 1.1916666666666667,
                  'height': 0.8166666666666668,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '4c391bae-d0d2-45a0-a5b9-ecc5549b36d9',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.2166666666666666,
                  'y': 0.30000000000000004,
                  'width': 0.6916666666666667,
                  'height': 0.4,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': -3,
          'type': 'backCover',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_amber',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-weeds',
                'position': {
                  'x': 0.0,
                  'y': 0.78662109375,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'db7ffae8-d785-4d4e-8966-501486c1ac3f',
                  'finalCrop': [
                    9.988511242691467e-18,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.02,
                  'y': 0.13333333333333333,
                  'width': 1.04,
                  'height': 0.4833333333333334,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_navy',
                'position': {
                  'x': 0.0,
                  'y': 0.10364583333333334,
                  'width': 0.9912280701754386,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_navy',
                'position': {
                  'x': 0.0,
                  'y': 0.6166666666666667,
                  'width': 0.9912280701754386,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 10
              }
            ]
          }
        },
        {
          'pageNum': 9,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_frost',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '4cd9c882-62f4-45a5-98e0-185d7f1e3a14',
                  'finalCrop': [
                    1.012169139259402e-16,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.09166666666666666,
                  'width': 0.3999999999999999,
                  'height': 0.3999999999999999,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 10,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_frost',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'bc52bcc6-74ff-4e43-8916-5e455a448f6b',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -1.04,
                  'y': 0.3416666666666667,
                  'width': 2.08,
                  'height': 0.6783333333333333,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_gray2',
                'position': {
                  'x': -1.0,
                  'y': 0.2791666666666667,
                  'width': 1.9916666666666667,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 10
              }
            ]
          }
        },
        {
          'pageNum': 11,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_taupe',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-spray-white',
                'position': {
                  'x': 0.06666666666666667,
                  'y': 0.0,
                  'width': 1.0,
                  'rotation': 90
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '4198042f-65ed-4244-a3cb-30c2ebde9ae8',
                  'finalCrop': [
                    4.957563131066458e-17,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.25833333333333336,
                  'width': 0.8166666666666668,
                  'height': 0.48333333333333334,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 12,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_antique-white',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '242b01e4-eed5-4d73-afcc-f77efd073b97',
                  'finalCrop': [
                    1.8395642676362313e-17,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.008333333333333304,
                  'y': 0.09166666666666666,
                  'width': 1.0316666666666667,
                  'height': 0.8166666666666668,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-amber',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.06358235677083333,
                  'width': 0.9916666666666666,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-amber',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.9083333333333333,
                  'width': 0.9916666666666666,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 10
              }
            ]
          }
        },
        {
          'pageNum': 13,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_sapphire',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '9172b18b-2920-44c7-a24e-54d71f692484',
                  'finalCrop': [
                    0.0,
                    0.0,
                    0.9999999999999999,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.09166666666666666,
                  'width': 0.5666666666666668,
                  'height': 0.3166666666666666,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 14,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_sapphire',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '56b8ab69-d957-41f9-8892-6a5e459c4f31',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -1.04,
                  'y': 0.3416666666666667,
                  'width': 2.08,
                  'height': 0.5666666666666668,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_gray',
                'position': {
                  'x': -1.0,
                  'y': 0.2791666666666667,
                  'width': 1.9916666666666667,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_gray',
                'position': {
                  'x': -1.0,
                  'y': 0.9083333333333333,
                  'width': 1.9916666666666667,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 10
              }
            ]
          }
        },
        {
          'pageNum': 15,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-whitewash',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-amber',
                'position': {
                  'x': 0.0,
                  'y': 0.9716796875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'embellishment',
                'id': 'emb_pplains_am-spray-leaf',
                'position': {
                  'x': -0.0458591060076256,
                  'y': 0.13002933953086698,
                  'width': 0.7083333333333334,
                  'rotation': 346
                },
                'seqNum': 2,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '3ef88fda-7916-4305-9974-76fd22c5c823',
                  'finalCrop': [
                    4.957563131066458e-17,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.21666666666666665,
                  'width': 0.8166666666666668,
                  'height': 0.5666666666666668,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 16,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_olive',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-amber',
                'position': {
                  'x': 0.0,
                  'y': 0.9716796875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'c206902e-0a2c-4345-ad06-fd4df12b39ff',
                  'finalCrop': [
                    2.478781565533229e-17,
                    0.0,
                    0.9999999999999999,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666656,
                  'y': 0.21666666666666665,
                  'width': 0.8166666666666667,
                  'height': 0.5666666666666668,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 17,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-amber',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-pumpkin',
                'position': {
                  'x': 0.0,
                  'y': 0.9716796875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              }
            ]
          }
        },
        {
          'pageNum': 18,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_pplains_am-weeds-amber',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_pplains_am-swash-pumpkin',
                'position': {
                  'x': 0.0,
                  'y': 0.9716796875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'a994bf13-13e9-46c2-9d8c-45137d9c4a90',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.7833333333333333,
                  'y': 0.5499999999999999,
                  'width': 1.5666666666666662,
                  'height': 0.3583333333333334,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'e294c1bf-7041-41b2-afb1-c6b0bcae2ef1',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.7833333333333333,
                  'y': 0.09166666666666666,
                  'width': 1.5666666666666662,
                  'height': 0.4416666666666667,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 19,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_frost',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_navy',
                'position': {
                  'x': 0.0,
                  'y': 0.96875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'embellishment',
                'id': 'emb_pplains_am-spray-frost',
                'position': {
                  'x': 0.09615526831176045,
                  'y': 0.5490955053929046,
                  'width': 0.325,
                  'rotation': 14
                },
                'seqNum': 2,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'e0e0f6fe-c37c-454b-9adb-c606496289d3',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.5083333333333333,
                  'width': 0.48333333333333345,
                  'height': 0.31666666666666665,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 'a89cfe7d-4d08-40c3-9de4-5742951da972',
                  'finalCrop': [
                    4.957563131066458e-17,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.09166666666666666,
                  'y': 0.175,
                  'width': 0.8166666666666668,
                  'height': 0.31666666666666665,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 20,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_white',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_navy',
                'position': {
                  'x': 0.0,
                  'y': 0.96875,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '2e7b0eba-ff7c-40a9-bc39-242ea54bf3ff',
                  'finalCrop': [
                    1.8395642676362313e-17,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.008333333333333304,
                  'y': 0.175,
                  'width': 1.0316666666666667,
                  'height': 0.6499999999999999,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_mossgreen',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.14401041666666667,
                  'width': 0.9916666666666666,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'pb_sfly_mossgreen',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.825,
                  'width': 0.9916666666666666,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 10
              }
            ]
          }
        },
        {
          'pageNum': 21,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_pumpkin',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_rugged',
                'position': {
                  'x': 0.0,
                  'y': 0.9912109375,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              }
            ]
          }
        },
        {
          'pageNum': 22,
          'type': 'page',
          'canvas': {
            'backgroundId': 'bg_sq_sfly_pumpkin',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'pb_sfly_rugged',
                'position': {
                  'x': 0.0,
                  'y': 0.9912109375,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '03f46435-de5c-463f-afea-27301069bbb9',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': -1.04,
                  'y': 0.09166666666666666,
                  'width': 2.08,
                  'height': 0.5666666666666668,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 1,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': '1580d921-409b-4a48-89ed-dfd62a3d9eff',
                  'finalCrop': [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.34166666666666656,
                  'y': 0.5916666666666667,
                  'width': 0.5666666666666667,
                  'height': 0.31666666666666676,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'pb_lure_es-zigzag-white',
                'position': {
                  'x': -1.0,
                  'y': 0.05651041666666667,
                  'width': 1.9916666666666667,
                  'rotation': 0
                },
                'seqNum': 4,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'pb_lure_es-zigzag-white',
                'position': {
                  'x': -1.0,
                  'y': 0.6583333333333333,
                  'width': 1.9916666666666667,
                  'rotation': 0
                },
                'seqNum': 5,
                'z': 10
              }
            ]
          }
        }
      ],
      'photoStrip': [
        {
          'url': 'https://loremflickr.com/1000/465',
          'encryptId': '',
          'photoRefId': 'e0e0f6fe-c37c-454b-9adb-c606496289d3',
          'photoId': 'e0e0f6fe-c37c-454b-9adb-c606496289d3',
          'photoMetadata': {
            'id': '01H0D0SPFVYYWP8SSVGHMVYMN1',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 465,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:15'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/277',
          'encryptId': '',
          'photoRefId': 'e294c1bf-7041-41b2-afb1-c6b0bcae2ef1',
          'photoId': 'e294c1bf-7041-41b2-afb1-c6b0bcae2ef1',
          'photoMetadata': {
            'id': '01H0D0SPPRBM1KDGWV0QQ99C19',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 277,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/443',
          'encryptId': '',
          'photoRefId': '73f77bc2-4047-40ed-bd0f-b75212cf7651',
          'photoId': '73f77bc2-4047-40ed-bd0f-b75212cf7651',
          'photoMetadata': {
            'id': '01H0D0SPWT1ZGZH4WF193C7SP3',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 443,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:15'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/494',
          'encryptId': '',
          'photoRefId': 'bb1831fc-a2db-4b0d-bacf-ce052a42d521',
          'photoId': 'bb1831fc-a2db-4b0d-bacf-ce052a42d521',
          'photoMetadata': {
            'id': '01H0D0SRXD4MXYNP17YK8ED2B8',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 494,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/417',
          'encryptId': '',
          'photoRefId': '9172b18b-2920-44c7-a24e-54d71f692484',
          'photoId': '9172b18b-2920-44c7-a24e-54d71f692484',
          'photoMetadata': {
            'id': '01H0D0SRY4GYE4VD6N58J2GJH1',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 417,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/272',
          'encryptId': '',
          'photoRefId': 'bc52bcc6-74ff-4e43-8916-5e455a448f6b',
          'photoId': 'bc52bcc6-74ff-4e43-8916-5e455a448f6b',
          'photoMetadata': {
            'id': '01H0D0SS2JXDFPCTXYF6TV9FAY',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 272,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/449',
          'encryptId': '',
          'photoRefId': '9fdad740-04d3-49fd-8907-dac5e2b23012',
          'photoId': '9fdad740-04d3-49fd-8907-dac5e2b23012',
          'photoMetadata': {
            'id': '01H0D0SS2ZGDPACYWTDAFR252B',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 449,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/320',
          'encryptId': '',
          'photoRefId': '88606d07-311c-41e1-bea7-1d6fc70b449d',
          'photoId': '88606d07-311c-41e1-bea7-1d6fc70b449d',
          'photoMetadata': {
            'id': '01H0D0SS31W0ANM9ZPPY69DRBA',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 320,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/309',
          'encryptId': '',
          'photoRefId': '466754bf-d8ba-4ab2-9a31-46068cdfcbf0',
          'photoId': '466754bf-d8ba-4ab2-9a31-46068cdfcbf0',
          'photoMetadata': {
            'id': '01H0D0SS39C9H9H691M9Q5MFQQ',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 309,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/393',
          'encryptId': '',
          'photoRefId': '3ef88fda-7916-4305-9974-76fd22c5c823',
          'photoId': '3ef88fda-7916-4305-9974-76fd22c5c823',
          'photoMetadata': {
            'id': '01H0D0SS4FDCWY0J7MA25BBY5D',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 393,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/480',
          'encryptId': '',
          'photoRefId': 'baa2816e-c41a-404d-8a73-33b6878231aa',
          'photoId': 'baa2816e-c41a-404d-8a73-33b6878231aa',
          'photoMetadata': {
            'id': '01H0D0SS4QR3F82KPHEH0ECGJ8',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 480,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/459',
          'encryptId': '',
          'photoRefId': '1580d921-409b-4a48-89ed-dfd62a3d9eff',
          'photoId': '1580d921-409b-4a48-89ed-dfd62a3d9eff',
          'photoMetadata': {
            'id': '01H0D0SS4WKCBVRZHW1PG8BCFX',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 459,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/396',
          'encryptId': '',
          'photoRefId': 'db7ffae8-d785-4d4e-8966-501486c1ac3f',
          'photoId': 'db7ffae8-d785-4d4e-8966-501486c1ac3f',
          'photoMetadata': {
            'id': '01H0D0SS55RD170PJQ5CJMNS8Q',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 396,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/338',
          'encryptId': '',
          'photoRefId': 'd8090571-a078-4275-8985-e7121c3297c5',
          'photoId': 'd8090571-a078-4275-8985-e7121c3297c5',
          'photoMetadata': {
            'id': '01H0D0SS780XC8A2ECJF9CESMC',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 338,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/223',
          'encryptId': '',
          'photoRefId': '56b8ab69-d957-41f9-8892-6a5e459c4f31',
          'photoId': '56b8ab69-d957-41f9-8892-6a5e459c4f31',
          'photoMetadata': {
            'id': '01H0D0SS86JA4E20G8F8Q3W1WX',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 223,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/486',
          'encryptId': '',
          'photoRefId': '4198042f-65ed-4244-a3cb-30c2ebde9ae8',
          'photoId': '4198042f-65ed-4244-a3cb-30c2ebde9ae8',
          'photoMetadata': {
            'id': '01H0D0SS8QB0M5QD67T6TDXEYV',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 486,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/485',
          'encryptId': '',
          'photoRefId': '4cd9c882-62f4-45a5-98e0-185d7f1e3a14',
          'photoId': '4cd9c882-62f4-45a5-98e0-185d7f1e3a14',
          'photoMetadata': {
            'id': '01H0D0SS8RHCFKS0F9CER8SSXC',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 485,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/253',
          'encryptId': '',
          'photoRefId': 'a994bf13-13e9-46c2-9d8c-45137d9c4a90',
          'photoId': 'a994bf13-13e9-46c2-9d8c-45137d9c4a90',
          'photoMetadata': {
            'id': '01H0D0SS916FKW818X0KDJNGSX',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 253,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/464',
          'encryptId': '',
          'photoRefId': '242b01e4-eed5-4d73-afcc-f77efd073b97',
          'photoId': '242b01e4-eed5-4d73-afcc-f77efd073b97',
          'photoMetadata': {
            'id': '01H0D0SS95YP0471T3KJYTDKKY',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 464,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/372',
          'encryptId': '',
          'photoRefId': 'a89cfe7d-4d08-40c3-9de4-5742951da972',
          'photoId': 'a89cfe7d-4d08-40c3-9de4-5742951da972',
          'photoMetadata': {
            'id': '01H0D0SS9XYKFC9T3GXMWZZ657',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 372,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/461',
          'encryptId': '',
          'photoRefId': 'c206902e-0a2c-4345-ad06-fd4df12b39ff',
          'photoId': 'c206902e-0a2c-4345-ad06-fd4df12b39ff',
          'photoMetadata': {
            'id': '01H0D0SS9ZBV29NY6MH8DGY5NC',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 461,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/407',
          'encryptId': '',
          'photoRefId': '2e7b0eba-ff7c-40a9-bc39-242ea54bf3ff',
          'photoId': '2e7b0eba-ff7c-40a9-bc39-242ea54bf3ff',
          'photoMetadata': {
            'id': '01H0D0SSAH4ENDSRWC59R2B2FY',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 407,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/326',
          'encryptId': '',
          'photoRefId': 'bd480e91-12d7-43a8-998f-36a76930bf5d',
          'photoId': 'bd480e91-12d7-43a8-998f-36a76930bf5d',
          'photoMetadata': {
            'id': '01H0D0SSASSV0H8ACRWGS26HAZ',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 326,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:17'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/226',
          'encryptId': '',
          'photoRefId': '03f46435-de5c-463f-afea-27301069bbb9',
          'photoId': '03f46435-de5c-463f-afea-27301069bbb9',
          'photoMetadata': {
            'id': '01H0D0SSB77X2ET8Y7KCMHHTPP',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 226,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        },
        {
          'url': 'https://loremflickr.com/1000/486',
          'encryptId': '',
          'photoRefId': '4c391bae-d0d2-45a0-a5b9-ecc5549b36d9',
          'photoId': '4c391bae-d0d2-45a0-a5b9-ecc5549b36d9',
          'photoMetadata': {
            'id': '01H0D0SSDAM0NEDVX3JSPCJS0Q',
            'llx': 0.0,
            'lly': 0.0,
            'urx': 1.0,
            'ury': 1.0,
            'data': null,
            'title': '',
            'width': 1000,
            'effect': 'Auto',
            'height': 486,
            'source': 'mb',
            'rotation': 0,
            'uploadTime': '2023:05:14 11:37:18'
          }
        }
      ]
    },
    'reportingData': {
      'properties': [
        {
          'key': 'overtimeDays',
          'value': ''
        },
        {
          'key': 'stickerText',
          'value': ''
        },
        {
          'key': 'iterations',
          'value': 1
        },
        {
          'key': 'designRequestdays',
          'value': 3
        },
        {
          'key': 'mmbDesigner',
          'value': null
        },
        {
          'key': 'curationStep',
          'value': true
        },
        {
          'key': 'mmbSeen',
          'value': null
        },
        {
          'key': 'size',
          'value': '10x10'
        },
        {
          'key': 'style',
          'value': 'autumn-memories-sfly'
        },
        {
          'key': 'styleName',
          'value': 'Autumn Memories Sfly'
        },
        {
          'key': 'styleId',
          'value': null
        },
        {
          'key': 'title',
          'value': 'My Book'
        },
        {
          'key': 'subTitle',
          'value': ''
        },
        {
          'key': 'curate',
          'value': true
        },
        {
          'key': 'priority',
          'value': 0
        },
        {
          'key': 'promoCode',
          'value': 2
        },
        {
          'key': 'coverStyle',
          'value': 'hc'
        },
        {
          'key': 'coverSpecId',
          'value': '10x10_bk_hard'
        },
        {
          'key': 'focusOption',
          'value': ''
        },
        {
          'key': 'phoneNumber',
          'value': ''
        },
        {
          'key': 'productType',
          'value': 'photobook'
        },
        {
          'key': 'creationTime',
          'value': null
        },
        {
          'key': 'curateDensity',
          'value': 1
        },
        {
          'key': 'initialDevice',
          'value': 'desktop'
        },
        {
          'key': 'spreadDensity',
          'value': 'high'
        },
        {
          'key': 'photoStripSort',
          'value': 'datetime'
        },
        {
          'key': 'stickerDensity',
          'value': 'few'
        },
        {
          'key': 'photoStripCount',
          'value': 25
        },
        {
          'key': 'specialInstructions',
          'value': ''
        }
      ]
    }
  }
}
