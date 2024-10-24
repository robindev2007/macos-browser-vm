"use client";
import { format } from "date-fns"; // Ensure you're using 'format'
import React, { useEffect, useState } from "react";

function MenuBarRight() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime =
        format(now, "eee MMM dd") + "     " + format(now, "hh:mm a"); // Add spaces manually
      setCurrentTime(formattedTime);
    };

    // Update time immediately on mount
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="text-sm">{currentTime}</p>
    </div>
  );
}

export default MenuBarRight;
