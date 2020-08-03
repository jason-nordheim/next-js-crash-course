import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul style={{listStyle: 'none'}}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav 