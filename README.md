
![GitHub CI](https://github.com/56k/mb-package/actions/workflows/test.yml/badge.svg) ![GitHub CI](https://github.com/56k/mb-package/actions/workflows/linter.yml/badge.svg)
# magicbook-client
A TypeScript package that creates a photobook, add images, update photobook and returns the book nautilus JSON

### Installing the latest version
You can install the latest version by using:
- `npm install mb-package@latest`

### 1. Create the MagicBook client with your API key
`const client = new MagicBookClient('api-key')`

### 2. Create a design request, you can pass known design request parameters

Call this method when entering the MagicBook funnel. The user might already have made some design choices. Pass them via the initialization object.

```
const designRequest = await client.createDesignRequest({
  occasion: 'travel'
  style: '1234',
  bookFormat: '8x8',
  coverType: 'HC',
  pageType: 'LF'
})
```

### 3. Connect Kraken::itemCompleted to MagicBook client
This "connexion" enables MagicBook to fetch and analyze images as soon they're  uploaded to the Shutterfly image server. Is the API calls become too "chatty", we can batch images to reduce the number of API calls.

```
import {Image} from 'magicbook-client'

window.addEventListener('Kraken.itemCompleted', (item) => {
  const image: Image = {...}
  designRequest.addImage(image)
})
```

### 4. Get design progress updates from backend
During the book design, the server will notify the client about progress. This information can be displayed to the user.

```
window.addEventListener('Magicbook.designRequestUpdated', async ((designRequestEvent: DesignRequestEvent) => {
  console.log(designRequestEvent.detail)
}) as EventListener)
```

### 5. Submit design request, passing remaining design request parameters
Once all images are uploaded, we would ask a few more questions to the user before submitting the design request. As all images have already been uploaded and ingested, the design process should take less than 30 seconds, depending on the size of the book.

```
designRequest.submitDesignRequest({
  imageDensity: 'high',
  embellishmentLevel: 'few',
  textStickerLevel: 'none'
})
```

### 6. Retrieve the Nautilus JSON
```await designRequest.getNautilusJSON()```
