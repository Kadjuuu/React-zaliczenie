import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpaces.css";
import { WorkSpacesIcon1 } from "./IconsWithTitle/WorkSpacesIcon1";
import { WorkSpaceDesc1 } from "./Descriptions/WorkSpaceDesc1";

export const SliderElement1: FC = () => {
  return (
    <div>
      <img className="Obrazek2" src="./Media/Typing.jpg" alt="" />
      <WorkSpacesIcon1 />
      <WorkSpaceDesc1 />
    </div>
  );
};
