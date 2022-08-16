import type { NextPage } from 'next'
import { Fragment } from 'react';
import Head from 'next/head';
import MediaQuery from 'react-responsive'

import HomeComponent from "../components/home";
import MobileComponent from "../components/mobile";

const Home: NextPage = () => { 
  return (
    <>
      <Head>
        <script async src="https://omni.aru.wtf/script.js"></script>
      </Head>
      <Fragment>
        <MediaQuery minDeviceWidth={1224}>
            <HomeComponent />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
            <MobileComponent />
        </MediaQuery>
      </Fragment>
    </>
  )
}

export default Home;