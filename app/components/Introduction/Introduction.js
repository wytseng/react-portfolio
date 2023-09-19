import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import fullAvatar from '../../../public/sittingAvatar2.png';
import avatar from '../../../public/avatar.png';
import './introduction.css'



export default function Introduction() {

  return (
    <div className="pt-8 p-2 md:pt-24">
      <div className="message-container flex flex-col items-center justify-center md:justify-start xxl:justify-center md:flex-row xxl:flex-col">
        <Image alt="avatar" src={avatar} height={55} className="block pb-2 md:pr-3 md:block" />
        <h1 className="text-center font-sharetechmono text-sm p-3 md:text-xl rounded-full bg-white">
          <span className="message">👋🏻 Hi there! I&apos;m Stephanie Tseng.</span> 
        </h1>
      </div>
      <div className="introduction xl:mt-10">
        <div className='xxl:text-center'>
          <h2 className="text-4xl py-5 md:py-7 text-white font-poppins font-extrabold drop-shadow-md md:text-6xl">
            <span className='text-forest'>A </span>
              Frontend Developer.
          </h2>
          {/* <h3 className="text-2xl py-2 md:text-3xl">Front end developor.</h3> */}
          <p className="text-md py-3 leading-6 text-gray-800 md:text-xl">
            I like to build <span className='font-sharetechmono opacity-0 animate-fade-in underline text-white'>responsive</span> and <span className='font-sharetechmono opacity-0 animate-fade-in underline text-white'>effective</span> websites that focus on user experience.
            <br></br>have experience with startups, constantly learning and striving for improvement.
          </p>
        </div>
        <div className="relative h-60 md:h-80 xl:h-[27rem] mt-5 overflow-hidden">
          <Image alt="full body avatar" src={fullAvatar} fill={true} style={{objectFit:'contain'}} />
        </div>
      </div>
    </div>
  )
}