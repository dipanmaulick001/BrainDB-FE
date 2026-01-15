import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <>
      <Button variant="primary" text="Share" />
      <Button  startIcon={<PlusIcon/>} variant="secondary" text="Add Content"/>
    </>
  )
}

export default App
