"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function HomePage() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isYes, setIsYes] = useState(false);

  const moveButton = () => {
    const padding = 20;
    const randomX = Math.random() * (window.innerWidth - 100) + padding;
    const randomY = Math.random() * (window.innerHeight - 50) + padding;
    setNoPos({ x: randomX, y: randomY });
    setHasMoved(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100 p-4">
      <div className="w-full relative max-w-md bg-white p-8 rounded-xl shadow-lg ">
        {isYes && (
          <button
            onClick={() => {
              setIsYes(false);
              setHasMoved(false);
            }}
            className="block text-start text-gray-500 mb-2 hover:text-black cursor-pointer"
          >
            ← Go back
          </button>
        )}
        <video
          key={isYes ? "happy-vid" : "ask-vid"}
          src={
            isYes
              ? "/videos/Video_Generated_For_Minions.mp4"
              : "/videos/Minions_Valentine_Request_Video.mp4"
          }
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full shadow-md"
        >
          Your browser does not support the video tag.
        </video>

        <h1 className="flex mt-8 justify-center items-center text-xl text-black font-bold min-h-15]">
          {isYes
            ? "Yeheeeeyyyyyy, I love you so much UWUUUUUUUU.."
            : "Can you be my Valentine? Uwu"}
          <FaHeart className="ml-2 text-red-500 text-2xl animate-pulse" />
        </h1>

        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setIsYes(true)}
            className="p-4 bg-green-500 text-white rounded-lg px-8 font-bold hover:scale-110 transition-transform z-10"
          >
            YES
          </button>

          <button
            onMouseEnter={moveButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveButton();
            }}
            style={
              hasMoved
                ? {
                    position: "fixed",
                    left: `${noPos.x}px`,
                    top: `${noPos.y}px`,
                    zIndex: 999,
                  }
                : { position: "relative" }
            }
            className="p-4 bg-red-500 text-white rounded-lg px-8 font-bold transition-all duration-150 touch-none"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
