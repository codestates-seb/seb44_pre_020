/* import React from 'react' */
import google from '../../assets/google.svg'
import { VscGithub } from "react-icons/vsc";

function LoginButtons() {
  return (
    <>
    <div className="mx-auto d-flex">
      <button className="google-login w-[280px] h-[37px] mb-[8px] border rounded-[5px] border-solid cursor-pointer border-gray-300 bg-white text-gray-800 flex justify-center items-center hover:bg-gray-50 active:bg-gray-100 ">
        <img src={google} alt='googlelogo'></img>
        <span className="ml-4">Log in with Google</span>
      </button>
      
      <button className="github-login w-[280px] h-[37px] mb-[8px] border rounded-[5px] border-solid cursor-pointer border-gray-300 bg-gray-900 text-white flex justify-center items-center hover:bg-gray-700 active:bg-gray-100 ">
        <VscGithub />
        <span className="ml-4">Log in with Github</span>
      </button>
    </div>
    </>
    
  )
}

export default LoginButtons