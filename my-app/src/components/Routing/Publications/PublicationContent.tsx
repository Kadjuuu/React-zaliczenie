import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./PublicationContent.css";
import { PublicationInfo } from "./PublicationInfo";

const TitleText = styled.p`
  font-weight: bold;
  margin-top: 10px;
  color: rgb(19, 77, 75);
`;

export const PublicationContent: FC = () => {
  return (
    <>
      <div>
        <TitleText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed
          maxime rem quasi porro aperiam hic ratione? Numquam ut quaerat
          nesciunt quam quia quae inventore?{" "}
        </TitleText>
        <PublicationInfo />
      </div>
    </>
  );
};
