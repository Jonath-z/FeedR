import React from "react";
import { AiFillBank } from "react-icons/ai";
import Feature1 from "../assets/Feature1.svg";
import Feature2 from "../assets/Feature2.svg";
import Feature3 from "../assets/Feature3.svg";
import Container from "./Container";

const Features = () => {
  return (
    <Container className="py-20">
      <div className=" flex flex-col gap-10 px-5 bg-white">
        <p className="text-center font-extrabold text-3xl text-blue">Features</p>
        <div className=" flex flex-col gap-5 pl-2 md:flex-row md:justify-center md:items-center md:gap-5">
          <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature1} className=" w-32 md:w-36" />
            <p className="font-bold text-xl text-center">Authenticity</p>
            <p className="text-slate-400 text-center">Sync your phone contacts to discover what your friends and family are thinking about various experiences. </p>
          </div>

          <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature2} className="w-32 md:w-36" />
            <p className="font-bold text-xl text-center">Trust</p>
            <p className="text-slate-400 text-center">Every review and suggestion is secure, transparent, and unalterable, ensuring an ecosystem of trust</p>
          </div>

          <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature3} alt="message" className="w-32 md:w-36" />
            <p className="font-bold text-xl text-center">Decentralization</p>
            <p className="text-slate-400 text-center">No single authority controls the data. Engage, contribute, and benefit from a network where your voice matters</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
