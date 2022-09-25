import type { NextPage } from 'next'
import Head from 'next/head';
import MobileComponent from '../components/mobile';

const Mobile: NextPage = () => {
  return (
    <>
      <Head>
        <script defer src="https://omni.aru.wtf/script.js"></script>
      </Head>
      <MobileComponent />
    </>
  )
}

export default Mobile
