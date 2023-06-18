const Guide = ({ img, title, text1, text2 }) => {
  return (
    <div className="border-solid border rounded-sm border-slate-200 mb-4 bg-white flex flex-col">
      <div className="border-solid border-b border-slate-200 p-3 bg-ask-3 shrink-0 basis-1/5">
        {title}
      </div>
      <div className="flex items-center m-4 flex-auto">
        <div>{img}</div>
        <div className="text-xs ml-3">
          <p className="mb-3">{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
