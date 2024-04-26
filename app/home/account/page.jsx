import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-screen text-9xl font-bold">
        <FontAwesomeIcon icon={faHouse} className="w-24 h-24" />
      </div>
      <div className="h-screen text-9xl font-bold"></div>
      <div className="h-screen text-9xl font-bold"></div>
      <div className="h-screen text-9xl font-bold"></div>
      <div className="h-screen text-9xl font-bold"></div>
    </div>
  );
};

export default page;
