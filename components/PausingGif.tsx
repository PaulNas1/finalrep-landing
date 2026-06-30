'use client'

import { useEffect, useRef } from 'react'

interface PausingGifProps {
  src: string
  alt: string
  style?: React.CSSProperties
}

/**
 * Exercise GIF that plays while visible and pauses when scrolled off-screen
 * (handoff §5C-2). Looping GIFs can't be paused natively, so we swap the src
 * out when off-screen and restore it when back in view.
 */
export default function PausingGif({ src, alt, style }: PausingGifProps) {
  const ref = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const img = e.target as HTMLImageElement
          if (e.isIntersecting) {
            if (img.getAttribute('src') !== src) img.setAttribute('src', src)
          } else if (img.getAttribute('src')) {
            img.removeAttribute('src')
          }
        })
      },
      { rootMargin: '120px 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [src])

  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} style={style} />
}
