import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <div className="nav_bar fixed top-0 z-50 h-16 w-full border-b px-4 backdrop-blur">
      <div className="nav_bar-main mx-auto flex h-full max-w-7xl items-center">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="h-7 w-auto" />
        </Link>

        <Link
          href="/project"
          className={`nav_bar-item ml-auto rounded border px-4 py-1 text-xs ${
            pathname === '/project' ? 'is-active' : ''
          }`}
        >
          项目
        </Link>
        <Link
          href="/post"
          className={`nav_bar-item ml-4 rounded border px-4 py-1 text-xs ${
            pathname === '/post' ? 'is-active' : ''
          }`}
        >
          文章
        </Link>

        <ThemeSwitcher />
      </div>
    </div>
  )
}
