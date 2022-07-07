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
    <div className="">
      <button
        className=""
        onClick={() => {
          return handleChange()
        }}
      >
        ボタン
      </button>
      <ul>
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
  )
}
