import { useEffect, useState } from "react";
import { ImClock } from "react-icons/im";
import Clock  from "./Time.styled";

const Time = () => {
  const [time, setTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });

  useEffect(() => {
    const setTimeHandler = () => {
      setTime({
        hours: String(new Date().getHours()).padStart(2, "0"),
        minutes: String(new Date().getMinutes()).padStart(2, "0"),
        seconds: String(new Date().getSeconds()).padStart(2, "0"),
      });
    }
    setTimeHandler()
    let interval = setInterval(() => {
      setTimeHandler()
    }, 1000);
    clearInterval(interval)
  },[time])

  return (
    <Clock>
      <ImClock/>{time.hours}:{time.minutes}:{time.seconds}
    </Clock>
  );
};

export default Time;


