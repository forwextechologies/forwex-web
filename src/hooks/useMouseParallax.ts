// src/hooks/useMouseParallax.ts
import { useEffect, useRef } from 'react'

export function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      // Normalize to -1 → +1
      const x = (e.clientX / w - 0.5) * 2
      const y = (e.clientY / h - 0.5) * 2
      // Very subtle — only 12px shift max
      el.style.transform = `translate(${x * 12}px, ${y * 12}px)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return ref
}
