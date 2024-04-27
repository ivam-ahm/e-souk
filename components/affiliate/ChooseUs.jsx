import React from "react";
import { bitmap } from "../../assets";

const ChooseUs = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-16 px-[250px] py-[100px] bg-orange-50">
      <div className="text-5xl font-bold">Why you should choose us?</div>
      <div className="text-lg text-center">
        With lots of unique blocks, you can easily build a pgae wihtout coding{" "}
        <br />
        build you next dream project here
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <img src={bitmap.src} />
        </div>

        <div className="flex-1">
          <div className="flex gap-2">
            <div className="bg-slate-100 w-10 h-10 text-center align-middle rounded-full text-main">
              1
            </div>
            <div>
              <div className="font-semibold text-lg">Easy Booking</div>
              <div>with lost</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-slate-100 rounded-full text-main">2</div>
            <div>
              <div className="font-semibold text-lg">Easy Booking</div>
              <div>with lost</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-slate-100 rounded-full text-main">3</div>
            <div>
              <div className="font-semibold text-lg">Easy Booking</div>
              <div>with lost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
