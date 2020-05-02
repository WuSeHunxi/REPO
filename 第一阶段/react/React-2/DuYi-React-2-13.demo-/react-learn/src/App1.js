import React from "react";
import TwoLayout from "./components/common/TwoLayout";

export default function AppLayout() {
  return (
    <div>
      <TwoLayout
        gap={50}
        left={<div style={{ border: "2px solid #f0f" }}>左侧栏</div>}
        right={
          <div
            style={{
              border: "2px solid #ff0",
            }}
          >
            右侧栏
          </div>
        }
      ></TwoLayout>
    </div>
  );
}
