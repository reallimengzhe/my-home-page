import { IconCode, IconShake, IconEmail } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

export default function LayoutHeader() {
  const [isDark, setDark] = useState(false)

  useEffect(onHtmlClassChange, [])

  useEffect(() => {
    const observer = new MutationObserver(onHtmlClassChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }, [])

  function onHtmlClassChange() {
    const value = document.documentElement.classList.contains('dark')
    setDark(value)
  }

  return (
    <header className="layout-header relative overflow-hidden px-4 pb-32 pt-40 md:pb-48 md:pt-56">
      <video
        src={isDark ? '/header/dark.mp4' : '/header/light.mp4'}
        loop
        muted
        autoPlay
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover opacity-60"
        style={{ zIndex: -1 }}
      />
      <img
        src="/avatar.png"
        className="mx-auto mb-4 h-20 w-20 rounded-full "
        draggable={false}
      />
      <h5 className="mb-8 text-center text-lg">李孟哲</h5>
      <div className="text-center md:flex md:items-center md:justify-center">
        <div className="mb-2 md:mb-0 md:mr-8">
          <IconCode className="mr-2" />
          <span>前端开发工程师</span>
        </div>
        <div className="mb-2 md:mb-0 md:mr-8">
          <IconShake className="mr-2" />
          <a href="tel:+8615538077068">155 3807 7068</a>
        </div>
        <div>
          <IconEmail className="mr-2" />
          <a href="mailto:li.mengzhe@outlook.com">li.mengzhe@outlook.com</a>
        </div>
      </div>
    </header>
  )
}
