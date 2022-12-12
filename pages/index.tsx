import type { NextPage } from 'next'
import { Fragment } from 'react';
import MediaQuery from 'react-responsive'

import HomeComponent from "../components/home";
import MobileComponent from "../components/mobile";
import Script from 'next/script';

const Home: NextPage = () => { 
  return (
    <>
      <Script src="/omni.js"></Script>
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