import type { NextPage } from 'next'
import Head from 'next/head'

import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaEnvelope
} from "react-icons/fa";

const Mobile: NextPage = () => {

  function getAge() {
    var today = new Date();
    var birthDate = new Date('05/21/2002');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  return (
    <div className="flex h-screen flex-col items-center mb-auto overflow-auto bg-[#040608]">
      <Head>
        <title>aravind natchiappan</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="aravindnatch.me" src="https://analytics.aru.wtf/js/script.js"></script>
      </Head>

      <div className="bg-[#111315] px-10 pt-10 pb-5 w-full">
        <div className="max-w-md mx-auto">
          <div className="flex justify-evenly">
            <div className="w-32 h-32 min-w-32 min-h-32 ">
              <img src="/aravind.jpg" alt="logo" width="100%" height="100%" className="rounded-full"/>
            </div>

            <div className="w-max ml-3 mt-3">
              <h1 className="text-md font-semibold text-left text-white font">aravind natchiappan</h1>

              <div className="mt-4">
                <h2 className="text-sm text-left text-white">{getAge()} • photography</h2>
                <h2 className="text-sm text-left text-white">comp sci @ gatech</h2>
                <h2 className="text-sm text-left text-white">atlanta, georgia</h2>
              </div>
            </div>
          </div>
      
          <div className="flex mt-7 justify-evenly">
            <a href="mailto:hi@aravindnatch.me" target="_blank">
              <FaEnvelope className="text-white text-2xl inline cursor-pointer" />
            </a>
            <a href="https://open.spotify.com/user/aravind.natch" target="_blank">
              <FaSpotify className="text-white text-2xl inline cursor-pointer" />
            </a>
            <a href="https://instagram.com/aravindnatch" target="_blank">
              <FaInstagram className="text-white text-2xl inline cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@aravindnatch" target="_blank">
              <FaTiktok className="text-white text-2xl inline cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/aravindnatch/" target="_blank">
              <FaLinkedin className="text-white text-2xl inline cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#111315] w-full rounded-b-3xl p-2"></div>

      <div className="container max-w-2xl mt-5 p-4">
        <div className="w-full pb-5">
          <h2 className="text-white text-left font-semibold">my games</h2>
        </div>

        <a href="https://tod.aru.wtf" target="_blank">
          <div className="rounded-xl w-full border-2 border-white p-3 mb-5 bg-white">
              <img src="/icons/tod.png" className="rounded-xl w-10 h-10 inline mr-5"/>
              <h1 className="right text-center text-black items-left inline">truth or drink</h1>
          </div>
        </a>

        <a href="https://aravindnatch.me/mobile" target="_blank">
          <div className="rounded-xl w-full border-2 border-white p-3 mb-5 bg-white">
              <img src="/icons/trivia.png" className="rounded-xl w-10 h-10 inline mr-5"/>
              <h1 className="right text-center items-left inline">trivia cracked</h1>
          </div>
        </a>
        
        <hr className="opacity-20"/>

        <div className="w-full py-5">
          <h2 className="text-white text-left font-semibold">other links</h2>
        </div>
        
        <a href="https://venmo.com/@aravindnatch?txn=pay&note=<3" target="_blank">
          <div className="rounded-xl w-full border-2 border-white p-3 mb-5 bg-white">
              <img src="/icons/venmo.png" className="rounded-xl w-10 h-10 inline mr-5"/>
              <h1 className="right text-center items-left inline">venmo me</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Mobile
