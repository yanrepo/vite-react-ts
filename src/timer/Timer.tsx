import { useEffect, useState } from 'react';

const initCounter = [999, 99, 99, 99];

export default function Timer() {
  const [counter, setCounter] = useState<number[]>(initCounter);

  const getTimeLeft = () => {
    setTimeout(() => {
      let leftSeconds = Math.floor(
        (new Date('January 1, 2023').getTime() -
          new Date().getTime()) /
          1000
      );

      let days = Math.floor(leftSeconds / 86400);
      let hours = Math.floor((leftSeconds % 86400) / 3600);
      let minuts = Math.floor((leftSeconds % 3600) / 60);
      let seconds = Math.floor(leftSeconds % 60);

      setCounter([days, hours, minuts, seconds]);
    }, 1000);
  };

  useEffect(() => {
    getTimeLeft();
  }, [counter]);

  return (
    <div>
      <div>Time left until NEW YEAR:</div>
      <div>days: {counter[0]}</div>
      <div>
        {counter[1] < 10 ? `0${counter[1]}` : counter[1]}:
        {counter[2] < 10 ? `0${counter[2]}` : counter[2]}:
        {counter[3] < 10 ? `0${counter[3]}` : counter[3]}
      </div>
    </div>
  );
}
