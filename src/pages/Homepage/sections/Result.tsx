import MatchResult from "components/MatchResult";
import React from "react";

const Result = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/home/result-back.png)`,
      }}
    >
      <div className="container-home py-[86px]">
        <h3 className="uppercase text-center text-5xl">
          Latest {" "}
          <span className="text-[#008A81] font-zuumeroughbold text-5xl">
            Match Result
          </span>
        </h3> 
        <div className="mt-[76px] flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center lg:justify-between flex-wrap">
          <MatchResult />
          <MatchResult />
        </div>
      </div>
    </div>
  );
};

export default Result;
