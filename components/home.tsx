import { NextPage } from "next";
import Head from "next/head"
import { FaGithub, FaInstagram, FaLinkedin, FaRegFileAlt, FaEnvelope } from "react-icons/fa";

const HomeComponent: NextPage = () => {
  const title = "Aravind Natchiappan"
  const description = "Aravind Natchiappan is a software engineer and entrepreneur. He is currently building a platform that simplifies inventory management for online businesses."

  return (
    <div className="flex flex-col items-center justify-center bg-[#0D1319] h-screen">
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aravindnatch.me/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aravindnatch.me/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex mx-auto p-4 max-w-3xl">
        <div className="text-left">
          <div className="text-6xl text-header text-white font-semibold">
            hi, i'm <span className="text-blue-400">aravind.</span>
          </div>

          <div className="text-2xl text-header text-white text-opacity-90 mt-6 mb-12">
            I'm currently building a platform that simplifies inventory management for online businesses.
          </div>

          <a href="https://aravindnatch.me/resume.pdf" target="_blank">
            <FaRegFileAlt className="text-white text-3xl inline mr-10 hover:text-[#c32aa3] cursor-pointer" />
          </a>
          <a href="mailto:aravind.natch@gmail.com" target="_blank">
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

export default HomeComponent
