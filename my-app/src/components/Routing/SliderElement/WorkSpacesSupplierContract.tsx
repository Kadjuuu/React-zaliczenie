import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpaces.css";
import { WorkSpacesIcon4 } from "./IconsWithTitle/WorkSpacesIcon4";
import { WorkSpaceDesc4 } from "./Descriptions/WorkSpaceDesc4";

export const SliderElement4: FC = () => {
  return (
    <div>
      <img className="Obrazek2" src="./Media/Typing.jpg" alt="" />
      <WorkSpacesIcon4 />
      <WorkSpaceDesc4 />
    </div>
  );
};
