import React from 'react'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PuckEditor from '@/components/puck/puck-editor'

const CampaignLayoutTab = () => {
  return (
    <div className='flex flex-row gap-5'>
      <div className='w-[400px]'>
        <div className='my-4 flex flex-row items-center justify-between'>
          <h2 className='mb-2 text-lg font-medium'>Preset Layout</h2>
          <Button>New</Button>
        </div>

        <div className='flex flex-col gap-2 overflow-y-auto h-[70vh]'>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 1</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 2</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 3</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 4</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 5</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 6</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 7</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 8</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 8</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 8</div>
            <Copy />
          </Card>
          <Card className='flex h-full w-full flex-row items-center justify-between px-3'>
            <div>Layout 8</div>
            <Copy />
          </Card>
        </div>
      </div>

      <div className='h-screen w-full rounded-md border border-gray-300 bg-gray-100 p-4'>
        
      </div>

      {/* <PuckEditor /> */}
    </div>
  )
}

export default CampaignLayoutTab
