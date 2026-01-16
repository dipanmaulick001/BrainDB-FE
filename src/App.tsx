import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button startIcon={<ShareIcon size={"md"}/>} variant="primary" text="Share" />
      <Button  startIcon={<PlusIcon size={'md'}/>} variant="secondary" text="Add Content"/>
      

      <Card type='youtube' link="https://youtu.be/oIy5BnW5Qh8?si=XYHxkrlJ316dJJ4Y" title='tech job'/>
    
    </>
  )
}

export default App
