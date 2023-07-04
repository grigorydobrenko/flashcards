import { Button } from './components/ui/button'
import { Typography } from './components/ui/typography/typography.tsx'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/link'}>
        Button
      </Button>
      <Typography as={'a'} href={'google.com'} variant={'large'}>
        Exapmle
      </Typography>
    </div>
  )
}
