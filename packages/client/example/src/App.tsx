import {
  DesignRequest,
  DesignRequestEvent,
  DesignRequestEventDetail,
  EngineAPI,
  // Image,
  MagicBookClient
} from '@magiclabs.ai/magicbook-client'
import {Layout} from './components/layout'
import {images} from './data/images'
import {useEffect, useState} from 'react'

function App() {
  const client = new MagicBookClient(
    import.meta.env.VITE_MB_CLIENT_API_KEY as string
  )
  client.engineAPI.returnServerSchemas = true

  async function listEmbellishments() {
    console.log(await client.engineAPI.embellishments.lis223t({styleSlug: '2020-what-a-year-sfly'}))
  }

  return (
    <div className='flex flex-col items-center h-screen p-10 bg-gray-900'>
      <button
        onClick={listEmbellishments}
        className='rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
      >
        listEmbellishments
      </button>
    </div>
  )
}

export default App
