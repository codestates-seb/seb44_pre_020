import { Link } from "react-router-dom"

function LoginButton() {
  return (
    <div className="flex ml-[6px] h-[36px]">
      <button
          type="button"
          className="bg-[#e1ecf4] hover:bg-[#B3D3EA] text-[#39739d] border-[1px] border-[#b2cbdd] rounded-[4px] px-[10px] w-[70px]"
        ><Link to= '/login' className="links">
          Log in
          </Link>
        </button>
        <button
          type="button"
          className="ml-[6px] bg-[#1e95ff] hover:bg-[#0074CC] text-white rounded-[4px] px-[10px] w-[70px]"
        >
          Sign up
        </button>
        </div>
  )
}

export default LoginButton