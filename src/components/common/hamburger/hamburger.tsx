import Link from 'next/link'

export const Menu: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
