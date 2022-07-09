import Head from "next/head"
import Script from "next/script";
import { isMobile } from 'react-device-detect';
import MobileRedirect from "../components/redirect";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegFileAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Home() {  
  return isMobile ? <MobileRedirect /> : (
    <div className="flex flex-col items-center justify-center bg-[#0D1319] fixmobilevh h-screen">
    <Head>
      <title>Aravind Natchiappan</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#0D1319" />
      <Script src="https://omni.aru.wtf/script.js" strategy="beforeInteractive"></Script>
    </Head>
    <div className="container flex mx-auto p-4 max-w-4xl">
      <div className="m-auto text-left">
        <div className="text-6xl text-header text-white font-semibold">
          hi, i'm <span className="text-blue-400">aravind.</span>
        </div>
        <br />
        <div className="text-4xl text-header text-white font-semibold">
          cs student {"&"} avid problem solver
        </div>
        <br />

        <div className="text-2xl text-header text-white text-opacity-90">
          I'm a computer science student at the Georgia Institute of
          Technology currently working on improving the distribution of
          financial information for retail investors.
        </div>
        <br />
        <br />
        <a href="https://aravindnatch.me/resume.pdf" target="_blank">
          <FaRegFileAlt className="text-white text-3xl inline mr-10 hover:text-[#c32aa3] cursor-pointer" />
        </a>
        <a href="mailto:aru@gatech.edu" target="_blank">
          <FaEnvelope className="text-white text-3xl inline mr-10 hover:text-[#ff6961] cursor-pointer" />
        </a>
        <a href="https://linkedin.com/in/aravindnatch/" target="_blank">
          <FaLinkedin className="text-white text-3xl inline mr-10 hover:text-[#0077B5] cursor-pointer" />
        </a>
        <a href="https://github.com/aravindnatch/" target="_blank">
          <FaGithub className="text-white text-3xl inline mr-10 hover:text-[#7289DC] cursor-pointer" />
        </a>
        <a href="https://instagram.com/aravindnatch" target="_blank">
          <FaInstagram className="text-white text-3xl inline mr-10 hover:text-[#c32aa3] cursor-pointer" />
        </a>
      </div>
    </div>
  </div>
  );
}
