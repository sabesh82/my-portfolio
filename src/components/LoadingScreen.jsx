import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50  text-gray-100 flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-x-0 mt-[-60%] md:mt-[-45.5%] w-full h-[40vh] md:h-auto  object-cover z-[-1] mix-blend-lighten"
      >
        <source src="/videos/blackhole.mp4" type="video/mp4" />
      </video>

      <div className="mb-4 text-3xl md:text-5xl font-mono font-bold z-10">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-600 shadow-[0_0_15px_#3b83f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
