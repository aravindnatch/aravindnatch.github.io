import type { NextPage } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import MobileComponent from '../components/mobile';

const Mobile: NextPage = () => {
  return (
    <>
      <Script src="/script.js"></Script>
      <MobileComponent />
    </>
  )
}

export default Mobile
