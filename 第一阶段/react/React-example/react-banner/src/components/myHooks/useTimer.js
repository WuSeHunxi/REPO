import { useEffect } from "react";

export default function Timer(func, duration) {
  useEffect(() => {
    const timer = setInterval(func, duration);
    return () => {
      clearInterval(timer);
    };
  }, []);
}
