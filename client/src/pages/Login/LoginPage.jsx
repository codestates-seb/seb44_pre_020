/* import React from 'react' */
import Header from '../../components/header/Header'
import LoginForm from './LoginForm'
import logo from '../../assets/stack.png'
import LoginButtons from './LoginButtons'

function LoginPage() {
  return (
    <>
    <Header />
    <div className='box-border h-screen flex flex-col justify-center items-center bg-[#F1F2F3]'>
      <img src={logo} className="logo w-[48px] h-[37px] mb-[30px]" alt="로고" />
      <LoginButtons/>
      <LoginForm />
    </div>
    </>
  )
}

export default LoginPage