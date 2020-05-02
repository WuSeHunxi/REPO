import React from "react";
import "./Pager.css";

export default function Page(props) {
  const pageNumber = getPageNumber(props);
  if (pageNumber === 0) {
    return null;
  }
  //处理页码
  const min = getMinNumber(props);
  const max = getMaxNumber(min, pageNumber, props);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        key={i}
        onClick={() => {
          toPage(i, props);
        }}
        className={i === props.current ? "item active" : "item"}
      >
        {i}
      </span>
    );
  }
  return (
    <>
      <span
        onClick={() => {
          toPage(1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        首页
      </span>
      <span
        onClick={() => {
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        上一页
      </span>
      {/* 数字页码 */}
      {numbers}
      <span
        onClick={() => {
          toPage(
            props.current + 1 > pageNumber ? pageNumber : props.current + 1,
            props
          );
        }}
        className={props.current === pageNumber ? "item disabled" : "item"}
      >
        下一页
      </span>
      <span
        onClick={() => {
          toPage(pageNumber, props);
        }}
        className={props.current === pageNumber ? "item disabled" : "item"}
      >
        尾页
      </span>
      <span className="current">{props.current}</span>/<span>{pageNumber}</span>
    </>
  );
}

function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
}

/**
 * 跳转到某一页
 * @param {*} target
 * @param {*} props
 */
function toPage(target, props) {
  if (target === props.current) {
    return;
  }
  props.onPageChange && props.onPageChange(target);
}

function getMinNumber(props) {
  var min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}

function getMaxNumber(min, pageNumber, props) {
  var max = min + props.panelNumber - 1;
  if (max > pageNumber) {
    max = pageNumber;
  }
  return max;
}
