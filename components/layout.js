import Nav from './nav'
import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>BitsPrice</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
      </Head>
      <Nav /> 
      <main className="container">
        {props.children}
      </main>
    </>
  )
}

export default Layout