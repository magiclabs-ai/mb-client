
![GitHub CI](https://github.com/magiclabs-ai/mb-client/actions/workflows/test.yml/badge.svg) ![GitHub CI](https://github.com/magiclabs-ai/mb-client/actions/workflows/linter.yml/badge.svg) [![npm version](https://img.shields.io/npm/v/@magiclabs.ai/magicbook-client.svg)](https://www.npmjs.com/package/@magiclabs.ai/magicbook-client)

# magicbook-client

TypeScript package to create photo books with the Magicbook API.

## Installation

```bash
npm install @magiclabs.ai/magicbook-client
```

## Usage

Create a Magicbook API client instance with your API key. 

```ts
const client = new MagicBookClient('api-key')`
```

Initiate the creation of a photo book by creating a design request. The design request can be initialized by passing parameters (design choices) to the initialization object.

```ts
const designRequest = await client.createDesignRequest({
  title: 'Australia 2023',
  occasion: 'travel',
  style: '1234',
  bookSize: '8x8',
  coverType: 'hc',
  pageType: 'sp'
})
```

Individual parameters can also be set directly on the design request instance:

```ts
const designRequest = await client.createDesignRequest()
designRequest.title = 'Australia 2023',
designRequest.occasion = 'travel',
designRequest.style = '1234',
designRequest.bookSize = '8x8',
designRequest.coverType = 'hc',
designRequest.pageType = 'sp'
```
As images are getting ready to be handed over to Magicbook, for example when successfully uploaded, add them to the design request object.

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

Before submitting the design request to Magicbook, register a callback to receive update events.

```ts
window.addEventListener('Magicbook.designRequestUpdated', async ((designRequestEvent: DesignRequestEvent) => {
  console.log(designRequestEvent.detail)
}) as EventListener)
```

Submit the design request. Again, the argument object can receive additional or updated design parameters.

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

Finally, once the design request is complete, retrieve it in JSON format.

```ts
await designRequest.getJSON()
```

___


## Example

To see the Magicbook client in action, run the following commands after navigating to the `./example` directory:

```bash
npm run build
cd example
npm i
npm run dev
```
