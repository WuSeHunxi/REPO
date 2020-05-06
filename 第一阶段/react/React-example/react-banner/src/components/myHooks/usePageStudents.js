import { useState, useEffect } from "react";
import { getStudents } from "../services/student";

export default function useAllStudents(page = 1, limit = 10) {
  const [resp, setResp] = useState();
  useEffect(() => {
    (async () => {
      resp = await getStudents(page, limit);
      setResp(resp);
    })();
  }, [page, limit]);
  return resp;
}
