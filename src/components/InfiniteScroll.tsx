import * as React from 'react'

import { throttle } from 'lodash'

interface Props {
  handler: Function;
}

export default function InfiniteScroll({ handler }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const scrollHandler = throttle(() => {
      if (ref.current?.getBoundingClientRect().top as number < window.innerHeight + 100) {
        handler()
      }
    }, 100)

    if (ref.current) {
      window.addEventListener('scroll', scrollHandler)
    }

    return () => {
      window.removeEventListener('scroll', scrollHandler) // eslint-disable-line
    }
  }, [ref, handler])

  return (<div ref={ref} />)
}
