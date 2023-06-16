const Input = ({ title, text, placeHolder, btnText, isBtn, height }) => {
  return (
    <div className="border-solid border rounded border-slate-200 p-6 bg-white mb-4">
      <h3 className="mb-1 font-semibold text-base">{title}</h3>
      <p className="mb-1 text-xs">{text}</p>
      <input
        type="text"
        placeholder={placeHolder}
        className={`${height} w-full border-solid border rounded py-1 pl-2.5 border-slate-400 placeholder:text-slate-300 placeholder:text-sm mb-2.5`}
      ></input>
      {isBtn && (
        <button className="bg-sky-500 p-2.5 rounded text-white text-sm">
          {btnText}
        </button>
      )}
    </div>
  );
};

export default Input;
