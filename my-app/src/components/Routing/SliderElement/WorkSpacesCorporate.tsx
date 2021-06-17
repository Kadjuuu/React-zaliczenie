import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpaces.css";
import { WorkSpacesIcon3 } from "./IconsWithTitle/WorkSpacesIcon3";
import { WorkSpaceDesc3 } from "./Descriptions/WorkSpaceDesc3";

export const SliderElement3: FC = () => {
  return (
    <div>
      <img className="Obrazek2" src="./Media/CorporateBackground.jpg" alt="" />
      <WorkSpacesIcon3 />
      <WorkSpaceDesc3 />
    </div>
  );
};
