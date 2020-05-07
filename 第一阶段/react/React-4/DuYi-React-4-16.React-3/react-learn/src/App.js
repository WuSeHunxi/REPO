import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";
import 'animate.css'

export default function App() {
  const [show1, setShow1] = useState(true);
  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition appear timeout={2000} key={show1} classNames={{
            exit:"bounceOut",
            enter:"bounceIn"
        }}>
          <h1 className="animated fade">{show1 ? "title1" : "title2"}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button
        onClick={() => {
          setShow1(!show1);
        }}
      >
        切换标题
      </button>
    </div>
  );
}
