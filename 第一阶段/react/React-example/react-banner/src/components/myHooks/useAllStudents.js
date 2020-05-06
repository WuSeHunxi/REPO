import { useEffect, useState } from "react";
import { getAllStudents } from "../services/student";

//不是组件，就是一个副作用函数
export default function useAllStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const stus = await getAllStudents();
      setStudents(stus);
    })();
  }, []);
  return students;
}
