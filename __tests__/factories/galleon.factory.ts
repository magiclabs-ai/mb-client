import {faker} from '@faker-js/faker'

export type galleonFactoryProps = {
  title?: string
}

export function galleonFactory(props?: galleonFactoryProps) {
  return {
    'title': props?.title || faker.lorem.words(3),
    'coverSpecId': '11x14_bk_hard',
    'styleId': 5161,
    'userId': '008096886791',
    'magicShopBook': {
      'pages': [
        {
          'pageNum': -1,
          'type': 'frontCover',
          'canvas': {
            'backgroundId': undefined,
            'assets': [
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.004166666666666208,
                  'y': 0.16343055555555558,
                  'width': 0.9916666666666668,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 1
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.054074017667871094,
                    1.0,
                    0.9386056080817383
                  ]
                },
                'position': {
                  'x': 0.03250000000000005,
                  'y': 0.01819444444444447,
                  'width': 0.9349999999999999,
                  'height': 0.6202777777777778,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 2
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_rw-quote-from-this-day',
                'position': {
                  'x': 0.032500000000000064,
                  'y': 0.17326388888888894,
                  'width': 0.12621931524547805,
                  'rotation': 270
                },
                'seqNum': 3,
                'z': 2
              },
              {
                'type': 'textArea',
                'horizJustification': 'center',
                'vertJustification': undefined,
                'text': 'Featured story',
                'fontId': 'font_avante-garde_book',
                'fontSize': 60,
                'fontColor': '#000000',
                'seqNum': 4,
                'z': 3,
                'position': {
                  'x': 0.06428005905875422,
                  'y': 0.6967387951364178,
                  'width': 0.8696662930970908,
                  'height': 0.24316818358158213,
                  'rotation': 0
                }
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.0,
                  'y': 0.9583333333333334,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 5,
                'z': 4
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.0,
                  'y': 0.6664870741104828,
                  'width': 1.0,
                  'rotation': 0
                },
                'seqNum': 6,
                'z': 5
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.054074017667871094,
                    1.0,
                    0.9386056080817383
                  ]
                },
                'position': {
                  'x': 0.03250000000000005,
                  'y': 0.01819444444444447,
                  'width': 0.9349999999999999,
                  'height': 0.6202777777777778,
                  'rotation': 0
                },
                'seqNum': 7,
                'z': 6,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.03250000000000005,
                  'y': 0.48340277777777785,
                  'width': 0.12621931524547805,
                  'rotation': 0
                },
                'seqNum': 8,
                'z': 6
              }
            ]
          }
        },
        {
          'pageNum': 1,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670542710388837,
                  'finalCrop': [
                    0.05198658731248646,
                    0.0,
                    0.9256249315390661,
                    1.0
                  ]
                },
                'position': {
                  'x': -0.01,
                  'y': -0.01,
                  'width': 0.6683333333333334,
                  'height': 1.02,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 100,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.04933632963582084,
                    0.0756578947368164,
                    0.8980205401621366,
                    0.9243421052631836
                  ]
                },
                'position': {
                  'x': 0.6068181818181817,
                  'y': 0.5916666666666667,
                  'width': 0.24469696969696975,
                  'height': 0.31666666666666676,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 101,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.6068181818181817,
                  'y': 0.5916666666666667,
                  'width': 0.24469696969696975,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 101
              }
            ]
          }
        },
        {
          'pageNum': 2,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'emb_sfly_rw-quote-from-this-day',
                'position': {
                  'x': 0.19157196969696969,
                  'y': 0.07083333333333333,
                  'width': 0.19157196969696969,
                  'rotation': 90
                },
                'seqNum': 1,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.5038825757575758,
                  'y': 0.2770833333333333,
                  'width': 0.9916666666666666,
                  'rotation': 90
                },
                'seqNum': 2,
                'z': 10
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670542710388837,
                  'finalCrop': [
                    0.29119318181818177,
                    0.0,
                    0.7088068181818181,
                    1.0
                  ]
                },
                'position': {
                  'x': 0.044097222222221934,
                  'y': 0.12569444444444447,
                  'width': 0.5784722222222222,
                  'height': 0.7486111111111111,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 101,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.6225694444444442,
                  'y': 0.12569444444444447,
                  'width': 0.5784722222222222,
                  'rotation': 90
                },
                'seqNum': 4,
                'z': 101
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.1887152777777775,
                  'y': 0.12569444444444447,
                  'width': 0.14461805555555554,
                  'rotation': 90
                },
                'seqNum': 5,
                'z': 101
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.6225694444444441,
                  'y': 0.3128472222222223,
                  'width': 0.14461805555555554,
                  'rotation': 180
                },
                'seqNum': 6,
                'z': 101
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.044097222222221934,
                  'y': 0.6871527777777778,
                  'width': 0.14461805555555554,
                  'rotation': 0
                },
                'seqNum': 7,
                'z': 101
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.47795138888888855,
                  'y': 0.8743055555555557,
                  'width': 0.14461805555555554,
                  'rotation': 270
                },
                'seqNum': 8,
                'z': 101
              }
            ]
          }
        },
        {
          'pageNum': 3,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.7046873812841192,
                  'y': 0.5242662402477762,
                  'width': 0.9916666666666666,
                  'rotation': 37
                },
                'seqNum': 1,
                'z': 10
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670542710388837,
                  'finalCrop': [
                    0.0,
                    0.040051020408111704,
                    1.0,
                    0.9272039008384309
                  ]
                },
                'position': {
                  'x': -6.746111111111111,
                  'y': 0.12569444444444447,
                  'width': 7.345555555555556,
                  'height': 0.7486111111111111,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 100,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_rw-quote-from-this-day',
                'position': {
                  'x': -6.601493055555556,
                  'y': 0.3128472222222223,
                  'width': 0.14461805555555557,
                  'rotation': 180
                },
                'seqNum': 3,
                'z': 100
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.5994444444444453,
                  'y': 0.3128472222222223,
                  'width': 0.14461805555555557,
                  'rotation': 180
                },
                'seqNum': 4,
                'z': 100
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': -6.746111111111111,
                  'y': 0.6871527777777778,
                  'width': 0.14461805555555557,
                  'rotation': 0
                },
                'seqNum': 5,
                'z': 100
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_rw-quote-from-this-day',
                'position': {
                  'x': 0.5994444444444453,
                  'y': 0.8743055555555557,
                  'width': 0.14461805555555557,
                  'rotation': 180
                },
                'seqNum': 6,
                'z': 100
              }
            ]
          }
        },
        {
          'pageNum': 4,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.012901429877148438,
                    1.0,
                    0.8159317329074218
                  ]
                },
                'position': {
                  'x': -4.933333333333334,
                  'y': 0.09166666666666666,
                  'width': 5.866666666666667,
                  'height': 0.4416666666666667,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 101,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.05361339675654297,
                    1.0,
                    0.7051285482716797
                  ]
                },
                'position': {
                  'x': -4.933333333333334,
                  'y': 0.5499999999999999,
                  'width': 5.866666666666667,
                  'height': 0.3583333333333334,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 102,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 5,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.08009722222222222,
                  'width': 0.9916666666666666,
                  'rotation': 270
                },
                'seqNum': 1,
                'z': 10
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn-tape',
                'position': {
                  'x': 0.004166666666666652,
                  'y': 0.9083333333333333,
                  'width': 0.9916666666666666,
                  'rotation': 180
                },
                'seqNum': 2,
                'z': 10
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670542710388837,
                  'finalCrop': [
                    0.0,
                    0.040051020408111704,
                    1.0,
                    0.9561935436969415
                  ]
                },
                'position': {
                  'x': -6.933333333333333,
                  'y': 0.09166666666666666,
                  'width': 8.013333333333332,
                  'height': 0.8166666666666668,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 100,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': 6,
          'type': 'page',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670542710388837,
                  'finalCrop': [
                    0.0,
                    0.07440287539029256,
                    1.0,
                    0.8754674129817819
                  ]
                },
                'position': {
                  'x': 0.175,
                  'y': 0.5083333333333333,
                  'width': 0.835,
                  'height': 0.5016666666666667,
                  'rotation': 0
                },
                'seqNum': 1,
                'z': 100,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.08790702291992188,
                    1.0,
                    0.8889715605113281
                  ]
                },
                'position': {
                  'x': 0.175,
                  'y': -0.01,
                  'width': 0.835,
                  'height': 0.5016666666666666,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 101,
                'frame': 'frame_line_solid_medium_white'
              }
            ]
          }
        },
        {
          'pageNum': -3,
          'type': 'backCover',
          'canvas': {
            'backgroundId': 'emb_sfly_nn',
            'assets': [
              {
                'type': 'embellishment',
                'id': 'emb_sfly_rw-quote-from-this-day',
                'position': {
                  'x': 0.813953488372093,
                  'y': 0.9725000000000001,
                  'width': 0.813953488372093,
                  'rotation': 90
                },
                'seqNum': 1,
                'z': 0
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.054074017667871094,
                    1.0,
                    0.9386056080817383
                  ]
                },
                'position': {
                  'x': 0.03250000000000005,
                  'y': 0.01819444444444447,
                  'width': 0.9349999999999999,
                  'height': 0.6202777777777778,
                  'rotation': 0
                },
                'seqNum': 2,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'imageArea',
                'imageAssignment': {
                  'photoRefId': 1670543200078499,
                  'finalCrop': [
                    0.0,
                    0.054074017667871094,
                    1.0,
                    0.9386056080817383
                  ]
                },
                'position': {
                  'x': 0.03250000000000005,
                  'y': 0.01819444444444447,
                  'width': 0.9349999999999999,
                  'height': 0.6202777777777778,
                  'rotation': 0
                },
                'seqNum': 3,
                'z': 2,
                'frame': 'frame_line_solid_medium_white'
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.9674999999999997,
                  'y': 0.17326388888888888,
                  'width': 0.12621931524547805,
                  'rotation': 180
                },
                'seqNum': 4,
                'z': 2
              },
              {
                'type': 'embellishment',
                'id': 'emb_sfly_nn',
                'position': {
                  'x': 0.8412806847545218,
                  'y': 0.6384722222222222,
                  'width': 0.12621931524547805,
                  'rotation': 270
                },
                'seqNum': 5,
                'z': 2
              }
            ]
          }
        }
      ],
      'photoStrip': [
        {
          // eslint-disable-next-line max-len
          'url': 'https://uniim-cp.shutterfly.com/procsimple?DATA=v4O5CucQnwsfigEFcVIXS6Fk6cNnwBfo9Jpy03F8hAQK.Yr6yb043pad0AmWB4VgXG2CeP5NfrqBQSig.luIQ75B&cropll=0%2C0&cropur=1%2C1&effect=Auto&imageID=0k6VQmXQc-sj9D-xrgRBsa6QEPnhCl..F06mdomlnwMO&rendersize=fit1000x1000&rotation=0',
          'encryptId': '00-T5wobzSq8uPuRbItXVvLyy6BRE0dWywEzV0UUXqW-PI5mnOAcIYSuqQD-1_EvTQM_vW9M_6jjkSmnjDzLzBNcA',
          'photoRefId': 1670543200078499,
          // 'photoId': 1670543200078499,
          'photoMetadata': {
            'id': '0k6VQmXQc-sj9D-xrgRBsa6QEPnhCl..F06mdomlnwMO',
            'llx': 0,
            'lly': 0,
            'urx': 1,
            'ury': 1,
            'data': 'v4O5CucQnwsfigEFcVIXS6Fk6cNnwBfo9Jpy03F8hAQK.Yr6yb043pad0AmWB4VgXG2CeP5NfrqBQSig.luIQ75B',
            'title': '',
            'width': 5184,
            'effect': 'Auto',
            'height': 3456,
            'source': 'sfly',
            'rotation': 270,
            'uploadTime': '2015-04-24T01:29:06.000Z'
          }
        },
        {
          // eslint-disable-next-line max-len
          'url': 'https://uniim-cp.shutterfly.com/procsimple?DATA=v4O5CucQnwsfC.XUS9.0kiP5uqxZWErrmtEHjeR1QaH-cZ4Im91R0rkh32nVSDs9lMp.tKMjMmPnAVeVYVLXcQE76NFAsnmm8Q&cropll=0%2C0&cropur=1%2C1&effect=Auto&imageID=0k6VQmXQc-sj9D-xrgRBsaattJyngCD3R9-kRg-W-XYM&rendersize=fit1000x1000&rotation=0',
          'encryptId': '00-T5wobzSq8uPuRbItXVvLyy6BRE0dWywEzV0UUXqW-PLKbinnITzaWCo7NyMIazEu_vW9M_6jjkSmnjDzLzBNcA',
          'photoRefId': 1670542710388837,
          // 'photoId': 1670542710388837,
          'photoMetadata': {
            'id': '0k6VQmXQc-sj9D-xrgRBsaattJyngCD3R9-kRg-W-XYM',
            'llx': 0,
            'lly': 0,
            'urx': 1,
            'ury': 1,
            // eslint-disable-next-line max-len
            'data': 'v4O5CucQnwsfC.XUS9.0kiP5uqxZWErrmtEHjeR1QaH-cZ4Im91R0rkh32nVSDs9lMp.tKMjMmPnAVeVYVLXcQE76NFAsnmm8Q',
            'title': '',
            'width': 5184,
            'effect': 'Auto',
            'height': 3456,
            'source': 'sfly',
            'rotation': 0,
            'uploadTime': '2015-04-24T01:29:25.000Z'
          }
        }
      ]
    },
    'reportingData': {
      'properties': [
        {
          'key': 'mmbSeen',
          'value': null
        },
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
          'value': 1
        },
        {
          'key': 'curationStep',
          'value': true
        },
        {
          'key': 'size',
          'value': '8x8'
        },
        {
          'key': 'style',
          'value': 5142
        },
        {
          'key': 'title',
          'value': '8x8 rotation check'
        },
        {
          'key': 'curate',
          'value': true
        },
        {
          'key': 'styleId',
          'value': 5142
        },
        {
          'key': 'priority',
          'value': '0'
        },
        {
          'key': 'subTitle',
          'value': ''
        },
        {
          'key': 'promoCode',
          'value': '2'
        },
        {
          'key': 'styleName',
          'value': 'Simply Black'
        },
        {
          'key': 'coverStyle',
          'value': ''
        },
        {
          'key': 'coverSpecId',
          'value': '8x8_bk_hard'
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
          'value': '2020-07-01T06:56:03.142Z'
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
          'value': 'medium'
        },
        {
          'key': 'photoStripSort',
          'value': 'datetime'
        },
        {
          'key': 'stickerDensity',
          'value': 0.5
        },
        {
          'key': 'photoStripCount',
          'value': 50
        },
        {
          'key': 'specialInstructions',
          'value': 'no design'
        },
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
          'value': 1
        },
        {
          'key': 'curationStep',
          'value': true
        },
        {
          'key': 'size',
          'value': '8x8'
        },
        {
          'key': 'style',
          'value': 5142
        },
        {
          'key': 'title',
          'value': '8x8 rotation check'
        },
        {
          'key': 'curate',
          'value': true
        },
        {
          'key': 'styleId',
          'value': 5142
        },
        {
          'key': 'priority',
          'value': '0'
        },
        {
          'key': 'subTitle',
          'value': ''
        },
        {
          'key': 'promoCode',
          'value': '2'
        },
        {
          'key': 'styleName',
          'value': 'Simply Black'
        },
        {
          'key': 'coverStyle',
          'value': ''
        },
        {
          'key': 'coverSpecId',
          'value': '8x8_bk_hard'
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
          'value': '2020-07-01T06:56:03.142Z'
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
          'value': 'medium'
        },
        {
          'key': 'photoStripSort',
          'value': 'datetime'
        },
        {
          'key': 'stickerDensity',
          'value': 0.5
        },
        {
          'key': 'photoStripCount',
          'value': 50
        },
        {
          'key': 'specialInstructions',
          'value': 'no design'
        },
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
          'value': ''
        },
        {
          'key': 'curationStep',
          'value': true
        },
        {
          'key': 'size',
          'value': '8x8'
        },
        {
          'key': 'style',
          'value': 5142
        },
        {
          'key': 'title',
          'value': '8x8 rotation check'
        },
        {
          'key': 'curate',
          'value': true
        },
        {
          'key': 'styleId',
          'value': 5142
        },
        {
          'key': 'priority',
          'value': '0'
        },
        {
          'key': 'subTitle',
          'value': ''
        },
        {
          'key': 'promoCode',
          'value': '2'
        },
        {
          'key': 'styleName',
          'value': 'Simply Black'
        },
        {
          'key': 'coverStyle',
          'value': ''
        },
        {
          'key': 'coverSpecId',
          'value': '8x8_bk_hard'
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
          'value': '2020-07-01T06:56:03.142Z'
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
          'value': 'medium'
        },
        {
          'key': 'photoStripSort',
          'value': 'datetime'
        },
        {
          'key': 'stickerDensity',
          'value': 0.5
        },
        {
          'key': 'photoStripCount',
          'value': 50
        },
        {
          'key': 'specialInstructions',
          'value': 'no design'
        },
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
          'value': ''
        },
        {
          'key': 'curationStep',
          'value': true
        },
        {
          'key': 'size',
          'value': '8x8'
        },
        {
          'key': 'style',
          'value': 5142
        },
        {
          'key': 'title',
          'value': '8x8 rotation check'
        },
        {
          'key': 'curate',
          'value': true
        },
        {
          'key': 'styleId',
          'value': 5142
        },
        {
          'key': 'priority',
          'value': '0'
        },
        {
          'key': 'subTitle',
          'value': ''
        },
        {
          'key': 'promoCode',
          'value': '2'
        },
        {
          'key': 'styleName',
          'value': 'Simply Black'
        },
        {
          'key': 'coverStyle',
          'value': ''
        },
        {
          'key': 'coverSpecId',
          'value': '8x8_bk_hard'
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
          'value': '2020-07-01T06:56:03.142Z'
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
          'value': 'medium'
        },
        {
          'key': 'photoStripSort',
          'value': 'datetime'
        },
        {
          'key': 'stickerDensity',
          'value': 0.5
        },
        {
          'key': 'photoStripCount',
          'value': 50
        },
        {
          'key': 'specialInstructions',
          'value': 'no design'
        }
      ]
    }
  }
}
