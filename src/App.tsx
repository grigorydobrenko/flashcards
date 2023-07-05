import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

export function App() {
  return (
    <div style={{ width: '300px' }}>
      <Button>Button</Button>
      <Input label={'input'} />
    </div>
  )
}
