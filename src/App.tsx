import { Button } from './components/ui/button'
import { Input } from './components/ui/input/input.tsx'

export function App() {
  return (
    <div>
      <Button>Button</Button>
      <Input label={'input'} type={'password'} />
    </div>
  )
}
