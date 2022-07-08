import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

export const Menu: FC = () => {
  const [isOpen, setState] = useState(false)

  const handleChange = () => {
    setState(!isOpen)
    console.log(isOpen)
  }

  return (
    <nav className="flex">
      <div className="">
        <button
          className="bg-gray-400"
          onClick={() => {
            return handleChange()
          }}
        >
          ボタン
        </button>
        <ul className="md:hidden">
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Works</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
