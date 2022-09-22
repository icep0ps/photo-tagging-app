import React from 'react';
import Timer from './Timer';

const FeedbackBar = ({ setCompletedTime, setUserTime }) => {
  return (
    <div className="feedback-bar">
      <Timer setUserTime={setUserTime} setCompletedTime={setCompletedTime} />
      <div className="charators">
        <div className="charator">
          <span className="status" id="bird"></span>
          <p>Black Bird</p>
        </div>
        <div className="charator">
          <span className="status" id="wipeout"></span>
          <p>Wiped out</p>
        </div>
        <div className="charator">
          <span className="status" id="sky"></span>
          <p>sky diver</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBar;
