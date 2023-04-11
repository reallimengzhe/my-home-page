import Link from 'next/link'
import { IconRight } from '@arco-design/web-react/icon'
import NavBar from '@/components/nav-bar'
import LayoutHeader from '@/components/layout-header'
import LayoutFooter from '@/components/layout-footer'
const posts = require('@/data/post.json')

export default function Project() {
  return (
    <main className="page_post">
      <NavBar />

      <LayoutHeader />

      <div className="px-8">
        <div
          className="page_post-main mx-auto grid max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ marginTop: '-32px' }}
        >
          {posts.map(post => {
            return (
              <Link
                key={post.name}
                href={post.link}
                target='_blank'
                className="page_post-item content-bg rounded-xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow"
              >
                <img
                  src={post.illustration}
                  className="mb-4 aspect-3/2 w-full rounded-md object-cover"
                />
                <h5 className="mb-2">
                  <span>{post.title}</span>
                  <IconRight className="ml-2 transition duration-300" />
                </h5>
                <p className="text-slate-400"> {post.time} </p>
              </Link>
            )
          })}
        </div>
      </div>

      <LayoutFooter />
    </main>
  )
}
