const Title = ({ title, date, views }) => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <h2 className="text-3xl font-mormal">
          {/* (ex Why Javascript is so weird?) */}
          {title}
        </h2>
        <button className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm">
          Ask Question
        </button>
      </div>
      <div className="flex border-b border-solid border-slate-300 pb-2 ">
        <div className="flex mr-4 mb-2 items-center">
          <p className="mr-2 text-sm text-slate-500">Asked</p>
          <p className="text-xs">
            {/* (ex 3 years, 11 months ago) */}
            {date}
          </p>
        </div>
        <div className="flex mr-4 mb-2 items-center">
          <p className="mr-2 text-sm text-slate-500">Modified</p>
          <p className="text-xs">
            {/* (ex today) */}
            {date}
          </p>
        </div>
        <div className="flex mr-4 mb-2 items-center">
          <p className="mr-2 text-sm text-slate-500">Viewed</p>
          <p className="text-xs">
            {/* (ex 27k times) */}
            {views}
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;
