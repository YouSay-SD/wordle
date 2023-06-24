import { createElement } from 'react'

export const Icon = ({
  onClick,
  className = '',
  width = 20,
  height = 20,
  viewBox = '0 0 1024 1024',
  children,
  fill = 'white',
  style = {},
  preserveAspectRatio = '',
  ...props
}) => {
  const newProps = {
    className,
    onClick,
    width,
    height,
    viewBox,
    fill,
    style,
    preserveAspectRatio,
    dangerouslySetInnerHTML: { __html: children },
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': props['aria-hidden'] ?? true,
    role: 'none',
    focusable: false
  }

  return createElement('svg', newProps)
}
