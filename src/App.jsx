import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {

  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic.out(1, 0.3)"
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div
        id="blue-box"
        className="w-40 h-40 bg-blue-500"
      ></div>
    </div>
  );
};

export default App;