/* import React from 'react' */

function LoginForm() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[278px] bg-white shadow-md rounded p-[24px] mb-[24px]">
        <form>
          <div className="mt-[6px] mb-[6px] mx-0 h-[60px]">
            <label htmlFor="email" className="block font-medium mt-[6px] mb-[6px] px-[2px]">Email:</label>
              <input type="text" id="email" name="email" placeholder="이메일 주소를 입력하세요" className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mt-[6px] mb-[6px] mx-0 h-[60px]">
            <label htmlFor="password" className="block font-medium mt-[6px] mb-[6px] px-[2px]">Password:</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" className="w-full px-4 py-2 border border-gray-300 rounded" />            
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm