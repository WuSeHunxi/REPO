import React, { useState, useEffect } from "react";
import StudentList from "../StudentList/index";
import Pager from "../Pager/index";
import { getStudents } from "../../services/students";

export default function StudentContainer() {
  const [stus, setStus] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [panelNum, setPanelNum] = useState(5);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    (async function () {
      const resp = await getStudents(page, limit);
      setStus(resp.findByPage);
      setTotal(resp.cont);
      // console.log(resp);
    })();
  },[page,limit]);
  return (
    <div>
      <StudentList stus={stus}/>
      <Pager current={page}
        limit={limit}
        total={total}
        panelNumber={panelNum}
        onPageChange={(newPage)=>{
          setPage(newPage)
        }}
        ></Pager>
    </div>
  );
}
