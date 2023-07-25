import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import { Input } from './components/ui/input'
import { Listbox } from './components/ui/select/select.tsx'

export function App() {
  return (
    <div style={{ width: '300px' }}>
      <Button>Button</Button>
      <Input label={'input'} />
      <Checkbox label={'checkbox'} />
      <Listbox />
    </div>
  )
}
