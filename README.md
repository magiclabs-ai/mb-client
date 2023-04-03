
![GitHub CI](https://github.com/magiclabs-ai/mb-client/actions/workflows/test.yml/badge.svg) ![GitHub CI](https://github.com/magiclabs-ai/mb-client/actions/workflows/linter.yml/badge.svg) [![npm version](https://img.shields.io/npm/v/magicbook-client.svg)](https://www.npmjs.com/package/magicbook-client)
# magicbook-client
This is a TypeScript package that allows you to generate a design request, add images to it, make updates to the design request, and obtain the corresponding design request JSON.
### Installing the latest version
You can install the latest version by using:
- `npm install magicbook-client@latest`
___
### 1. Create the MagicBook client with your API key
`const client = new MagicBookClient('api-key')`

### 2. Create a design request, you can pass known design request parameters
Invoke this method when the user enters the MagicBook funnel. If the user has already made some design choices, you can pass them via the initialization object.
```
const designRequest = await client.createDesignRequest({
  title: 'Australia 2023',
  occasion: 'travel',
  style: '1234',
  bookFormat: '8x8',
  coverType: 'HC',
  pageType: 'LF'
})
```
or
```
const designRequest = await client.createDesignRequest()
designRequest.title = 'Australia 2023',
designRequest.occasion = 'travel',
designRequest.style = '1234',
designRequest.bookFormat = '8x8',
designRequest.coverType = 'HC',
designRequest.pageType = 'LF'
```

### 3. Connect Kraken::itemCompleted to MagicBook client
This connection allows MagicBook to retrieve and analyze images from the Shutterfly image server as soon as they are uploaded. If the number of API calls becomes excessive, we can group the images into batches to reduce the API calls frequency.

```
import {Image} from 'magicbook-client'

window.addEventListener('Kraken.itemCompleted', async (item) => {
  const image: Image = {...}
  await designRequest.images.add(image)
})
```

### 4. Get design progress updates from backend
While designing the book, the server will send progress updates to the client which can be shown to the user.

```
window.addEventListener('Magicbook.designRequestUpdated', async ((designRequestEvent: DesignRequestEvent) => {
  console.log(designRequestEvent.detail)
}) as EventListener)
```

### 5. Submit design request, passing remaining design request parameters
Once all images are uploaded, we would ask a few more questions to the user before submitting the design request. As all images have already been uploaded and ingested, the design process should take less than 30 seconds, depending on the size of the book.

```
designRequest.submit({
  imageDensity: 'high',
  embellishmentLevel: 'few',
  textStickerLevel: 'none'
})
```

### 6. Retrieve design request JSON
```await designRequest.getJSON()```
___
### Example
To see this package in action, you can run the following commands after navigating to the `./example` directory:
- `npm run build`
- `cd example`
- `npm i`
- `npm run dev`
