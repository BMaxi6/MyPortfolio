import React from "react";
import {
  GridDescription,
  GridDescriptionProps,
} from "../GridDescription/GridDescription";
import "./GridFor.css";

const dataShowed: GridDescriptionProps[] = [
  {
    title: "FrontEnd Developer",
    description:
      "Heelo, my name is maxi and I am a FrontEnd Developer from Buenos Aires, Argentina. I like to craft solid user experiences with innovate ideas.",
    ubication: "left",
  },
  {
    title: "FrontEnd Developer",
    description:
      "Heelo, my name is maxi and I am a FrontEnd Developer from Buenos Aires, Argentina. I like to craft solid user experiences with innovate ideas.",
    ubication: "left",
  },
];

export const GridFor = () => {
  return (
          <GridDescription
            ubication={dataShowed[0].ubication}
            title={dataShowed[0].title}
            description={dataShowed[0].description}
          ></GridDescription>
  );
};
