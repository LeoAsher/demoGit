import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setTime(new Date());
    //   console.log(
    //     `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    //   );
    // }, 1000);
    console.log(1)

    return () => {
      // clearInterval(interval);
      console.log(2)
    };
  }, []);

  return (
    <div>
      <span>Timer: </span>
      <span>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</span>
    </div>
  );
};

export default Clock;
// lan1
// lan2
