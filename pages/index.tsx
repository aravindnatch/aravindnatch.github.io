import type { NextPage } from 'next'
import { Fragment } from 'react';
import MediaQuery from 'react-responsive'

import HomeComponent from "../components/home";
import MobileComponent from "../components/mobile";

const Home: NextPage = () => { 
  
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={1224}>
          <HomeComponent />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
          <MobileComponent />
      </MediaQuery>
    </Fragment>
  )
}

export default Home;
