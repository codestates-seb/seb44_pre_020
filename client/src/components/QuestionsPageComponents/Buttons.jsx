import {
  IoCaretUpCircleOutline,
  IoCaretDownCircleOutline,
} from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { patchRequest } from "../../api/api";
import { useState } from "react";

const Buttons = ({
  voteState,
  setVoteState,
  acceptedState,
  setAcceptedState,
  isQuestion,
}) => {
  // 10. 투표수 Patch 요청 (vote가 따로있다고 생각했을때-> 답변에 딸려있는게 아닌.)
  // 11. 채택여부 Patch 요청

  const incrementCount = (e) => {
    e.preventDefault();

    const voteData = {
      count: voteState + 1, // count는 기존 카운트 데이터(이전에 get으로 받아온)
      content_id: "", //params
      user_id: "",
    };

    patchRequest(
      "https://9eafe059-f15b-42b9-8571-1c6297da44fa.mock.pstmn.io/",
      voteData
    );

    setVoteState((prevState) => prevState + 1);
  };

  const decrementCount = (e) => {
    e.preventDefault();

    // 여기에 만약 count가 0보다 작지않다면 조건문 추가

    const voteData = {
      count: voteState - 1, // count는 기존 카운트 데이터(이전에 get으로 받아온)
      content_id: "", //params
      user_id: "",
    };

    patchRequest(
      "https://9eafe059-f15b-42b9-8571-1c6297da44fa.mock.pstmn.io/",
      voteData
    );

    setVoteState((prevState) => prevState - 1);
  };

  const isAcceptedHandler = (e) => {
    e.preventDefault();

    const acceptedData = {
      acceptedData: !acceptedState, // 기존 accepted 데이터
    };

    patchRequest(
      "https://9eafe059-f15b-42b9-8571-1c6297da44fa.mock.pstmn.io/",
      acceptedData
    );

    setAcceptedState((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center pr-4">
      <button onClick={incrementCount} className="text-5xl mb-1">
        <IoCaretUpCircleOutline />
      </button>
      <div className="mb-1 text-xl font-medium">{voteState}</div>
      <button onClick={decrementCount} className="text-5xl mb-2">
        <IoCaretDownCircleOutline />
      </button>
      <button className="text-xl text-slate-400 mb-2">
        <FiBookmark />
      </button>
      {!isQuestion &&
        (acceptedState ? (
          <button
            onClick={isAcceptedHandler}
            className="text-check mb-2 text-2xl"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={isAcceptedHandler}
            className="text-slate-200 mb-2 text-2xl"
          >
            <FaCheck />
          </button>
        ))}

      {/*채택여부 데이터 이용해 조건부 렌더링*/}
      <button className="text-xl text-slate-400">
        <MdHistory />
      </button>
    </div>
  );
};

export default Buttons;
