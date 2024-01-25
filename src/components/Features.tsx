import React from 'react'
import { AiFillBank } from "react-icons/ai";
import Feature1 from "../assets/feature1.svg"
import Feature2 from "../assets/feature2.svg"
const Features = () => {
  return (
    <div className=" flex flex-col gap-10 pt-16 px-5 bg-white">
      <p className="text-center font-extrabold text-3xl text-blue">Features</p>
      <div className=" flex flex-col gap-5 pl-2 md:flex-row md:justify-center md:items-center md:gap-5">
        <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature2} className=" w-32 md:w-36"/>
            <p className="font-bold text-xl text-center">For users</p>
            <p className="text-slate-400 text-center">FeedR empowers users to explore personalized and trustworthy recommendations are just a click away </p>
        </div>

        <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature1} className="w-32 md:w-36"/>
            <p className="font-bold text-xl text-center">For Establishments</p>
            <p className="text-slate-400 text-center">The hub for trust and transparent user feedback. Connect with your audience, gain valuable insights, and spotlight your best offerings. </p>
        </div>

        <div className="flex flex-col gap-6 rounded-md justify-center items-center w-96 md:w-72 bg-darkWhite p-5">
            <img src={Feature1} className="w-32 md:w-36"/>
            <p className="font-bold text-xl text-center">Establishments</p>
            <p className="text-slate-400 text-center">The hub for trust and transparent user feedback. Connect with your audience, gain valuable insights, and spotlight your best offerings. </p>
        </div>
      </div>
      
    </div>
  )
}

export default Features
