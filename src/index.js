import React, { useState, useRef, useEffect } from 'react';
import { render } from "react-dom";
import ReactYtWrap from "./lib";

function App() {
  const child = useRef();
  const [start, setStart] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [ready, setReady] = useState(false);
  const [state, setState] = useState("false");
  let durationThread = null

  const onReady = () => {
    setState(child.current.onPlayerStateChange());

    durationThread = setInterval(getDuration, 1000);
  }
  // useEffect(() => {
  //   return () => {
  //     clearInterval(durationThread);
  //   }
  // })
  const onSetCurrentTime = () => {
    child.current.seekTo(start + 10);
    setStart(
      start + 10
    )
  }
  const getDuration = () => {
    setState(child.current.onPlayerStateChange());

    setCurrentTime(
      Math.round(child.current.getDuration())
    )
  }

    return (
      <div style={{ display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center", height: "200vh" }}>
        <h1 style={{ fontFamily: "monospace", color: "brown" }}>React-YT-Wrap NPM Package</h1>
        <ReactYtWrap ref={child} id="fe3tDcbj9z8" style={{ padding: "0 10%" }}
          video={{ autoplay: false, startSeconds: start }}
          onReadyState={onReady}
        />
        <button onClick={onSetCurrentTime}>Add</button>
        {currentTime}
        {state}
      </div>
    )
}


render(<App />, document.getElementById("root"));
