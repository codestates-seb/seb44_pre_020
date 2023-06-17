const Input = ({
  title,
  text,
  placeHolder,
  btnText,
  isBtn,
  height,
  onFocus,
  isBody,
}) => {
  return (
    <div className="w-4/6 shrink-0 border-solid border rounded border-slate-200 p-6 bg-white mb-4 mr-4">
      <h3 className="mb-1 font-semibold text-base">{title}</h3>
      <p className="mb-1 text-xs">{text}</p>
      {isBody ? (
        <textarea
          type="text"
          placeholder={placeHolder}
          className={`${height} w-full border-solid border rounded py-1 pl-2.5 border-slate-400 placeholder:text-slate-300 placeholder:text-sm mb-2.5`}
          onFocus={onFocus}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeHolder}
          className={`${height} w-full border-solid border rounded py-1 pl-2.5 border-slate-400 placeholder:text-slate-300 placeholder:text-sm mb-2.5`}
          onFocus={onFocus}
        ></input>
      )}

      {isBtn && (
        <button className="bg-sky-500 p-2.5 rounded text-white text-sm">
          {btnText}
        </button>
      )}
    </div>
  );
};

export default Input;
