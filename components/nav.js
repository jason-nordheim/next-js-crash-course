import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        ul {
          background: #333;
          color: #fff;
          list-style: none;
          display: flex;
        }
        ul li {
          font-size: 18px;
          margin-right: 20px;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default Nav 