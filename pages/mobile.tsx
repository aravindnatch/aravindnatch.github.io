import type { NextPage } from 'next'
import links from '../data/links.json';
import Head from 'next/head'

import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaEnvelope
} from "react-icons/fa";

const Mobile: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center pt-10 bg-black mb-auto">
      <Head>
        <title>Aravind Natchiappan</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="aravindnatch.me" src="https://analytics.aru.wtf/js/script.js"></script>
      </Head>

      <div className="rounded-full border-2 border-black w-36 h-36">
        <img src="/aravind.jpg" alt="logo"  width="100%" height="100%" className="rounded-full"/>
      </div>

      <br/>

      <div>
        <h1 className="text-3xl font-semibold text-center text-white">Aravind Natchiappan</h1>
        <h2 className="text-lg font-semibold text-center text-white">@aravindnatch</h2>
      </div>

      <div className="flex mt-5">
        <a href="mailto:hi@aravindnatch.me" target="_blank">
          <FaEnvelope className="text-white text-2xl inline mx-4 cursor-pointer" />
        </a>
        <a href="https://open.spotify.com/user/aravind.natch" target="_blank">
          <FaSpotify className="text-white text-2xl inline mx-4 cursor-pointer" />
        </a>
        <a href="https://instagram.com/aravindnatch" target="_blank">
          <FaInstagram className="text-white text-2xl inline mx-4 cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@aravindnatch" target="_blank">
          <FaTiktok className="text-white text-2xl inline mx-4 cursor-pointer" />
        </a>
        <a href="https://linkedin.com/in/aravindnatch/" target="_blank">
          <FaLinkedin className="text-white text-2xl inline mx-4 cursor-pointer" />
        </a>
      </div>

      <div className="container max-w-2xl mt-5 p-4">
        {
          links.map((items) => 
            <a href={items['link']} target="_blank" key={items['name']}>
              <div className="rounded-3xl w-full border-2 border-black p-5 mb-5 bg-white">
                  <img src={items['icon']} className="rounded-xl w-10 h-10 inline mr-5"/>
                  <h1 className="right text-center items-left inline">{items['name']}</h1>
              </div>
            </a>
          )
        }
      </div>
    </div>
  )
}

export default Mobile
