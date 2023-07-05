import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Input } from './components/ui/input'

export function App() {
  return (
    <div style={{ width: '300px' }}>
      <Button>Button</Button>
      <Input label={'input'} />
      <Checkbox label={'checkbox'} />
    </div>
  )
}
