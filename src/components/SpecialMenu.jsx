import React from "react";
import sushi1 from "../assets/heropageIMG/sushi1.svg";
import sushi2 from "../assets/heropageIMG/sushi2.svg";
import sushi3 from "../assets/heropageIMG/sushi3.svg";
import star from "../assets/heropageIMG/Star.svg";
import "../App.css";

function SpecialMenu() {
  return (
    <div className="bg-darktheme p-10 items-center flex flex-col">
      <div className="flex flex-col gap-4 text-center my-5">
        <p className="herobest text-white">Special Menu</p>
        <h3 className="herobigfont text-2xl font-bold text-semiyelloe">
          Today's Special
        </h3>
        <p className="text-sm text-white">
          Special menu oftenly comes different everyday,
          <br /> this is our special food for today
        </p>
      </div>
      <ul className="flex cardsushi">
        <li
          style={{ boxShadow: "0 1px 5px  rgba(140, 120, 69, 1)" }}
          className="flex flex-col"
        >
          <img className="w-auto h-48" src={sushi1} alt="" />
          <div className="p-4 gap-4 flex flex-col ">
            <h4 className="herobigfont text-semiyelloe font-bold ">
              Tuna Sushi
            </h4>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Etiam
              <br /> ut imperdiet lectus.
            </p>
            <div className="flex">
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
            </div>
          </div>
        </li>
        <li
          style={{ boxShadow: "0 1px 5px  rgba(140, 120, 69, 1)" }}
          className="flex flex-col shadow-sm shadow-mainyellow"
        >
          <img className="w-auto h-48" src={sushi2} alt="" />
          <div className=" p-4">
            <h4 className="herobigfont font-bold text-semiyelloe ">
              Tuna Sushi
            </h4>
            <p className="">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Etiam
              <br /> ut imperdiet lectus.
            </p>
            <div className="flex">
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
            </div>
          </div>
        </li>
        <li
          style={{ boxShadow: "0 1px 5px  rgba(140, 120, 69, 1)" }}
          className="flex flex-col shadow-sm shadow-mainyellow"
        >
          <img className="w-auto h-48" src={sushi3} alt="" />
          <div>
            <h4>Tuna Sushi</h4>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Etiam
              <br /> ut imperdiet lectus.
            </p>
            <div className="flex">
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SpecialMenu;
