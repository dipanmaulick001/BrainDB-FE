import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { CreateContentModal } from './components/ui/CreateContentModal'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Sidebar } from './components/ui/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div>

      <Sidebar/>
      <div className='p-4 ml-68 min-h-screen bg-gray-100'>
          <CreateContentModal open={modalOpen} onClose={() => {
            setModalOpen(false);
          }}/>
          <div className='flex justify-end gap-4'>
            <Button size='md' startIcon={<ShareIcon size={"md"}/>} variant="primary" text="Share" />
            <Button size='md' onClick={()=> setModalOpen(true)} startIcon={<PlusIcon size={'md'}/>} variant="secondary" text="Add"/>
          </div>
          <div className='flex gap-3'>
              <Card type='youtube' link="https://www.youtube.com/embed/oIy5BnW5Qh8?si=OKy8xf2pLYhL-bB3" title='tech job'/>
              <Card type='twitter' link="https://x.com/svpino/status/2012239552254284029?s=20" title='aiml course'/>
          </div>

        </div>
      
    
    </div>
  )
}

export default App
