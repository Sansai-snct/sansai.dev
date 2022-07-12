import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

export const Menu: FC = () => {
  const [isOpen, setState] = useState(false)

  const handleChange = () => {
    setState(!isOpen)
  }

  return (
    <nav className="flex">
      <div className="flex-initial absolute top-0 right-0 md:hidden">
        <div>
          <button
            className="bg-gray-400 "
            onClick={() => {
              handleChange()
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen ? (
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
        ) : undefined}
      </div>
    </nav>
  )
}
