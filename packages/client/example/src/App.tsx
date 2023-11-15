import {
  DesignRequest,
  DesignRequestEvent,
  DesignRequestEventDetail,
  MagicBookClient
} from '@magiclabs.ai/magicbook-client'
import {additionalImages, images} from './data/images'
import {useEffect, useState} from 'react'

function App() {
  const client = new MagicBookClient(
    import.meta.env.VITE_MB_CLIENT_API_KEY as string
  )
  const [isCreatingDesignRequest, setIsCreatingDesignRequest] = useState<boolean>(false) 
  const [designRequestEventDetail, setDesignRequestEventDetail] = useState<DesignRequestEventDetail | null>()
  const [currentDesignRequest, setDesignRequest] = useState<DesignRequest | null>()
  
  function handleDesignRequestUpdated(designRequestEvent: DesignRequestEvent) {
    console.log('MagicBook.designRequestUpdated', designRequestEvent.detail)
    setDesignRequestEventDetail(designRequestEvent.detail)
  }

  function addMagicBookEventListener() {
    window.addEventListener('MagicBook.designRequestUpdated', handleDesignRequestUpdated as EventListener)
  }

  function removeMagicBookEventListener() {
    window.removeEventListener('MagicBook.designRequestUpdated', handleDesignRequestUpdated as EventListener)
  }

  useEffect(() => {
    if (designRequestEventDetail?.slug === 'ready' && currentDesignRequest) {
      currentDesignRequest.getJSON().then((res) => {
        console.log('designRequest.getJSON:', res)
      })
    }
    return () => {
      removeMagicBookEventListener()
    }  
  }, [designRequestEventDetail])
  
  useEffect(() => {
    if (isCreatingDesignRequest) {
      addMagicBookEventListener()
    } else {
      setDesignRequestEventDetail(null)
      removeMagicBookEventListener()
    }
    return () => {
      removeMagicBookEventListener()
    }
  }, [isCreatingDesignRequest])

  async function createDesignRequest() {
    setIsCreatingDesignRequest(true)
    const designRequest = await client.createDesignRequest({
      occasion: 'default',
      style: 5144,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'sp',
      userId: 'MB-EXAMPLE',
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'none'
    })
    designRequest.title = 'My Book TEST'
    designRequest.subtitle = 'Subtitle'
    console.log('designRequest:', designRequest)
    await Promise.all(images.map(async (image) => {
      await designRequest.images.add(image)
      console.log('designRequest.images.add:', image)
    }))
    console.log('designRequest.images.length:', designRequest.images.length)
    console.log('designRequest.getOptions:', await designRequest.getOptions())
    setDesignRequest(designRequest)
    console.log('designRequest.submit:', await designRequest.submit())
  }

  async function cancelDesignRequest() {
    if (currentDesignRequest) {
      console.log('designRequest.cancel:', await currentDesignRequest.cancel())
    }
  }

  async function bookViewed() {
    if (currentDesignRequest) {
      console.log('designRequest.logEvent:', await currentDesignRequest.logEvent(
        'bookViewed', {
          'app': 'mb-client-example'
        }))
    }
  }

  async function addImagesAndSubmit() {
    console.log(currentDesignRequest)
    await Promise.all(additionalImages.map(async (image) => {
      console.log('designRequest.images.add:', await currentDesignRequest?.images.add(image))
    }))
    console.log('designRequest.submit:', await currentDesignRequest?.submit())
  }

  return (
    <div className='flex flex-col items-center space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-6xl'>
          MB-Client Example
        </h1>
        <p className='max-w-lg mt-2 text-sm leading-6 text-center text-gray-600'>
          This is an example of a MagicBook client. It is a simple HTML page that imports the magicbook-client module
          and uses it to connect to the MagicBook server.
        </p>
      </div>
      <div className='flex flex-col space-y-4 w-52'>
        <h2 className='font-mono text-center'>
          State: {designRequestEventDetail ? designRequestEventDetail.slug : 'N/A'}
        </h2>
        <button
          onClick={createDesignRequest}
          disabled={isCreatingDesignRequest}
          className='rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
           hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-slate-800 disabled:opacity-50 disabled:cursor-not-allowed'
        >
           Create design request
        </button>
        <button
          onClick={cancelDesignRequest}
          className='rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
            hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-red-600'
        >
          Cancel design request
        </button>
        <button
          onClick={bookViewed}
          className='rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
        hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-slate-800'
        >
          Book viewed event
        </button>
        <button
          onClick={addImagesAndSubmit}
          className='rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
           hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-slate-800 disabled:opacity-50 disabled:cursor-not-allowed'
        >
           Add more images and recreate
        </button>
      </div>
      <p className='font-mono text-xs leading-8 text-center text-gray-600 rounded-full'>
        💡 Open your browser's developer console to see the client in action.
      </p>
    </div>
  )
}

export default App
