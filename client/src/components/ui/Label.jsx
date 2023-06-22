import /* React, */ { useEffect, useState } from 'react'

function Label({ children, inputId, className, errorMsg, inputRef, state }) {
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (state) {
      setErrorMessage(errorMsg);
    } else {
      setErrorMessage('');
    }
  }, [errorMsg, state]);
  return (
    <label htmlFor={inputId} className="flex flex-col my-1">
      {children}
      <input
        id={inputId}
        className={`border border-slate-400 rounded focus:border-blue-800 focus:outline-0 box-border p-2 font-light text-xs ${className}`}
        ref={inputRef}
        type={inputId === 'password' ? 'password' : 'text'}
      />
      <p className="font-light text-xs text-red-600">{errorMessage}</p>
    </label>
  )
}

export default Label