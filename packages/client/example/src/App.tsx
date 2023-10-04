import {
  DesignRequest,
  DesignRequestEvent,
  DesignRequestEventDetail,
  MagicBookClient
} from '@magiclabs.ai/magicbook-client'
import {Layout} from './components/layout'
import {images} from './data/images'
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
      pageType: 'sp'
    })
    designRequest.title = 'My Book'
    designRequest.subtitle = 'Subtitle'
    console.log('designRequest:', designRequest)
    await Promise.all(images.map(async (image) => {
      await designRequest.images.add(image)
      console.log('designRequest.images.add:', image)
    }))
    console.log('designRequest.images.length:', designRequest.images.length)
    console.log('designRequest.getOptions:', await designRequest.getOptions())
    setDesignRequest(designRequest)
    console.log('designRequest.submit:', await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'none'
    }))
  }

  async function cancelDesignRequest() {
    if (currentDesignRequest) {
      console.log('designRequest.cancel:', await currentDesignRequest.cancel())
    }
    setDesignRequest(null)
    setIsCreatingDesignRequest(false)
  }

  async function bookViewed() {
    if (currentDesignRequest) {
      console.log('designRequest.logEvent:', await currentDesignRequest.logEvent(
        'bookViewed', {
          'app': 'mb-client-example'
        }))
    }
  }

  return (
    <Layout>
      <div className='flex justify-center h-8 mb-8'>
        {designRequestEventDetail &&
          <div className='relative w-auto px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 \
          ring-gray-900/10 hover:ring-gray-900/20'>
            <span className='flex items-center justify-center space-x-2'>
              <span className='font-semibold'>Design request</span>
              <div className="w-px h-5 bg-gray-900/10" aria-hidden />
              <span>{designRequestEventDetail.message}</span>
            </span>
            {designRequestEventDetail.slug !== 'ready' &&
              <span className='absolute -right-1 -top-1'>
                <span className='relative flex w-3 h-3'>
                  <span className='absolute inline-flex w-full h-full bg-indigo-400 rounded-full opacity-75 \
                    animate-ping'></span>
                  <span className='relative inline-flex w-3 h-3 bg-indigo-500 rounded-full'></span>
                </span>
              </span>
            }
          </div>
        }
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          MagicBook Client Example
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          This is an example of a MagicBook client. It is a simple HTML page that imports the magicbook-client module
          and uses it to connect to the MagicBook server.
        </p>
        <div className='flex items-center justify-center mt-10 gap-x-6'>
          <button
            onClick={createDesignRequest}
            disabled={isCreatingDesignRequest}
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
              hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed'
          >
              Create design request
          </button>
          <a 
            href='https://www.npmjs.com/package/@magiclabs.ai/magicbook-client'
            target='_blank'
            className='text-sm font-semibold leading-6 text-gray-900'>
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div>
        <div className='flex items-center justify-center mt-5 gap-x-6'>
          {currentDesignRequest &&
            <button
              onClick={cancelDesignRequest}
              className='rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-red-600'
            >
              Cancel design request
            </button>
          }
          {designRequestEventDetail?.slug === 'ready' && 
          <button
            onClick={bookViewed}
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
            hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600'
          >
            Book viewed event
          </button>
          }
        </div>
        <div className='fixed bottom-0 left-0 w-full backdrop-blur-sm'>
          <p className='flex items-center justify-center m-4 font-mono text-xs leading-8 text-gray-600 rounded-full'>
            💡 Open your browser's developer console to see the client in action.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App
