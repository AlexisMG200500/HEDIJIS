import { useReveal } from '../hooks/useReveal'

const DIRECTIONS = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
}

export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out duration-700 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${DIRECTIONS[direction]}`
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
