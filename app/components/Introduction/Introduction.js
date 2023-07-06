import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import fullAvatar from '../../../public/sittingAvatar2.png';
import avatar from '../../../public/avatar.png';
import './introduction.css'



export default function Introduction() {

  return (
    <section>
      <div className="pt-8 p-2">
        <div className="message-container flex flex-col items-center justify-center md:flex-row">
          <Image alt="avatar" src={avatar} height={55} className="block pb-2 md:pr-3 md:block" />
          <h1 className="text-center font-inconsolata text-md p-3 md:text-2xl rounded-full bg-white">
            <span className="message">👋🏻 Hi there! I&apos;m Stephanie Tseng.</span> 
          </h1>
        </div>
        <div className="introduction">
          <h2 className="text-4xl py-5 text-white font-poppins font-extrabold md:text-6xl">Frontend Developer.</h2>
          {/* <h3 className="text-2xl py-2 md:text-3xl">Front end developor.</h3> */}
          <p className="text-lg py-3 leading-6 text-gray-800 md:text-xl">
            I build <span className='underline'>responsive</span> and effective websites that focus on user experience.
            Starting out fresh in this field, I strive to learn and expand my toolset and eficiently.
          </p>
          {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div> */}
          <div className="relative mx-auto h-60 mt-5 overflow-hidden">
            <Image alt="full body avatar" src={fullAvatar} fill={true} style={{objectFit:'contain'}} />
          </div>
        </div>
      </div>
    </section>
  )
}