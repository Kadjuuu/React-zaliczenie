import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpaces.css";
import { WorkSpacesIcon2 } from "./IconsWithTitle/WorkSpacesIcon2";
import { WorkSpaceDesc2 } from "./Descriptions/WorkSpaceDesc2";

export const SliderElement2: FC = () => {
  return (
    <div>
      <img className="Obrazek2" src="./Media/Typing.jpg" alt="" />
      <WorkSpacesIcon2 />
      <WorkSpaceDesc2 />
    </div>
  );
};
