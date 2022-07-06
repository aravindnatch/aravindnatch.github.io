import type { NextPage } from 'next'
import { useEffect } from 'react';

const MobileRedirect: NextPage = () => {

  useEffect(() => {
    window.location.replace("/mobile");
  });
  
  return (null)
}

export default MobileRedirect