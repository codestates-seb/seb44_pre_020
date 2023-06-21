/* import React from 'react' */

import { useRef, useState } from "react";
import Label from "../../components/ui/Label"
import axios from 'axios';

/* const BASE_URL = process.env.REACT_APP_BASE_URL; */

function SignupForm() {  

  const EMAIL_REGEX = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
  const PW_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;

  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [error, setError] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwRef = useRef(null);


  const onSignUpHandler = async e => {
    e.preventDefault();

    setEmailError(false);
    setPwError(false);
    setError('');

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = pwRef.current.value;

    if (!EMAIL_REGEX.test(email)) {
      setEmailError(true);
      return;
    }
    if (!PW_REGEX.test(password)) {
      setPwError(true);
      return;
    }

/*     const url = `${BASE_URL}/v1/sign-up`; */
    await axios
      .post("/signup", { userName: name, email, password })
      .then(() => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        pwRef.current.value = '';
/*         navigate('/user/login'); */
      })
      .catch(() => {
        setError('An error has occurred');
      });
  };

  return (
    <form className="flex flex-col h-auto border-solid w-72 border-slate-300 bg-white rounded my-4 p-5 justify-between shadow-xl">
      <Label inputRef={nameRef} inputId="name" className="w-60 h-8 mt-1">
        Display name
      </Label>
      <Label
        inputRef={emailRef}
        inputId="email"
        className="w-60 h-8 mt-1"
        errorMsg="This is not a valid email address."
        state={emailError}
      >
        Email
      </Label>
      <Label
        inputRef={pwRef}
        inputId="password"
        className="w-60 h-8 mt-1"
        errorMsg="Please write 8 to 20 characters including upper case, lower case, special character, and number."
        state={pwError}
      >
        <p className="flex justify-between items-end w-60">Password</p>
      </Label>
      <p className="text-xs font-light">
      Passwords must contain at least eight characters, including at least 1 letter and 1 number.
      </p>
      <p className="mt-8 font-light text-xs text-red-600 text-center">{error}</p>
      <button
        type="submit"
        className="w-60 h-10 bg-[#1e95ff] hover:bg-[#0074CC] border border-solid rounded flex justify-center items-center font-normal text-xs text-white mb-8"
        // eslint-disable-next-line react/no-unknown-property
        onClickHandler={onSignUpHandler}
      >
        Sign up
      </button>
      <p className="text-xs font-light">
        By clicking “Sign up”, you agree to our{' '}
        <a href="http://#" className="text-sky-800 hover:text-sky-600">
          terms of service
        </a>
        &nbsp;and acknowledge that you have read and understand our&nbsp;
        <a href="http://#" className="text-sky-800 hover:text-sky-600">
          privacy policy 
        </a>
        &nbsp;and&nbsp;
        <a href="http://#" className="text-sky-800 hover:text-sky-600">
          code of conduct
        </a>
      </p>
    </form>
  )
}

export default SignupForm;