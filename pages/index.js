import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Main</title>
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
    <h1>Hello world</h1>
    <Link href="/about">About</Link>
  </div>

)

