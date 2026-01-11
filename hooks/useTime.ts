import { useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const i = setInterval(update, 60000);
    return () => clearInterval(i);
  }, []);

  return time;
};
