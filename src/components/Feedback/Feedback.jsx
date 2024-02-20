import "./style.css";

import Button from "../Button/Button";

import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislikes] = useState(0);

  const thumbsUp = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };
  const thumbsDown = () => {
    setDislikes((prevValue) => {
      return prevValue + 1;
    });
  };
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-wrapper">
        <div className="button-control">
          <Button name="👍" onClick={thumbsUp}/>
          <span className="count">{likes}</span>
        </div>
        <div className="button-control">
          <Button name="👎" onClick={thumbsDown} />
          <span className="count">{dislike}</span>
        </div>
      </div>
      <Button name="Reset results🚮" onClick={handleReset} />
    </div>
  );
}

export default Feedback;