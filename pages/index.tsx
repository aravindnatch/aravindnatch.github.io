import Head from "next/head";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegFileAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0D1319]">
      <Head>
        <title>Aravind Natchiappan</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SW1CJ0GWQC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SW1CJ0GWQC', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <div className="container flex mx-auto p-4 h-screen max-w-4xl">
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
          <Link href="https://aravindnatch.me/resume.pdf" passHref={true}>
            <FaRegFileAlt className="text-white text-3xl inline mr-10 hover:text-[#c32aa3] cursor-pointer" />
          </Link>
          <Link href="https://linkedin.com/in/aravindnatch/" passHref={true}>
            <FaLinkedin className="text-white text-3xl inline mr-10 hover:text-[#0077B5] cursor-pointer" />
          </Link>
          <Link href="https://github.com/aravindnatch/" passHref={true}>
            <FaGithub className="text-white text-3xl inline mr-10 hover:text-[#7289DC] cursor-pointer" />
          </Link>
          <Link href="https://instagram.com/aravindnatch" passHref={true}>
            <FaInstagram className="text-white text-3xl inline mr-10 hover:text-[#c32aa3] cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
