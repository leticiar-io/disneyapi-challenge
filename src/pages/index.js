import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SignInPage from '../pages/signIn/index'

const Index = () => {
  return (
    <div>
      <Head>
        <title>DisneyLand</title>
        <meta name="description" content="Truckpag Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <SignInPage/>
      </body>
    </div>
  )
}

export default Index
