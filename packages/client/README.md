![GitHub CI](https://github.com/magiclabs-ai/mb-client/actions/workflows/ci.yml/badge.svg) [![npm version](https://img.shields.io/npm/v/@magiclabs.ai/magicbook-client.svg)](https://www.npmjs.com/package/@magiclabs.ai/magicbook-client)

# magicbook-client

TypeScript package to create photo books with the MagicBook API.

## Installation

```bash
npm install @magiclabs.ai/magicbook-client
```

## Usage

Create a MagicBook API client instance with your API key.

```ts
const client = new MagicBookClient('api-key')`
```

Initiate the creation of a photo book by creating a design request. The design request can be initialized by passing parameters (design choices) to the initialization object.

```ts
const designRequest = await client.createDesignRequest({
  userId: 'd72f1bbc-80c1-4338-987d-ca3eff058305' // Required value
  title: 'Australia 2023',
  occasion: 'travel',
  style: '1234',
  bookSize: '8x8',
  coverType: 'hc',
  pageType: 'sp'
})
```

Individual parameters can also be set directly on the design request instance (except for `userId`):

```ts
const designRequest = await client.createDesignRequest()
;(designRequest.title = 'Australia 2023'),
  (designRequest.occasion = 'travel'),
  (designRequest.style = '1234'),
  (designRequest.bookSize = '8x8'),
  (designRequest.coverType = 'hc'),
  (designRequest.pageType = 'sp')
```

As images are getting ready to be handed over to MagicBook, for example when successfully uploaded, add them to the design request object.

```ts
import {Image} from '@magiclabs.ai/magicbook-client'

const image: Image = {...}
await designRequest.images.add(image)
```

This would typically be done in an event handler connected to the image manager.

```ts
window.addEventListener('ImageManager.ImageUploaded', async (item) => {
  const image: DesignRequestImage = {...}
  await designRequest.images.add(image)
})
```

Optionally, you can retrieve design options for the design request by calling the `getOptions` method, providing the total number of images selected by the user. The returned object contains the image densities (i.e. page count and image per page estimations)

```ts
const selectedImageCount = 200
...
const designOptions = designRequest.getOptions(selectedImageCount)
```

Before submitting the design request to MagicBook, register a callback to receive update events.

```ts
window.addEventListener(
  'MagicBook.designRequestUpdated',
  async((designRequestEvent: DesignRequestEvent) => {
    console.log(designRequestEvent.detail)
  }) as EventListener
)
```

Submit the design request. Again, the argument object can receive additional or updated design parameters.
You can submit multiple design requests by calling this function after receiving the **"ready"** event from the previous one.

```ts
await designRequest.submit({
  imageDensity: 'high',
  imageFilteringLevel: 'best',
  embellishmentLevel: 'few',
  textStickerLevel: 'none'
})
```

After submitting you can set a GUID to the design request.

```ts
await designRequest.setGuid('a9ccb406-015a-47df-bb59-ea171b8617ca')
```

Once the design request is complete, retrieve it in JSON format.

```ts
// format: 'galleon' | 'snapfish'
await designRequest.getJSON(format)
```

You can get alternate layouts for a specific page. Optionally, you can pass surfaceCategoryName if your style supports it (only Snapfish).

```ts
await designRequest.getAlternateLayouts(-1, 'cover' | 'inside')
```

When a user performs a specific action, log it by calling the `logEvent` method.

```ts
await designRequest.logEvent('book.viewed', data)
```

---

## Usage as script

```html
<!doctype html>
<html>
  <head>
    <script
      type="text/javascript"
      src="../node_modules/@magiclabs-ai/magicbook-client
/index.iife.js"
    ></script>
  </head>
  <script type="text/javascript">
    const client = new MagicLabs.MagicBookClient('api-key')
    ...
  </script>
</html>
```

## Example

To see the MagicBook client in action, run the following commands (make sure you created a `.env` file before building):

```bash
npm run build
cd example
npm i
npm run dev
```
