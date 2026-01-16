import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <div>
      <Button size='md' startIcon={<ShareIcon size={"md"}/>} variant="primary" text="Share" />
      <Button size='md' startIcon={<PlusIcon size={'md'}/>} variant="secondary" text="Add Content"/>
      
      <div>
          <Card type='youtube' link="https://www.youtube.com/embed/oIy5BnW5Qh8?si=OKy8xf2pLYhL-bB3" title='tech job'/>
      </div>
      
    
    </div>
  )
}

export default App
