import * as fs from 'fs'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import * as path from 'path'

type Menu = {
  name: string
  link: string
}

type Props = {
  data: Menu[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'data.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const data = JSON.parse(jsonText) as Menu[]
  return {
    props: { data },
  }
}
const Menu: React.FC<Props> = ({ data }: Props) => {
  console.log(data)

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
