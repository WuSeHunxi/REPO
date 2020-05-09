import React from "react";
import loginInfo from "./loginInfo";

export default function Login() {
  return (
    <div>
      <button
        onClick={() => {
          loginInfo.login();
        }}
      >
        登录
      </button>
    </div>
  );
}
