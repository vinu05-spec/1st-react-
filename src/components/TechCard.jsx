import React from "react";
// import TechCard from "../components/TechCard.css"

const TechCard = ({ name, desc, image }) => {
  return (
    <div className="bg-black  h-full w-full p-4 rounded-2xl hover:scale-95 transition duration-300 ease-in-out">
      <div className=" bg-black rounded-sm">
        <img src={image} className="rounded-xl" />
      </div>
      <h1 className=" text-white text-center text-2xl">{name}</h1>
      <p className="text-white">{desc}</p>
    </div>
  );
};

export default TechCard;
