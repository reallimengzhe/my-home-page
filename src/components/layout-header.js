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
    <header className="layout_header overflow-hidden px-4 pb-32 pt-40 md:pb-48 md:pt-56">
      <img src="/avatar.png" className="mx-auto mb-4 h-20 w-20 rounded-full relative z-10" draggable={false} />
      <h5 className="mb-8 text-center text-lg relative z-10">李孟哲</h5>
      <div className="text-center md:flex md:items-center md:justify-center relative z-10">
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
