// import { useState } from "react"
import { Link } from "react-router-dom"

// function BeforeLogin() {
//   return (
//     <div className="flex ml-[6px] h-[36px]">
//       <Link to= '/login' className="links">
//       <button
//           type="button"
//           className="bg-[#e1ecf4] hover:bg-[#B3D3EA] text-[#39739d] border-[1px] border-[#b2cbdd] rounded-[4px] px-[10px] w-[70px]"
//         >
//           Log in
//         </button>
//         </Link>
//         <Link to= '/signup' className="links">
//         <button
//           type="button"
//           className="ml-[6px] bg-[#1e95ff] hover:bg-[#0074CC] text-white rounded-[4px] px-[10px] w-[70px]"
//         >
//           Sign up
//         </button>
//         </Link>
//     </div>
//   )
// }

// function AfterLogin() {
//   return (
//     <div className="flex">
//       <div className="flex items-center justify-between gap-4">
//         <Link to="/user">
//           <img
//             src="https://lh3.googleusercontent.com/a/AGNmyxZ3yZ7RupMJPJCP_NwE0ngixsfdYY3OmIqScQmx=k-s32"
//             alt="user-avartar"
//             className="ml-4 mr-4 rounded-md h-[30px] w-[30px]"
//           />
//         </Link>
//       </div>
//     </div>
//   )
// }

function LoginButton() {
  // const [isLogin, setIsLogin] = useState(false)

  return (
    // <>
    // {isLogin && <AfterLogin/>}
    // {!isLogin && <BeforeLogin/>}
    // </>
    <div className="flex ml-[6px] h-[36px]">
      
      <button
          type="button"
          className="bg-[#e1ecf4] hover:bg-[#B3D3EA] text-[#39739d] border-[1px] border-[#b2cbdd] rounded-[4px] px-[10px] w-[70px]"
        >
          <Link to= '/login' className="links">
          Log in
          </Link>
        </button>
        
        
        <button
          type="button"
          className="ml-[6px] bg-[#1e95ff] hover:bg-[#0074CC] text-white rounded-[4px] px-[10px] w-[70px]"
        >
          <Link to= '/signup' className="links">
          Sign up
          </Link>
        </button>
        
    </div>
  )
}

export default LoginButton