import { Button, Checkbox, Input } from './components/ui'

export function App() {
  return (
    <div style={{ width: '300px' }}>
      <Button>Button</Button>
      <Input label={'input'} />
      <Checkbox label={'checkbox'} />
    </div>
  )
}
