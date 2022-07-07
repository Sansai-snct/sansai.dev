import Link from 'next/link'
//import React, { FC, useState } from 'react'
export const Menu: React.FC = () => {
  //const [isOpen, setState] = useState(false)
  return (
    <div className="">
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
