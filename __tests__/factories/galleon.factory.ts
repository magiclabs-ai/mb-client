import {BookCreationRequest} from '@/models/galleon'
import {faker} from '@faker-js/faker'

export type galleonFactoryProps = {
  title?: string
}

export function galleonFactory(props?: galleonFactoryProps): BookCreationRequest {
  return {
    'title': props?.title || faker.lorem.words(3),
    'binding': 'hinged',
    'coverSpecId': '8x8_bk_hard',
    'styleId': 6020,
    'userId': '01H2AGZTCW34BZ1647F00STKAA',
    'magicShopBook': {
        'pages': [
            {
                'pageNum': -1,
                'type': 'frontCover',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_navy',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-classic-yellow',
                            'position': {
                                'x': 0.0,
                                'y': 0.9333333333333333,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvyt6Q9-K8IKG',
                                'finalCrop': [
                                    0.005606830120086684,
                                    0.12452739951882812,
                                    0.9948908686637878,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.3140019999999996,
                                'y': 0.10666666666666667,
                                'width': 0.3719960000000001,
                                'height': 0.586666666666668,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 1
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool2',
                            'position': {
                                'x': 0.27399999999999963,
                                'y': 0.06666666666666667,
                                'width': 0.4520000000000001,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 1
                        },
                        {
                            'type': 'textArea',
                            'horizJustification': 'center',
                            'vertJustification': null,
                            'text': 'Photo Book - 6/7/2023',
                            'fontId': 'font_egyptian-slate-std_medium',
                            'fontSize': 36,
                            'fontColor': '#000000',
                            'seqNum': 4,
                            'z': 200,
                            'position': {
                                'x': 0.09999999999999987,
                                'y': 0.7666666666666666,
                                'width': 0.8,
                                'height': 0.13044674746765034,
                                'rotation': 0
                            }
                        }
                    ]
                }
            },
            {
                'pageNum': 1,
                'type': 'page',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-doodle-dots-ocean-mist',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-simple-black-handrawn-line',
                            'position': {
                                'x': 0.0,
                                'y': 0.9782426778242679,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLcACL72Z2IGC',
                                'finalCrop': [
                                    0.05377643914855242,
                                    0.0,
                                    0.9789465071757633,
                                    0.95
                                ]
                            },
                            'position': {
                                'x': 0.3416666666666667,
                                'y': 0.09166666666666666,
                                'width': 0.5666666666666668,
                                'height': 0.8166666666666668,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLN2cLJPUlRD',
                                'finalCrop': [
                                    0.0013598520391518401,
                                    0.0,
                                    0.9901124737825656,
                                    0.9010080501436875
                                ]
                            },
                            'position': {
                                'x': 0.09166666666666666,
                                'y': 0.42500000000000004,
                                'width': 0.3166666666666666,
                                'height': 0.4,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-character-goofy',
                            'position': {
                                'x': 0.11666666666666665,
                                'y': 0.13333333333333333,
                                'width': 0.18333333333333332,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 1000
                        }
                    ]
                }
            },
            {
                'pageNum': 2,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_white',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-minnies',
                            'position': {
                                'x': 0.0,
                                'y': 0.9623430962343098,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-minnies',
                            'position': {
                                'x': 0.5,
                                'y': 0.9623430962343098,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvlkr.hk-trYD',
                                'finalCrop': [
                                    0.10060267657351535,
                                    0.0,
                                    0.8991568484871386,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.20835527777777774,
                                'y': 0.3094716666666667,
                                'width': 0.1874561111111111,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.1873611111111111,
                                'y': 0.09166666666666666,
                                'width': 0.4588888888888889,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvMYaT9EkeSjJ',
                                'finalCrop': [
                                    0.1974345371363653,
                                    0.0,
                                    0.9466408863427144,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.6562719444444444,
                                'y': 0.3094716666666667,
                                'width': 0.1874561111111111,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.6352777777777777,
                                'y': 0.09166666666666666,
                                'width': 0.4588888888888889,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLeZTiXfYKSPA',
                                'finalCrop': [
                                    0.04397282004356388,
                                    0.0705838074738125,
                                    0.995003342628479,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.06666666666666667,
                                'y': 0.4666666666666666,
                                'width': 0.1375,
                                'height': 0.3583333333333333,
                                'rotation': 0
                            },
                            'seqNum': 7,
                            'z': 102
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-character-goofy-face',
                            'position': {
                                'x': 0.06666666666666667,
                                'y': 0.09166666666666666,
                                'width': 0.18333333333333332,
                                'rotation': 0
                            },
                            'seqNum': 8,
                            'z': 1000
                        }
                    ]
                }
            },
            {
                'pageNum': 3,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 4,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_cherry',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-mickey',
                            'position': {
                                'x': 0.0,
                                'y': 0.9673640167364018,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-mickey',
                            'position': {
                                'x': 0.5,
                                'y': 0.9673640167364018,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv4ZG3IWpWLcO',
                                'finalCrop': [
                                    0.03756618297018999,
                                    0.0,
                                    0.9627362509974008,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.5458333333333333,
                                'y': 0.09166666666666666,
                                'width': 0.2833333333333333,
                                'height': 0.8166666666666668,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpmm7JOppC5G',
                                'finalCrop': [
                                    0.07256005474322956,
                                    0.0,
                                    0.8275478058219561,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.09765998089780327,
                                'y': 0.2999966666666667,
                                'width': 0.3046800382043935,
                                'height': 0.43035999999999996,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-travel-tags',
                            'position': {
                                'x': 0.8110847793833537,
                                'y': 0.21751994074670572,
                                'width': 0.11666666666666647,
                                'rotation': 19
                            },
                            'seqNum': 5,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-poppy',
                            'position': {
                                'x': 0.0768863419293219,
                                'y': 0.25833333333333336,
                                'width': 0.6924546322827125,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvjI-8XcbXcgM',
                                'finalCrop': [
                                    0.045806318521499544,
                                    0.01918058097358333,
                                    0.7576131820678711,
                                    0.9682563990354166
                                ]
                            },
                            'position': {
                                'x': 0.8375,
                                'y': 0.6749999999999999,
                                'width': 0.11666666666666671,
                                'height': 0.23333333333333342,
                                'rotation': 0
                            },
                            'seqNum': 7,
                            'z': 102
                        }
                    ]
                }
            },
            {
                'pageNum': 5,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 6,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_white',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-rich-black',
                            'position': {
                                'x': 0.0,
                                'y': 0.825,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-rich-black',
                            'position': {
                                'x': 0.5,
                                'y': 0.825,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-simple-black-handrawn-line',
                            'position': {
                                'x': 0.0,
                                'y': 0.19490934449093444,
                                'width': 0.9916666666666667,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 10
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-simple-black-handrawn-line',
                            'position': {
                                'x': 0.0,
                                'y': 0.7833333333333333,
                                'width': 0.9916666666666667,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 10
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLbfK2siowSGE',
                                'finalCrop': [
                                    0.037541968924157884,
                                    0.047382831573495376,
                                    0.9971306191858124,
                                    0.801358014345139
                                ]
                            },
                            'position': {
                                'x': -0.005,
                                'y': 0.21666666666666667,
                                'width': 0.5008333333333334,
                                'height': 0.5666666666666668,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvO3nttb5UnuH',
                                'finalCrop': [
                                    0.045508563518523955,
                                    0.0,
                                    0.9929692745208738,
                                    0.8561274486381646
                                ]
                            },
                            'position': {
                                'x': 0.6060744115413819,
                                'y': 0.3973766666666667,
                                'width': 0.2878511769172362,
                                'height': 0.35110666666666673,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-rec-pool',
                            'position': {
                                'x': 0.5886484434320425,
                                'y': 0.21666666666666667,
                                'width': 0.6454062262718301,
                                'rotation': 0
                            },
                            'seqNum': 7,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 7,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 8,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_silver',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-white',
                            'position': {
                                'x': 0.0,
                                'y': 0.7079497907949791,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-white',
                            'position': {
                                'x': 0.5,
                                'y': 0.7079497907949791,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvEpwXtZXI96E',
                                'finalCrop': [
                                    0.0,
                                    0.058481319089125,
                                    1.0,
                                    0.8915121720836875
                                ]
                            },
                            'position': {
                                'x': 0.5458333333333333,
                                'y': -0.01,
                                'width': 0.4591666666666666,
                                'height': 1.02,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-text-air-mail',
                            'position': {
                                'x': 0.5297164965497662,
                                'y': 0.17406222386767592,
                                'width': 0.11666666666666647,
                                'rotation': 22
                            },
                            'seqNum': 4,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 9,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 10,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_navy',
                    'assets': [
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOL7NftaLz5H0L',
                                'finalCrop': [
                                    8.98852290651613e-17,
                                    0.08160687442375,
                                    1.0,
                                    0.7967617416803751
                                ]
                            },
                            'position': {
                                'x': 0.13340833333333335,
                                'y': 0.18991732546705997,
                                'width': 0.23318333333333338,
                                'height': 0.6201653490658802,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool',
                            'position': {
                                'x': 0.10833333333333334,
                                'y': 0.13977384464110126,
                                'width': 0.5666666666666668,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLNAqBysoRedI',
                                'finalCrop': [
                                    0.0033310949802404046,
                                    0.1510292850435,
                                    0.973583340644837,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.5458333333333333,
                                'y': 0.09166666666666666,
                                'width': 0.26250000000000007,
                                'height': 0.8166666666666668,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvi8gDzKV3I3I',
                                'finalCrop': [
                                    0.01382401585578853,
                                    0.0,
                                    0.9748472571372979,
                                    0.8681971327486719
                                ]
                            },
                            'position': {
                                'x': 0.8166666666666667,
                                'y': 0.4666666666666666,
                                'width': 0.13750000000000007,
                                'height': 0.44166666666666665,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 102
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-travel-tags',
                            'position': {
                                'x': 0.5166666666666667,
                                'y': 0.2333333333333333,
                                'width': 0.11666666666666647,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 102
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-character-mickey-goofy-pluto',
                            'position': {
                                'x': 0.8125,
                                'y': 0.10833333333333334,
                                'width': 0.2749999999999999,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 1000
                        }
                    ]
                }
            },
            {
                'pageNum': 11,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 12,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-doodle-dots-lemon',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-cherry',
                            'position': {
                                'x': 1.0543584379358437,
                                'y': 0.0,
                                'width': 0.9999999999999996,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKS0stJ5SbfA',
                                'finalCrop': [
                                    0.0,
                                    0.20352359854765628,
                                    1.0,
                                    0.9556603506844532
                                ]
                            },
                            'position': {
                                'x': 0.0875,
                                'y': 0.09166666666666666,
                                'width': 0.32499999999999996,
                                'height': 0.27499999999999997,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv-HgVF5hEC5C',
                                'finalCrop': [
                                    0.03040786135196685,
                                    0.1808167695999375,
                                    0.9582606102228165,
                                    0.9506061077118124
                                ]
                            },
                            'position': {
                                'x': 0.636076225,
                                'y': 0.14066666666666666,
                                'width': 0.22784755,
                                'height': 0.7186666666666667,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool2',
                            'position': {
                                'x': 0.611575,
                                'y': 0.09166666666666666,
                                'width': 0.5537000000000001,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvwLd1wtL3sfI',
                                'finalCrop': [
                                    0.009278178215026855,
                                    0.0401964793471875,
                                    0.9958449602127075,
                                    0.9602349092693749
                                ]
                            },
                            'position': {
                                'x': 0.0875,
                                'y': 0.38333333333333336,
                                'width': 0.15833333333333333,
                                'height': 0.5249999999999999,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 102
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvSXeMFLur8YB',
                                'finalCrop': [
                                    0.011093586683273326,
                                    0.053964162858125005,
                                    0.9907644987106323,
                                    0.9675717403573125
                                ]
                            },
                            'position': {
                                'x': 0.25416666666666665,
                                'y': 0.38333333333333336,
                                'width': 0.15833333333333333,
                                'height': 0.5249999999999999,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 103
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-heart',
                            'position': {
                                'x': 0.22083333333333333,
                                'y': 0.325,
                                'width': 0.11666666666666671,
                                'rotation': 0
                            },
                            'seqNum': 7,
                            'z': 104
                        }
                    ]
                }
            },
            {
                'pageNum': 13,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 14,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-giant-mickey-gray',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-navy',
                            'position': {
                                'x': 0.05416666666666667,
                                'y': 0.0,
                                'width': 0.9999999999999999,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-air-mail-minnie',
                            'position': {
                                'x': 0.5,
                                'y': 0.9079497907949791,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLCSSwRqQYV1O',
                                'finalCrop': [
                                    0.0,
                                    0.2005673341380625,
                                    1.0,
                                    0.8690139360798125
                                ]
                            },
                            'position': {
                                'x': 0.06666666666666667,
                                'y': -0.01,
                                'width': 0.4291666666666667,
                                'height': 1.02,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv.etX6Z6DuKO',
                                'finalCrop': [
                                    0.0,
                                    0.25222543693774996,
                                    1.0,
                                    0.9332181730151875
                                ]
                            },
                            'position': {
                                'x': 0.5886087499999999,
                                'y': 0.3182001614205004,
                                'width': 0.1352825,
                                'height': 0.3635996771589992,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-mickey-ears-black',
                            'position': {
                                'x': 0.5458333333333333,
                                'y': 0.23264729620661817,
                                'width': 0.44166666666666665,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvxqoBGizE0ZF',
                                'finalCrop': [
                                    0.00812628427971362,
                                    0.0,
                                    0.988183264336694,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.775,
                                'y': 0.175,
                                'width': 0.1791666666666667,
                                'height': 0.6499999999999999,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 102
                        }
                    ]
                }
            },
            {
                'pageNum': 15,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 16,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-grid-blue',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-mickey-heads-large',
                            'position': {
                                'x': 0.9999999999999999,
                                'y': 0.0,
                                'width': 0.9999999999999997,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvg1sL.-JetyB',
                                'finalCrop': [
                                    0.01806396245956437,
                                    0.0,
                                    0.9841565489768983,
                                    0.9671159896810156
                                ]
                            },
                            'position': {
                                'x': 0.15627194444444445,
                                'y': 0.3094716666666667,
                                'width': 0.18745611111111113,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.13527777777777777,
                                'y': 0.09166666666666666,
                                'width': 0.458888888888889,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHkufiea4psH',
                                'finalCrop': [
                                    0.022163778543471877,
                                    0.0,
                                    0.9888378977775569,
                                    0.9676981384282032
                                ]
                            },
                            'position': {
                                'x': 0.6562719444444444,
                                'y': 0.3094716666666667,
                                'width': 0.1874561111111111,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.6352777777777777,
                                'y': 0.09166666666666666,
                                'width': 0.4588888888888889,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 17,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 18,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_white',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-marigold',
                            'position': {
                                'x': 1.0335251046025105,
                                'y': 0.0,
                                'width': 1.0000000000000002,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpLJQBVLXOXJ',
                                'finalCrop': [
                                    0.008009344339370644,
                                    0.011257809381640626,
                                    0.995705246925354,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.15627194444444445,
                                'y': 0.3094716666666667,
                                'width': 0.18745611111111113,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.13527777777777777,
                                'y': 0.09166666666666666,
                                'width': 0.458888888888889,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvFcs8X1c5-8F',
                                'finalCrop': [
                                    0.002257049083709635,
                                    0.0,
                                    0.9957894086837766,
                                    0.99458483032
                                ]
                            },
                            'position': {
                                'x': 0.6562719444444444,
                                'y': 0.3094716666666667,
                                'width': 0.1874561111111111,
                                'height': 0.5568850000000001,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.6352777777777777,
                                'y': 0.09166666666666666,
                                'width': 0.4588888888888889,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 19,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 20,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_white',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-pool',
                            'position': {
                                'x': 0.0,
                                'y': 0.7079497907949791,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-pool',
                            'position': {
                                'x': 0.5,
                                'y': 0.7079497907949791,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvyt6Q9-K8IKG',
                                'finalCrop': [
                                    0.0,
                                    0.20463351270976565,
                                    1.0,
                                    0.9679372821110939
                                ]
                            },
                            'position': {
                                'x': 0.6291666666666667,
                                'y': -0.01,
                                'width': 0.37583333333333324,
                                'height': 1.02,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        }
                    ]
                }
            },
            {
                'pageNum': 21,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 22,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-grid-blue',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-classic-yellow',
                            'position': {
                                'x': 0.1375,
                                'y': 0.0,
                                'width': 0.9999999999999999,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-silver',
                            'position': {
                                'x': 0.5,
                                'y': 0.8166666666666667,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv8sG-wW0mc.E',
                                'finalCrop': [
                                    7.364091055940927e-17,
                                    0.0683419592768125,
                                    1.0,
                                    0.897860031566
                                ]
                            },
                            'position': {
                                'x': 0.15000000000000002,
                                'y': -0.01,
                                'width': 0.3458333333333333,
                                'height': 1.02,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLqZHZxqU6zH',
                                'finalCrop': [
                                    0.0,
                                    0.17966970387243753,
                                    1.0,
                                    0.8203302961275625
                                ]
                            },
                            'position': {
                                'x': 0.6060744115413819,
                                'y': 0.3973766666666667,
                                'width': 0.2878511769172362,
                                'height': 0.35110666666666673,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-rec-pool',
                            'position': {
                                'x': 0.5886484434320425,
                                'y': 0.21666666666666667,
                                'width': 0.6454062262718301,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 23,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 24,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-doodle-dots-ocean-mist',
                    'assets': [
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLFgtwtBPriNH',
                                'finalCrop': [
                                    4.599509042525261e-17,
                                    0.017460049913,
                                    0.9999999999999999,
                                    0.847106067612125
                                ]
                            },
                            'position': {
                                'x': 0.13607622500000002,
                                'y': 0.14066666666666666,
                                'width': 0.22784755,
                                'height': 0.7186666666666667,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool2',
                            'position': {
                                'x': 0.11157500000000001,
                                'y': 0.09166666666666666,
                                'width': 0.5537000000000001,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLghLd6D3P9GD',
                                'finalCrop': [
                                    0.0,
                                    0.235953943133375,
                                    1.0,
                                    0.858453943133375
                                ]
                            },
                            'position': {
                                'x': 0.6168333333333333,
                                'y': 0.2543421333333334,
                                'width': 0.30800000000000005,
                                'height': 0.49131573333333334,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-white',
                            'position': {
                                'x': 0.5875,
                                'y': 0.1956666666666667,
                                'width': 0.7333333333333334,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 25,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 26,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_pool',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-rich-black',
                            'position': {
                                'x': 0.09583333333333334,
                                'y': 0.0,
                                'width': 0.9999999999999999,
                                'rotation': 90
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvfpqCbilFuqA',
                                'finalCrop': [
                                    0.056606148069253424,
                                    0.009002685546875,
                                    0.9216372029134128,
                                    0.833844244480125
                                ]
                            },
                            'position': {
                                'x': 0.13340833333333335,
                                'y': 0.18991732546705997,
                                'width': 0.23318333333333338,
                                'height': 0.6201653490658802,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool',
                            'position': {
                                'x': 0.10833333333333334,
                                'y': 0.13977384464110126,
                                'width': 0.5666666666666668,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHavOpBifB4J',
                                'finalCrop': [
                                    0.07868939517130696,
                                    0.00806909799575,
                                    0.9845996213139068,
                                    0.8718905746936875
                                ]
                            },
                            'position': {
                                'x': 0.5761711813611755,
                                'y': 0.14850666666666668,
                                'width': 0.2643243039443155,
                                'height': 0.7029866666666668,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-pool',
                            'position': {
                                'x': 0.5477474864655839,
                                'y': 0.09166666666666666,
                                'width': 0.6423433874709976,
                                'rotation': 0
                            },
                            'seqNum': 5,
                            'z': 101
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv7OMDbjQcg9D',
                                'finalCrop': [
                                    0.022224307060241956,
                                    0.046199142932875,
                                    0.9592918157577517,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.8375,
                                'y': 0.3416666666666667,
                                'width': 0.11666666666666671,
                                'height': 0.31666666666666665,
                                'rotation': 0
                            },
                            'seqNum': 6,
                            'z': 102
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-passport',
                            'position': {
                                'x': 0.875,
                                'y': 0.675,
                                'width': 0.15833333333333344,
                                'rotation': 0
                            },
                            'seqNum': 7,
                            'z': 1000
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-passport',
                            'position': {
                                'x': 0.875,
                                'y': 0.1,
                                'width': 0.15833333333333344,
                                'rotation': 0
                            },
                            'seqNum': 8,
                            'z': 1000
                        }
                    ]
                }
            },
            {
                'pageNum': 27,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 28,
                'type': 'spread',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_pool',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-accessories-mickey',
                            'position': {
                                'x': 0.5,
                                'y': 0.9062761506276151,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKahc10hCLgL',
                                'finalCrop': [
                                    0.1164062023162842,
                                    0.0,
                                    0.708608090877533,
                                    0.9042787002593252
                                ]
                            },
                            'position': {
                                'x': -0.005,
                                'y': -0.01,
                                'width': 0.5008333333333334,
                                'height': 1.02,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLYSVokoiINPJ',
                                'finalCrop': [
                                    0.022986625123737073,
                                    0.002161264419587629,
                                    0.8979058817141079,
                                    0.9179155528545454
                                ]
                            },
                            'position': {
                                'x': 0.5703333333333332,
                                'y': 0.2641202066666667,
                                'width': 0.3593333333333333,
                                'height': 0.50755768,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 101
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-poppy',
                            'position': {
                                'x': 0.5458333333333333,
                                'y': 0.2149833333333333,
                                'width': 0.8166666666666667,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 101
                        }
                    ]
                }
            },
            {
                'pageNum': 29,
                'type': 'page',
                'canvas': {
                    'layout': {
                        'layoutId': '8x8_universal_00_00L06P00S_a_page',
                        'photos': []
                    },
                    'backgroundId': ''
                }
            },
            {
                'pageNum': 30,
                'type': 'page',
                'canvas': {
                    'backgroundId': 'bg_sq_dny_dfa-mini-mickey-pool',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-white',
                            'position': {
                                'x': 0.0,
                                'y': 0.875,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-mickey',
                            'position': {
                                'x': 0.0,
                                'y': 0.100697350069735,
                                'width': 0.9916666666666667,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 10
                        },
                        {
                            'type': 'embellishment',
                            'id': 'pb_dny_dfa-ears-mickey',
                            'position': {
                                'x': 0.0,
                                'y': 0.825,
                                'width': 0.9916666666666667,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 10
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvshuXFF43U4K',
                                'finalCrop': [
                                    0.05061143636703484,
                                    0.0,
                                    0.9988858103752136,
                                    0.964242461518463
                                ]
                            },
                            'position': {
                                'x': -0.01,
                                'y': 0.13333333333333333,
                                'width': 1.02,
                                'height': 0.6916666666666668,
                                'rotation': 0
                            },
                            'seqNum': 4,
                            'z': 100
                        }
                    ]
                }
            },
            {
                'pageNum': -3,
                'type': 'backCover',
                'canvas': {
                    'backgroundId': 'bg_sq_sfly_white',
                    'assets': [
                        {
                            'type': 'embellishment',
                            'id': 'pb_sfly_global-wide-cherry',
                            'position': {
                                'x': 0.0,
                                'y': 0.775,
                                'width': 1.0,
                                'rotation': 0
                            },
                            'seqNum': 1,
                            'z': 0
                        },
                        {
                            'type': 'imageArea',
                            'imageAssignment': {
                                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLFgtwtBPriNH',
                                'finalCrop': [
                                    0.03120446394360256,
                                    0.0,
                                    0.967712400451539,
                                    1.0
                                ]
                            },
                            'position': {
                                'x': 0.35080023809523814,
                                'y': 0.26502166666666666,
                                'width': 0.2983995238095238,
                                'height': 0.44323500000000005,
                                'rotation': 0
                            },
                            'seqNum': 2,
                            'z': 100
                        },
                        {
                            'type': 'embellishment',
                            'id': 'emb_dny_dfa-frame-classic-yellow',
                            'position': {
                                'x': 0.31738095238095243,
                                'y': 0.09166666666666666,
                                'width': 0.36523809523809525,
                                'rotation': 0
                            },
                            'seqNum': 3,
                            'z': 100
                        }
                    ]
                }
            }
        ],
        'photoStrip': [
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvshuXFF43U4K&rendersize=fit540x540&DATA=v4IYulyQUphrpNahU1U1uHQj1vigtFe-laDP334aqOQNuhyIQlchnj6smORr31ZYexTrEjG593JyyaRlfitpHq71C.xQiPrqgo&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032532857092&XcaptureTime=2017-06-30T15%3A08%3A41.000Z&XuploadTime=2023-06-07T08%3A41%3A50.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvshuXFF43U4K',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvshuXFF43U4K',
                'photoMetadata': {
                    'id': '01H2AH03DNQTBQP556TAZQP6MC',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_15.08.41.jpg',
                    'width': 1600,
                    'effect': 'AUTO',
                    'height': 1067,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:58'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLYSVokoiINPJ&rendersize=fit540x540&DATA=v4IYulyQUphr5MErSmi-wFYRN6MxGMVsd5Gatn-rof98FeSAYu15b2e9.fnAkryQ-hcBJz-fkFWLV9g7xk5tksMSdSDlN.RdFT&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032497828305&XcaptureTime=2017-06-30T15%3A07%3A30.000Z&XuploadTime=2023-06-07T08%3A41%3A50.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLYSVokoiINPJ',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLYSVokoiINPJ',
                'photoMetadata': {
                    'id': '01H2AH03EQV3S5XB732F8VP5S8',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_15.07.30_3.jpg',
                    'width': 1600,
                    'effect': 'AUTO',
                    'height': 1067,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:58'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKahc10hCLgL&rendersize=fit540x540&DATA=v4IYulyQUphr5gGY0VVu7.kX-1Bp7fNMcpzK0B-jHxw19cPuTLlOwo-gpuL9.tz5pu0SRTW.C268QoMpByPBmblbZMYPBZ68vG&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709538&XcaptureTime=2017-06-30T14%3A53%3A13.000Z&XuploadTime=2023-06-07T08%3A41%3A50.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKahc10hCLgL',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKahc10hCLgL',
                'photoMetadata': {
                    'id': '01H2AH03SPR1472AYCAJPH3346',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_14.53.13.jpg',
                    'width': 1600,
                    'effect': 'AUTO',
                    'height': 1067,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:59'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvfpqCbilFuqA&rendersize=fit540x540&DATA=v4IYulyQUphrpPYM96bmvuB-CZdjOlqca3NbXm43ecyiWaTF3gnNIHzqADA5kScdsdUvSilygahc1cn6OmHgzT-D&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429440&XcaptureTime=2017-06-30T12%3A16%3A36.000Z&XuploadTime=2023-06-07T08%3A41%3A52.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvfpqCbilFuqA',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvfpqCbilFuqA',
                'photoMetadata': {
                    'id': '01H2AH04BPED9MG8HZK7TTHYBK',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_13.16.37.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:59'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv7OMDbjQcg9D&rendersize=fit540x540&DATA=v4IYulyQUphrpPYM96bmvuBfLwOnTWNYavtXKZIVj-gh7Z4XkjkC7O6o6MPsSUd2TM3KDYe3DImuIvwJ4pG26PCC&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429431&XcaptureTime=2017-06-30T13%3A51%3A31.000Z&XuploadTime=2023-06-07T08%3A41%3A51.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv7OMDbjQcg9D',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv7OMDbjQcg9D',
                'photoMetadata': {
                    'id': '01H2AH04CSKKWS4W9GTQ1W2DKF',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_13.51.31.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:59'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHavOpBifB4J&rendersize=fit540x540&DATA=v4IYulyQUphrJ6ssP0jvLkd1t-h-gCCxPkc9FBytfONe3LHMvDycnc06QLo2LQoIoCwh6CCUScDe28db6d7L--ZvqjZQmRs.g7&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332335&XcaptureTime=2017-06-30T13%3A33%3A11.000Z&XuploadTime=2023-06-07T08%3A41%3A51.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHavOpBifB4J',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHavOpBifB4J',
                'photoMetadata': {
                    'id': '01H2AH04GY35Z508SRW4FZKFQY',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_13.33.11.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:53:59'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLghLd6D3P9GD&rendersize=fit540x540&DATA=v4IYulyQUphrZa84jQynvUuUnuCm.4dQnpINkfDb1hUfvC64shO6O70kL52iPpSaILSX1E.cVa9O0K1s4e9Jb75jTjMKFZMdCY&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032497828315&XcaptureTime=2017-06-30T12%3A16%3A34.000Z&XuploadTime=2023-06-07T08%3A41%3A52.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLghLd6D3P9GD',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLghLd6D3P9GD',
                'photoMetadata': {
                    'id': '01H2AH04RH7DSMSKW6F338ETTZ',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_13.16.35.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLFgtwtBPriNH&rendersize=fit540x540&DATA=v4IYulyQUphrpPYM96bmvuBLf2V.LoP1Cu4nG1vnOIKcoRr4DnR2RETs9pycSroNVeUKY1rF1ecPkDmMp.Q4FMHC&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340021&XcaptureTime=2017-06-30T06%3A25%3A26.000Z&XuploadTime=2023-06-07T08%3A41%3A52.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLFgtwtBPriNH',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLFgtwtBPriNH',
                'photoMetadata': {
                    'id': '01H2AH04RQMKD33N3XGM0N5PDQ',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_07.25.27.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHkufiea4psH&rendersize=fit540x540&DATA=v4IYulyQUphrZyE6.12FwnkXP0Mc-TXy0vX6ov9j2VB5GP5nVC5y8kd59sS0m.ZKZ3DHtXYzmfwf3JuJ.PraNehjKlMW9OIeXQ&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429449&XcaptureTime=2017-06-30T05%3A09%3A40.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHkufiea4psH',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvHkufiea4psH',
                'photoMetadata': {
                    'id': '01H2AH04ZK0M9D0F2VFXVX5643',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.09.40.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvyt6Q9-K8IKG&rendersize=fit540x540&DATA=v4IYulyQUphrZ6FF8AkjDQN5-Jy0SmuU04PzDv9JcYPlgFjs8gvycwONisWo64MofcrcGuBZa7UiE.XClX-gnkcB&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332345&XcaptureTime=2017-06-30T05%3A29%3A22.000Z&XuploadTime=2023-06-07T08%3A41%3A52.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvyt6Q9-K8IKG',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvyt6Q9-K8IKG',
                'photoMetadata': {
                    'id': '01H2AH0507Z1AZVGN03EWQXSJX',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.29.23.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv8sG-wW0mc.E&rendersize=fit540x540&DATA=v4IYulyQUphrps-UihIZHr-696OgTyvBF3ctLAbEY.cOvAnoyl2reB3-uHdnHPedgNMqHXUPfnNSTGkNaASFafF8BUlWS65CTA&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332344&XcaptureTime=2017-06-30T05%3A51%3A44.000Z&XuploadTime=2023-06-07T08%3A41%3A52.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv8sG-wW0mc.E',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv8sG-wW0mc.E',
                'photoMetadata': {
                    'id': '01H2AH0515MYD9TX9VYR62CB7B',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.51.45.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvg1sL.-JetyB&rendersize=fit540x540&DATA=v4IYulyQUphrpNahU1U1uHQ3t-h-gCCxPkWyD5L2SGQWicfxXFNf0wel4jJ2-6KfJBFSxOXAOpjovDuyzEuVDLsY5YaKAcyOZQ&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429455&XcaptureTime=2017-06-30T05%3A07%3A14.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvg1sL.-JetyB',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvg1sL.-JetyB',
                'photoMetadata': {
                    'id': '01H2AH053E73X7F3D82QXP5STD',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.07.14.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLqZHZxqU6zH&rendersize=fit540x540&DATA=v4IYulyQUphrZyE6.12Fwnk7XV0eROKKYPvEb97hZr87ws27i75CZR3K.ovd3FRxHfkIcp-jh9Gul9cWVrkcMdzi9KUvQFBh-f&rotation=270&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709548&XcaptureTime=2017-06-30T05%3A51%3A44.000Z&XuploadTime=2023-06-07T08%3A41%3A53.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLqZHZxqU6zH',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLqZHZxqU6zH',
                'photoMetadata': {
                    'id': '01H2AH05429CGF3GH9YYRZG8G4',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.31.25.jpg',
                    'width': 1600,
                    'effect': 'AUTO',
                    'height': 900,
                    'source': 'mb',
                    'rotation': 180,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvxqoBGizE0ZF&rendersize=fit540x540&DATA=v4IYulyQUphrZXFogbpWKIwUuiXeoD0POaNKFFyqUPKeQimECGaM3q4db7YD.9jmuSeA6I-we8mth4YtbfPUEJwDnes9ZpqsdL&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709556&XcaptureTime=2017-06-30T05%3A04%3A02.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvxqoBGizE0ZF',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvxqoBGizE0ZF',
                'photoMetadata': {
                    'id': '01H2AH0568041PM0Y9E8E5WEP7',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.04.03.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLCSSwRqQYV1O&rendersize=fit540x540&DATA=v4IYulyQUphrZiFEpjl9KlSgiJnMsEQCCNm34PYediDYoYSHwHFAr2mbCsWYyG-hi.WAUs-EJ5MthpBU.4yiA7i5pMmS24EmKq&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032497828324&XcaptureTime=2017-06-30T04%3A59%3A26.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLCSSwRqQYV1O',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLCSSwRqQYV1O',
                'photoMetadata': {
                    'id': '01H2AH058B97GRW1W1M9A552JH',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.59.26.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpLJQBVLXOXJ&rendersize=fit540x540&DATA=v4IYulyQUphr5Y0GM1e9u-vRAT325Zm6c6jtkVhOip.FY7y2JZLAhEjNZC5QDzplBeb5679rW4GvGt-LeHTJgjRB&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340030&XcaptureTime=2017-06-30T05%3A16%3A28.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpLJQBVLXOXJ',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpLJQBVLXOXJ',
                'photoMetadata': {
                    'id': '01H2AH058Y3KKJTV8MXANXNTN1',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.16.28.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv.etX6Z6DuKO&rendersize=fit540x540&DATA=v4IYulyQUphr5Y0GM1e9u-vhZ0KOMbD04vzvr3cIJdrVXHFbJFhW8HJ5svN-.5XouUApXp6mUNpFK4gfVZOIMyxC&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709557&XcaptureTime=2017-06-30T05%3A00%3A54.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv.etX6Z6DuKO',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv.etX6Z6DuKO',
                'photoMetadata': {
                    'id': '01H2AH05ABXRKB3PYTSS1ZEJ3W',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.00.54.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv-HgVF5hEC5C&rendersize=fit540x540&DATA=v4IYulyQUphr5Y0GM1e9u-vRAT325Zm6c6KM-InoYocWAwcFchqhsHooLm5HNP4roYfluOxTlgcD9Q.tU6lloONB&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709558&XcaptureTime=2017-06-30T04%3A57%3A22.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv-HgVF5hEC5C',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv-HgVF5hEC5C',
                'photoMetadata': {
                    'id': '01H2AH05EPQ0JD0QC6ZEQRKFP8',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.57.22.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvSXeMFLur8YB&rendersize=fit540x540&DATA=v4IYulyQUphr51hZRzp2xT1VqDEk-BrjT-5IWRuvC4vzSwI0FHkU8sxSa6P8Eu795SFjs1g.myE3Z9j5xxYpdnGuNXBq5ChouC&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332363&XcaptureTime=2017-06-30T04%3A57%3A14.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvSXeMFLur8YB',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvSXeMFLur8YB',
                'photoMetadata': {
                    'id': '01H2AH05N9HNZ14FNG9QW0G2MT',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.57.15.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:04'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvwLd1wtL3sfI&rendersize=fit540x540&DATA=v4IYulyQUphrpA10SYcKukdg6CX618QSKMNsIO6Bu4rtC4O.PnVidiBYUTvHPQ.AfqT939VGE8Qqevn0u6dYS3NmgIElclIfG4&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032504709559&XcaptureTime=2017-06-30T04%3A54%3A00.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvwLd1wtL3sfI',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvwLd1wtL3sfI',
                'photoMetadata': {
                    'id': '01H2AH05NQAN6090JFJGNVZQA2',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.54.00.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:00'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKS0stJ5SbfA&rendersize=fit540x540&DATA=v4IYulyQUphrJ1SSGAXH9JF87ZveFgLUFIICHXZsYs9kUr7CHmEAVM7IdTlRvKAFZDCxiJv0uclnnocn2ZwWs5ACnes9ZpqsdL&rotation=270&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032532857132&XcaptureTime=2017-06-30T04%3A51%3A42.000Z&XuploadTime=2023-06-07T08%3A41%3A54.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKS0stJ5SbfA',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvKS0stJ5SbfA',
                'photoMetadata': {
                    'id': '01H2AH05SJJ15B602XD6NJC8FX',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.51.43.jpg',
                    'width': 1280,
                    'effect': 'AUTO',
                    'height': 720,
                    'source': 'mb',
                    'rotation': 180,
                    'uploadTime': '2023:06:07 08:54:01'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvi8gDzKV3I3I&rendersize=fit540x540&DATA=v4IYulyQUphrZ6FF8AkjDQN5h44pUNTuZIfVdEjXQE7vSesHBo678KzLrFsZTOLt-YYjo5i0M0wpa3MSPerUOFxPKt1prmqDYK&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032532857133&XcaptureTime=2017-06-30T04%3A49%3A16.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvi8gDzKV3I3I',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvi8gDzKV3I3I',
                'photoMetadata': {
                    'id': '01H2AH05Z0DYWS01DFGY9F8DVF',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.49.16.jpg',
                    'width': 720,
                    'effect': 'AUTO',
                    'height': 1280,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:01'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvEpwXtZXI96E&rendersize=fit540x540&DATA=v4IYulyQUphrZEIv0qdh0kQQZ6GBgN9J3Rg2F403ZkxGK7RMNzKLVy9k3ALJXtb5Fp.m16-XlqCaeeJEatS3wK66Jvfq1N2I1V&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332371&XcaptureTime=2017-06-28T20%3A43%3A28.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvEpwXtZXI96E',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvEpwXtZXI96E',
                'photoMetadata': {
                    'id': '01H2AH067B8WFBWYMYN33AE5QC',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_29_08.50.55.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:01'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvO3nttb5UnuH&rendersize=fit540x540&DATA=v4IYulyQUphrJcNTbaNuwkicR-PCarLM5SbN.dCqxTPV-lwdNtq4P2Z549TeQxXjIPmJII6B8tZYACWoMgtsIT-Uibz1KRXu0X&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032532857139&XcaptureTime=2017-06-28T14%3A17%3A29.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvO3nttb5UnuH',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvO3nttb5UnuH',
                'photoMetadata': {
                    'id': '01H2AH06NSR9S35M2GWCPXSARC',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_14.17.29.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1166,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:01'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOL7NftaLz5H0L&rendersize=fit540x540&DATA=v4IYulyQUphrZdyL3PAR5YLkK610yLKf4ic9B78cqaJ-BakCnevF-RQffNoHkcddij0ldOVPOJQaHiHDaegHPYpRUFz029fG8L&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340041&XcaptureTime=2017-06-30T04%3A43%3A50.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOL7NftaLz5H0L',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOL7NftaLz5H0L',
                'photoMetadata': {
                    'id': '01H2AH06W0ZNWTX31H5CE2CREE',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.43.51.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:01'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLbfK2siowSGE&rendersize=fit540x540&DATA=v4IYulyQUphr5vP9MRMcDX.BjOCt5CQNljsgBbW3KIgqvTmokIcM6qLRKLqyiaUo89gYoa2PFGLclkK1kEH3gaOSn-ZHm1wOze&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340045&XcaptureTime=2017-06-28T14%3A16%3A25.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLbfK2siowSGE',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLbfK2siowSGE',
                'photoMetadata': {
                    'id': '01H2AH06X9AAKG1PP8QB5BWCZZ',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_14.16.25.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 864,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvjI-8XcbXcgM&rendersize=fit540x540&DATA=v4IYulyQUphrps-UihIZHr-Syi2fRPTA8KBPNgPQhyEVA.GVCK2zeLMRlk3V7zVzfVA7Zl54HqKzqU2lAGGJ6ShHYlzt4KMd8J&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429471&XcaptureTime=2017-06-28T13%3A29%3A49.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvjI-8XcbXcgM',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvjI-8XcbXcgM',
                'photoMetadata': {
                    'id': '01H2AH06XKMKC5Z88XFWSQRD0V',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.29.49.jpg',
                    'width': 1600,
                    'effect': 'AUTO',
                    'height': 1200,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvFcs8X1c5-8F&rendersize=fit540x540&DATA=v4IYulyQUphr5Y0GM1e9u-vhZ0KOMbD04viiip9GxVm2pFjs8gvycwONisWo64MofcrNe9Q5Nvbki0Q8AVkgPWeD&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032563429445&XcaptureTime=2017-06-30T05%3A16%3A54.000Z&XuploadTime=2023-06-07T08%3A41%3A53.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvFcs8X1c5-8F',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvFcs8X1c5-8F',
                'photoMetadata': {
                    'id': '01H2AH06XRGS92B4SR0AT3GNQ7',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_06.16.55.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:05'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv4ZG3IWpWLcO&rendersize=fit540x540&DATA=v4IYulyQUphrp-KhaJZRr4r-5Sz8RAw82wo1bIclTBcVUbvns.s8uJcL0sc0SYiH1QE3jJzc1g0PVbGCex.8o.yvLHBhZZzACh&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332372&XcaptureTime=2017-06-28T13%3A25%3A11.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv4ZG3IWpWLcO',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzv4ZG3IWpWLcO',
                'photoMetadata': {
                    'id': '01H2AH06Z1G8TYSHA0X1EZ02ES',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.25.11.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpmm7JOppC5G&rendersize=fit540x540&DATA=v4IYulyQUphr5ingdOEiErN9j4cNulumN5Uv0p8zd8vIwcNFWQ2FFycQGrB.fRD2yVdz8li4JcjZtcybT0RvSULibE7frxt1xk&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032497828336&XcaptureTime=2017-06-28T13%3A18%3A43.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpmm7JOppC5G',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLpmm7JOppC5G',
                'photoMetadata': {
                    'id': '01H2AH070YC8KYVEZS302CBNYF',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.18.43.jpg',
                    'width': 1186,
                    'effect': 'AUTO',
                    'height': 625,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLNAqBysoRedI&rendersize=fit540x540&DATA=v4IYulyQUphrpPYM96bmvuBzcdtGbE5LJoJcn3mfVER4BRcRDc1t9lehOtAFTcd9L2UddSScMveApLFzxY5miQxA&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340042&XcaptureTime=2017-06-30T04%3A45%3A48.000Z&XuploadTime=2023-06-07T08%3A41%3A55.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLNAqBysoRedI',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLNAqBysoRedI',
                'photoMetadata': {
                    'id': '01H2AH071D1425HYVGMGK8H0AQ',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_30_05.45.48.jpg',
                    'width': 900,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:05'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvMYaT9EkeSjJ&rendersize=fit540x540&DATA=v4IYulyQUphrpPYM96bmvuBL8IxocDUQd0egpBRmnROAAuZXGV31q8nrRH52rRa9ax9Ex3RpfZUqxei1bVHy1niC&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332376&XcaptureTime=2017-06-28T13%3A18%3A06.000Z&XuploadTime=2023-06-07T08%3A41%3A56.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvMYaT9EkeSjJ',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvMYaT9EkeSjJ',
                'photoMetadata': {
                    'id': '01H2AH075ANW65QQ7VCP5PY3QG',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.18.06.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLeZTiXfYKSPA&rendersize=fit540x540&DATA=v4IYulyQUphrppHOSeFf9Fsp3CkfpI1DWcfqjSUavkMtDmWpFp8Oz3wPUGNZ3DVf.g3KRkd69F2ZD8JTLB087KGmMfNIn5kYeU&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032497828345&XcaptureTime=2017-06-28T13%3A15%3A51.000Z&XuploadTime=2023-06-07T08%3A41%3A56.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLeZTiXfYKSPA',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLeZTiXfYKSPA',
                'photoMetadata': {
                    'id': '01H2AH07HA5K1KEEA6TZZC1EKZ',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.15.51.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvlkr.hk-trYD&rendersize=fit540x540&DATA=v4IYulyQUphrp.M778HQRsQCMhlAgFFkI8d9Af.4asr7llGlonpZ7n5QZnnrRIt6f4uGNc2j1D4rLiHDaegHPYp174KQwJNF17&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332381&XcaptureTime=2017-06-28T13%3A16%3A08.000Z&XuploadTime=2023-06-07T08%3A41%3A56.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvlkr.hk-trYD',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvlkr.hk-trYD',
                'photoMetadata': {
                    'id': '01H2AH07MAN6FRE5PJ5J84TP5C',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.16.08.jpg',
                    'width': 1021,
                    'effect': 'AUTO',
                    'height': 1451,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:02'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLN2cLJPUlRD&rendersize=fit540x540&DATA=v4IYulyQUphrJ8iQcppHE-ZvihtrRrPGLXsEywsCKXvZLLInrjQFPUJ57ISi-VY8q6eNbmQX2USI-flT45FQmrdA&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032561332382&XcaptureTime=2017-06-28T13%3A09%3A08.000Z&XuploadTime=2023-06-07T08%3A41%3A56.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLN2cLJPUlRD',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbdv46GqsGVwzvLN2cLJPUlRD',
                'photoMetadata': {
                    'id': '01H2AH07VF5R430PTSQGH5F4SN',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.09.08.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:03'
                }
            },
            {
                'url': 'https://uniim-cp.shutterfly.com/procsimple?imageID=01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLcACL72Z2IGC&rendersize=fit540x540&DATA=v4IYulyQUphrJjU1EdO.hL.g40VP4q.bARog0726eSQjJTcN5vONV8dJq8B-EbbY8dY-BhbR056palsLG06U-bdKjpekIYut7Q&rotation=0&Xorigin=LOCAL&XidProperty=imageId&XsflyId=1768032435340058&XcaptureTime=2017-06-28T13%3A10%3A27.000Z&XuploadTime=2023-06-07T08%3A41%3A57.000Z&cropll=0,0&cropur=1,1',
                'encryptId': '',
                'photoId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLcACL72Z2IGC',
                'photoRefId': '01GZzmp.SlPUsu4926Jzbd7Hb8JrxVoOLcACL72Z2IGC',
                'photoMetadata': {
                    'id': '01H2AH0809E01DP5YY09ZP5G68',
                    'llx': 0,
                    'lly': 0,
                    'urx': 1,
                    'ury': 1,
                    'data': null,
                    'title': '2017_06_28_13.10.27.jpg',
                    'width': 1200,
                    'effect': 'AUTO',
                    'height': 1600,
                    'source': 'mb',
                    'rotation': 0,
                    'uploadTime': '2023:06:07 08:54:05'
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
                'value': '47'
            },
            {
                'key': 'curationStep',
                'value': true
            },
            {
                'key': 'specialInstructions',
                'value': '++mb++'
            },
            {
                'key': 'title',
                'value': 'Photo Book - 6/7/2023'
            },
            {
                'key': 'binding',
                'value': null
            },
            {
                'key': 'stockCoverSpecId',
                'value': null
            },
            {
                'key': 'coverSpecId',
                'value': '8x8_bk_hard'
            }
        ]
    }
  }
}
