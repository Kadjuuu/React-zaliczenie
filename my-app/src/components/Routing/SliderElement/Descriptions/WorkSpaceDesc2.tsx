import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpaceDesc.css";

const DescStyle = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  p {
    margin: 20px;
  }
`;

const DateStyle = styled.div`
  color: grey;
  margin-left: 15px;
`;

const Random = Math.floor(Math.random() * 200) + 30;
const RandomUpdate = Math.floor(Math.random() * 10) + 2;

export const WorkSpaceDesc2: FC = () => {
  return (
    <>
      <DescStyle>
        <img src="./Media/house.png" alt="" /> <p>Contract</p>{" "}
        <img src="./Media/arrow-down.png" alt="" />{" "}
        <img src="./Media/people.png" alt="" /> <p>{Random}</p>
      </DescStyle>
      <DateStyle>Last update {RandomUpdate} days ago</DateStyle>
    </>
  );
};
