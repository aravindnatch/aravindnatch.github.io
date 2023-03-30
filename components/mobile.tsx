import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import links from '../data/links.json'

import {
  FaInstagram,
  FaSpotify,
  FaEnvelope,
  FaSnapchatGhost,
  FaLinkedinIn
} from "react-icons/fa";
import { useEffect, useState } from 'react';

interface Listening {
  artist: string,
  song: string,
  image: string,
  link: string,
  duration: string
}

const msToTime = (duration: number) => {
  let minutes = Math.floor(duration / 60000);
  let seconds: number = Number(((duration % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const Mobile: NextPage = () => {
  const [ listening, setListening ] = useState<Listening>({artist: '', song: '', image: '', link: 'https://open.spotify.com/user/aravind.natch', duration: "0:00"})
  const [ time, setTime ] = useState("0:00")
  const [ forceChange, setForceChange ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)

  function fetchData() {
    axios.get('https://listening.aru.wtf/spotify/current').then((res) => {
      if (res.data === '') { return }

      console.log(res.data)

      const artist = res.data.item.artists[0].name
      const song = res.data.item.name
      const image = res.data.item.album.images[0].url
      const link = `https://open.spotify.com/track/${res.data.item.id}`

      const time = msToTime(res.data.progress_ms)
      const duration = msToTime(res.data.item.duration_ms)

      setIsPlaying(res.data.is_playing)
      setListening({artist, song, image, link, duration})
      setTime(time)
    }).catch(() => {})
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (!isPlaying) { 
      setListening({artist: '', song: '', image: '', link: 'https://open.spotify.com/user/aravind.natch', duration: "0:00"})
      return 
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        const [ minutes, seconds ] = prev.split(':')
        const newSeconds = Number(seconds) + 1
        const durationInSeconds = parseInt(listening.duration.split(':')[0]) * 60 + parseInt(listening.duration.split(':')[1])

        if ((newSeconds + parseInt(minutes) * 60 >= durationInSeconds)) {
          clearInterval(interval)
          setTimeout(() => {
            fetchData()
          }, 5000)
          return listening.duration
        }

        if (newSeconds === 60) {
          return `${Number(minutes) + 1}:00`
        }

        return `${minutes}:${newSeconds < 10 ? '0' : ''}${newSeconds}`
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [listening.duration, isPlaying])

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
    <div className="flex h-screen fixmobilevh flex-col items-center mb-auto">
      <Head>
        <title>aravind natchiappan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#111315" />
      </Head>

      <div className="bg-[#111315] px-10 pt-10 pb-3 w-full">
        <div className="max-w-md mx-auto">
          <div className="flex justify-evenly">
            <div className="w-32 h-32 min-w-32 min-h-32 ">
              <img src="/aravind.jpg" alt="logo" width="100%" height="100%" className="rounded-full"/>
            </div>

            <div className="w-max ml-3 mt-3">
              <h1 className="text-md font-semibold text-left text-white font">aravind natchiappan</h1>

              <div className="mt-4">
                <h2 className="text-sm text-left text-white inline">{getAge()} • photography</h2>
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
            <a href="https://snapchat.com/add/aravindnatch" target="_blank">
              <FaSnapchatGhost className="text-white text-2xl inline cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/aravindnatch" target="_blank">
              <FaLinkedinIn className="text-white text-2xl inline cursor-pointer" />
            </a>
          </div>

          <div className="w-full">
            <a href={listening.link} className="w-full justify-center flex">
              <div className="flex border-2 border-[#363C3D] rounded-full mt-7 p-2 justify-between items-center w-10/12">
                <div className="flex-shrink-0 justify-left pr-1 ml-1">
                  {
                    listening.image ? 
                      <img src={listening.image} className="h-8 w-8 rounded-full rotator"/> : 
                      <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  }
                </div>
                <div className="text-white text-left text-sm pl-2 truncate w-full">
                  {listening.song || 'not listening to anything'}
                  <div className="text-xs">
                    <span className="text-gray-400">
                      {listening.artist || 'Spotify'}
                    </span>
                  </div>
                </div>
                {
                  listening.song ?
                    <div className="flex flex-col text-white text-sm px-2 text-right">
                      {time || '12220:00'}
                      <div className="text-xs">
                        <span className="text-gray-400">
                          {listening.duration || '0:00'}
                        </span>
                      </div>
                    </div>
                  : null
                }
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#111315] w-full rounded-b-3xl p-2"></div>

      <div className="container max-w-2xl p-4">
        {
            links.map((items, index) => 
              <div key={index} className="border-b border-[#363C3D] last:border-none mb-5">
                <div className="w-full pb-6 pl-2">
                  <h2 className="text-white text-left font-semibold">{items['name']}</h2>
                </div>
                {
                  items['links'].map((link, index) =>
                    <div key={index} className="">
                      <a href={link['link']} target="_blank">
                        <div className="rounded-2xl w-full border-2 border-[#363C3D] p-3 mb-5">
                            <img src={link['icon']} className="rounded-xl w-10 h-10 inline mr-5"/>
                            <h1 className="right text-center text-white items-left inline opacity-90">{link['name']}</h1>
                        </div>
                      </a>
                    </div>
                  )
                }
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Mobile
