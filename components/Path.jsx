"use client";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";

const Path = () => {
  const path = usePathname();
  const pages = path.split("/");
  const PATH = pages.map((page, index) => {
    return (
      <div key={index} className="flex gap-3 items-center ">
        {index > 1 ? (
          <FontAwesomeIcon
            icon={faGreaterThan}
            size="xs"
            color="rgb(0, 0, 0)"
          />
        ) : (
          ""
        )}
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </div>
    );
  });
  return <div className="flex gap-3 py-4">{PATH}</div>;
};

export default Path;
