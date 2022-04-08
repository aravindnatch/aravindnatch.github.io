import type { NextPage } from 'next'

import links from '../data/links.json';

import Head from 'next/head'
import Image from 'next/image'

const Mobile: NextPage = () => {
  var sections = ["tiktok", "instagram", "twitter", "youtube", "twitch", "reddit"]
  var items = links;
  return (
    <div className="flex min-h-screen flex-col items-center pt-10 bg-black">
      <Head>
        <title>Aravind Natchiappan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-full border-2 border-black w-36 h-36">
        <img src="/aravind.jpg" alt="logo"  width="100%" height="100%" className="rounded-full"/>
      </div>

      <br/>

      <div>
        <h1 className="text-4xl font-semibold text-center text-white">Aravind Natchiappan</h1>
        <h2 className="text-xl font-semibold text-center text-white">@aravindnatch</h2>
      </div>


      <div className="container max-w-2xl mt-5 p-4">
        {
          items.map((section) => 
            <a href={section['link']} target="_blank">
              <div className="rounded-3xl w-full border-2 border-black p-5 mb-5 bg-white">
                  <img src={section['icon']} className="rounded-xl w-10 h-10 inline mr-5"/>
                  <h1 className="right text-center items-left inline">{section['name']}</h1>
              </div>
            </a>
          )
        }
      </div>
    </div>
  )
}

export default Mobile
