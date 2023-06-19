import { useRecoilState } from "recoil";
import { tagsState, tagState, bodyState } from "../../Atoms/atoms";
import { availableTags } from "../../assets/arrays";
import { removeBtn } from "../../assets/img/img";
import TipTap from "../TipTap";

const Input = ({
  title,
  text,
  placeHolder,
  btnText,
  height,
  onFocus,
  isBody,
  isTitle,
  value,
  onChange,
  isTag,
}) => {
  const [tags, setTags] = useRecoilState(tagsState);
  const [tag, setTag] = useRecoilState(tagState);
  const [body, setBody] = useRecoilState(bodyState);

  const handleTagSelection = (e) => {
    setTag(e.target.value);
  };

  const handleAddTag = () => {
    if (!tags.includes(tag) && tag && tags.length < 5) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div className="w-4/6 shrink-0 border-solid border rounded border-slate-200 p-6 bg-white mb-4 mr-4">
      <h3 className="mb-1 font-semibold text-base">{title}</h3>
      <p className="mb-1 text-xs">{text}</p>
      {isBody ? (
        <div>
          <TipTap setBody={setBody} onFocus={onFocus} />
        </div>
      ) : isTitle ? (
        <input
          type="text"
          placeholder={placeHolder}
          className={`${height} w-full border-solid border rounded py-1 pl-2.5 border-slate-400 placeholder:text-slate-300 placeholder:text-sm mb-2.5`}
          onFocus={onFocus}
          value={value}
          onChange={onChange}
        ></input>
      ) : (
        <div>
          <input
            type="text"
            placeholder={placeHolder}
            className={`${height} w-full border-solid border rounded py-1 pl-2.5 border-slate-400 placeholder:text-slate-300 placeholder:text-sm mb-2.5 hidden`}
            value={tags}
          ></input>
          <div className="mb-4 mt-4 border-solid border rounded p-3">
            {tags.map((tag) => (
              <span
                className="mr-4 bg-tag px-1.5 py-1 text-cyan-800 rounded"
                key={tag}
              >
                {tag}
                <button
                  type="button"
                  className="ml-1"
                  onClick={() => handleRemoveTag(tag)}
                >
                  {removeBtn}
                </button>
              </span>
            ))}
          </div>
          <select
            className="mb-6"
            value={tag}
            onChange={handleTagSelection}
            onClick={onFocus}
          >
            <option value="">Select a tag</option>
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      )}

      {isTag ? (
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm"
          onClick={handleAddTag}
        >
          {btnText}
        </button>
      ) : (
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-600 p-2.5 rounded text-white text-sm"
        >
          {btnText}
        </button>
      )}
    </div>
  );
};

export default Input;
