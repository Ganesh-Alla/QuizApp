import React, { useEffect, useState } from 'react';

const Count = ({time}) => {
  const [timeLeft, setTimeLeft] = useState((time - Date.now())/1000); //time is in milliseconds

  useEffect(() => {
    if (timeLeft > 0) {
      let timer;
      if (typeof window !== 'undefined') {
          timer = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }
  }, [timeLeft]); // Depend on timeLeft to update and clear the timer accordingly

  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-semibold" suppressHydrationWarning>
        {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
};

export default Count;
