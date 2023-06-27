import React from 'react'
import { Link } from 'react-router-dom'

function LoginHome() {


  return (
    <div className="flex">
      <div className="flex items-center justify-between gap-4">
        <Link to="/user">
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxZ3yZ7RupMJPJCP_NwE0ngixsfdYY3OmIqScQmx=k-s32"
            alt="user-avartar"
            className="ml-4 mr-4 rounded-md h-[30px] w-[30px]"
          />
        </Link>
        <button
          type="button"
          className="ml-[6px] bg-[#1e95ff] hover:bg-[#0074CC] text-white rounded-[4px] px-[10px] w-[70px]"
        >Logout</button>
      </div>
    </div>
  )
}

export default LoginHome