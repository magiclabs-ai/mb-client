import {DesignRequestEventDetail} from '../models/design-request'

export const states = [
  'new',
  'ingesting',
  'submitted',
  'storyboarding',
  'deduplication',
  'image-selection',
  'designing',
  'layouting',
  'embellishing',
  'polishing',
  'ready',
  'timeout',
  'error',
  'cancelled'
] as const
export const statesToCloseWS: ReadonlyArray<(typeof states)[number]> = [
  'error',
  'timeout',
  'ready',
  'cancelled'
] as const
export const statesToReport: ReadonlyArray<(typeof states)[number]> = ['error', 'timeout'] as const
export const isDesignRequestSubmitted = (state: string) => !['new', 'ingesting'].includes(state)
export const canSubmitDesignRequest = (state: string) => ['new', 'ingesting', 'ready'].includes(state)
export const occasions = [
  'baby',
  'birthday',
  'default',
  'everyday',
  'family',
  'kids',
  'life-stories',
  'portfolio',
  'school-memories',
  'seasonal-holidays',
  'special-celebrations',
  'sports-and-hobbies',
  'travel',
  'wedding',
  'year-in-review'
] as const
export const styles = {
  1005: {slug: 'modern-black-sfly'},
  1101: {slug: 'bon-voyage-sfly'},
  1103: {slug: 'fun-in-the-sun-sfly'},
  1201: {slug: 'modern-wedding-sfly'},
  3001: {slug: 'digiscrap-sfly'},
  4034: {slug: 'travel-snapshots-sfly'},
  4035: {slug: 'vintage-travel-sfly'},
  5017: {slug: 'natural-neutrals-sfly'},
  5033: {slug: 'chalkboard-chic-sfly'},
  5079: {slug: 'hello-spring-sfly'},
  5082: {slug: 'familygram-sfly'},
  5085: {slug: 'best-day-ever-sfly'},
  5091: {slug: 'little-love-sfly'},
  5118: {slug: 'a-year-in-color-sfly'},
  5120: {slug: 'milestone-anniversaries-sfly'},
  5121: {slug: 'the-travel-bug-sfly'},
  5122: {slug: 'modern-white-sfly'},
  5127: {slug: 'outdoor-wedding-sfly'},
  5134: {slug: 'classic-wedding-sfly'},
  5138: {slug: 'kraft-pop-sfly'},
  5142: {slug: 'simply-black-sfly'},
  5144: {slug: 'autumn-memories-sfly'},
  5146: {slug: 'everyday-sentiments-sfly'},
  5149: {slug: 'everyday-happiness-sfly'},
  5150: {slug: 'its-a-girl-thing-sfly'},
  5155: {slug: 'made-with-love-sfly'},
  5157: {slug: 'high-school-memories-sfly'},
  5161: {slug: 'rustic-wedding-sfly'},
  5165: {slug: 'life-is-grand-sfly'},
  5167: {slug: 'adventure-awaits-sfly'},
  5168: {slug: 'disney-adventure-sfly'},
  5171: {slug: 'world-travel-sfly'},
  5174: {slug: 'hello-summer-sfly'},
  5183: {slug: 'everything-sports-sfly'},
  5188: {slug: 'everyday-watercolor-sfly'},
  5189: {slug: 'holiday-memories-sfly'},
  5213: {slug: 'love-and-thanks-sfly'},
  5218: {slug: 'babys-first-year-sfly'},
  5219: {slug: 'usa-travel-sfly'},
  5220: {slug: 'vintage-wedding-sfly'},
  5226: {slug: 'love-you-because-sfly'},
  5228: {slug: 'reunion-sfly'},
  5238: {slug: 'whimsy-chalkboard-sfly'},
  5242: {slug: 'modern-indigo-sfly'},
  5250: {slug: 'family-yearbook-sfly'},
  5255: {slug: 'elegant-wedding-sfly'},
  5258: {slug: 'family-vacation-sfly'},
  5259: {slug: 'beach-travel-sfly'},
  5261: {slug: 'sparkle-and-shine-sfly'},
  5262: {slug: 'welcome-baby-sfly'},
  5265: {slug: 'vivid-watercolor-sfly'},
  5266: {slug: 'what-i-love-about-you-sfly'},
  5272: {slug: 'love-grows-sfly'},
  5274: {slug: 'painted-seasons-sfly'},
  5278: {slug: 'vintage-disney-sfly'},
  5292: {slug: 'modern-grey-sfly'},
  5297: {slug: 'modern-love-story-sfly'},
  5299: {slug: 'modern-travel-sfly'},
  5304: {slug: 'beach-wedding-sfly'},
  5305: {slug: 'rustic-farmhouse-sfly'},
  5308: {slug: 'tropical-travel-sfly'},
  6000: {slug: 'travel-abroad-sfly'},
  6001: {slug: 'everyday-rustic-sfly'},
  6002: {slug: 'simply-modern-sfly'},
  6003: {slug: 'modern-baby-sfly'},
  6004: {slug: 'modern-photo-album-sfly'},
  6005: {slug: 'travel-adventures-sfly'},
  6006: {slug: 'watercolor-year-in-review-sfly'},
  6007: {slug: 'beach-bliss-sfly'},
  6008: {slug: 'simply-gray-sfly'},
  6009: {slug: 'family-favorites-by-lure-design-sfly'},
  6010: {slug: 'travel-gallery-sfly'},
  6011: {slug: 'our-wedding-day-sfly'},
  6012: {slug: 'chic-celebrations-by-float-paperie-sfly'},
  6013: {slug: 'simply-bold-type-sfly'},
  6014: {slug: 'colorful-florals-by-potts-design-sfly'},
  6015: {slug: 'softly-rustic-sfly'},
  6016: {slug: 'ombre-watercolor-sfly'},
  6017: {slug: 'forever-love-by-with-merriment-sfly'},
  6018: {slug: 'colorful-memories-by-britt-bass-sfly'},
  6019: {slug: 'celebrate-family-by-float-paperie-sfly'},
  6020: {slug: 'disney-family-adventures-sfly'},
  6021: {slug: 'everyday-neutrals-sfly'},
  6022: {slug: 'colorful-childhood-sfly'},
  6023: {slug: 'everyday-indigo-sfly'},
  6024: {slug: 'shimmer-and-shine-sfly'},
  6025: {slug: 'summertime-fun-sfly'},
  6026: {slug: 'pet-lover-sfly'},
  6027: {slug: 'modern-wedding-story-sfly'},
  6028: {slug: 'family-blessings-by-potts-design-sfly'},
  6030: {slug: 'outdoor-adventures-by-sarah-hawkins-designs-sfly'},
  6031: {slug: 'travel-memories-sfly'},
  6032: {slug: 'tropical-travels-sfly'},
  6033: {slug: 'everyday-chalkboard-by-potts-design-sfly'},
  6034: {slug: 'classic-disney-sfly'},
  6035: {slug: 'cheerful-color-sfly'},
  6036: {slug: 'colorful-birthday-sfly'},
  6038: {slug: 'classic-baby-sfly'},
  6039: {slug: 'bold-year-in-review-by-float-paperie-sfly'},
  6040: {slug: 'colorfully-fun-sfly'},
  6041: {slug: 'colorful-year-in-review-by-sarah-hawkins-designs-sfly'},
  6042: {slug: 'gilded-wedding-sfly'},
  6043: {slug: 'road-trip-travel-by-sarah-hawkins-designs-sfly'},
  6044: {slug: 'rustic-gilded-wedding-sfly'},
  6045: {slug: 'elegantly-scripted-year-in-review-sfly'},
  6047: {slug: '2020-what-a-year-sfly'},
  6057: {slug: 'best-mom-ever-sfly'},
  6052: {slug: 'celebration-of-life-by-sarah-hawkins-designs-sfly'},
  6054: {slug: 'colorful-school-days-by-float-paperie-sfly'},
  6051: {slug: 'love-is-all-we-need-sfly'},
  6058: {slug: 'graduation-celebration-sfly'},
  6056: {slug: 'our-wedding-day-guestbook-sfly'},
  6055: {slug: 'muted-everyday-abstract-sfly'},
  6046: {slug: 'winter-memories-by-sarah-hawkins-design-sfly'},
  6053: {slug: 'best-dad-ever-sfly'},
  6050: {slug: 'watercolor-greenery-by-sarah-hawkins-designs-sfly'},
  6063: {slug: 'watercolor-floral-wedding-by-kim-thoa-sfly'},
  6060: {slug: 'watercolor-baby-girl-sfly'},
  6059: {slug: 'watercolor-baby-boy-sfly'},
  6048: {slug: 'simple-elegant-wedding-sfly'},
  6049: {slug: 'gilded-wedding-guestbook-sfly'},
  6037: {slug: 'everyday-fairytale-by-jenny-romanski-sfly'},
  6061: {slug: 'best-grandparents-ever-sfly'},
  6068: {slug: 'winter-getaway-sfly'},
  6067: {slug: 'national-parks-travel-by-eiman-design-co-sfly'},
  6065: {slug: 'go-sports-by-lure-design-sfly'},
  6066: {slug: 'elegant-wedding-greenery-by-kim-thoa-sfly'},
  6064: {slug: 'boho-travel-by-umaiana-studio-sfly'},
  6071: {slug: 'modern-dark-neutrals-sfly'},
  6072: {slug: 'modern-light-neutrals-sfly'},
  6073: {slug: 'modern-celebrations-sfly'},
  6074: {slug: 'bright-and-bold-kids-year-in-review-by-sarah-hawkins-designs-sfly'},
  6085: {slug: 'classic-school-yearbook-sfly'},
  6084: {slug: 'colorful-elementary-school-yearbook-sfly'},
  5402: {slug: 'everyday-recipes-by-slightly-stationery-sfly'},
  6083: {slug: 'school-days-yearbook-sfly'},
  6082: {slug: 'the-story-of-me-sfly'},
  6086: {slug: 'whimsical-recipes-by-slightly-stationery-sfly'},
  6101: {slug: 'babys-first-sfly'},
  6103: {slug: 'classic-recipes-sfly'},
  6104: {slug: 'elevated-rustic-sfly'},
  6105: {slug: 'boho-summer-sfly'},
  6116: {slug: 'boho-baby-sfly'},
  6117: {slug: 'simply-gallery-sfly'},
  6118: {slug: 'this-is-love-sfly'},
  6120: {slug: 'wedding-photo-album-sfly'},
  6121: {slug: 'watercolorwashes-sfly'},
  6124: {slug: 'graduation-photo-album-sfly'},
  6125: {slug: 'modern-year-in-review-photo-album-sfly'},
  6126: {slug: 'black-white-photo-album-sfly'},
  6132: {slug: 'travel-journal-sfly'},
  6133: {slug: 'rustic-gallery-sfly'},
  6137: {slug: 'summer-adventures-sfly'},
  6141: {slug: 'heirloom-moments-sfly'},
  6144: {slug: 'seasonal-year-in-review-sfly'},
  6143: {slug: 'wanderlust-gallery-sfly'},
  6146: {slug: 'wedding-elopement-gallery-sfly'},
  6148: {slug: 'love-wins-sfly'},
  6151: {slug: 'adventures-in-mexico-sfly'},
  6152: {slug: 'generations-of-love-sfly'},
  6153: {slug: 'cheerful-patterns-sfly'},
  6062: {slug: 'create-your-own-sfly'},
  6075: {slug: 'together-again-sfly'},
  6078: {slug: 'everyday-boho-by-umaiana-studio-sfly'},
  6089: {slug: 'colorful-gradients-sfly'},
  6096: {slug: 'simply-scrapbook-sfly'},
  6097: {slug: 'boho-wedding-sfly'},
  6098: {slug: 'black-and-white-rustic-sfly'},
  6099: {slug: 'bright-color-pop-sfly'},
  6159: {slug: 'grateful-for-you-sfly'},
  6156: {slug: 'europe-mementos-sfly'}
}
export const bookSizes = ['8x8', '10x10', '12x12', '8x11', '11x8', '11x14'] as const
export const coverTypes = ['sc', 'hc', 'pl'] as const
export const pageTypes = ['sp', 'sl', 'dl'] as const
export const imageDensities = ['low', 'medium', 'high'] as const
export const imageFilteringLevels = ['best', 'most', 'all'] as const
export const embellishmentLevels = ['none', 'few', 'lots'] as const
export const textStickerLevels = ['none', 'few', 'lots'] as const
export const timeoutEventDetail: DesignRequestEventDetail = {
  state: 'timeout',
  slug: 'timeout',
  progress: 100,
  message: 'Design timed out'
}
export const cancelledEventDetail: DesignRequestEventDetail = {
  state: 'cancelled',
  slug: 'cancelled',
  progress: 100,
  message: 'Design canceled'
}
export const formats = ['galleon', 'snapfish'] as const
export type Format = (typeof formats)[number]
