import React from "react";

export default function Hero() {
  return (
    <div className="bg-hero-bg h-[675px] w-full relative  bg-cover bg-center flex flex-col justify-center">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 "
        style={{
          background: `radial-gradient(circle at center, rgba(0, 0,0,0) 0%, rgb(30,30,30) 70%)`,
        }}
      ></div>

      <div className=" z-10 px-8 py-20 flex flex-col gap-7 items-center">
        <p className="herobest text-white text-center">
          B e s t S u s h i I n t o w n
        </p>
        <div className="text-6xl flex flex-col items-center">
          <h2 className="herobigfont font-bold text-semiyelloe">
            Taste the rich flavor of
          </h2>
          <h2 className="herobigfont font-bold text-semiyelloe">
            high quality sushi
          </h2>
        </div>
        <p className="text-center text-white">
          We only use the five star quality for
          <br /> our menu, come and get the richness in <br /> every food we
          serve.
        </p>
        <div className=" navfontList flex items-center gap-2  p-2 w-36 bg-mainyellow ">
          <p className="text-black"> GO TO MENU</p>
          <hr className="border-[1px] w-7 border-black" />
        </div>
      </div>
    </div>
  );
}
