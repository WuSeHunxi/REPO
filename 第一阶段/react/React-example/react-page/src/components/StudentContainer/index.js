import React, { useState, useEffect } from "react";
import StudentList from "../StudentList/index";
import { getStudents } from "../../services/student";
import Pager from "../Page";

export default function StudentContainer() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [panelNumber, setPanelNumber] = useState(5);
  useEffect(() => {
    (async function () {
      //获取数据需要传递参数
      const resp = await getStudents(page, limit);
      setStudents(resp.findByPage);
      setTotal(resp.cont);
    })();
  }, [page, limit]);
  return (
    <div>
      <StudentList stus={students} />
      <Pager
        current={page}
        limit={limit}
        total={total}
        panelNumber={panelNumber}
        onPageChange={(newPage) => {
          setPage(newPage);
        }}
      />
      <p>
        每页显示的条数：
        <input
          type="number"
          value={limit}
          onChange={(e) => {
            setLimit(parseInt(e.target.value));
          }}
        />
      </p>
      <p>
        最多显示的数字页码：
        <input
          type="number"
          value={panelNumber}
          onChange={(e) => {
            setPanelNumber(parseInt(e.target.value));
          }}
        />
      </p>
    </div>
  );
}
