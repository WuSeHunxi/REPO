import React, { useState } from "react";
// import "./App.css";
import "animate.css";
import uuid from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
  const [tasksList, setTasksList] = useState([
    { id: uuid(), name: "任务1" },
    { id: uuid(), name: "任务2" },
  ]);

  return (
    <div>
      <TransitionGroup component="ul" className="abc">
        {tasksList.map((it) => (
          <CSSTransition
            timeout={1000}
            key={it.id}
            classNames={{
              enter: "bounceIn",
              exit: "bounceOut",
            }}
          >
            <li className="animated fast">
              {it.name}
              <button
                onClick={() => {
                  var newTasks = tasksList.filter((item) => {
                    return item.id !== it.id;
                  });
                  setTasksList(newTasks);
                }}
              >
                删除
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          var name = window.prompt("新任务的名称");
          setTasksList([...tasksList, { id: uuid(), name: name }]);
        }}
      >
        添加新任务
      </button>
    </div>
  );
}
