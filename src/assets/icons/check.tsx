import { SVGProps, Ref, forwardRef, memo } from 'react'

type SvgComponentProps = {
  isDisabled: boolean
} & SVGProps<SVGSVGElement>

const SvgComponent = (props: SvgComponentProps, ref: Ref<SVGSVGElement>) => {
  const { isDisabled } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 24 20"
      ref={ref}
      {...props}
    >
      <path
        stroke={isDisabled ? ' #dcdae0' : '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 12 4.243 4.243 8.484-8.486"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
