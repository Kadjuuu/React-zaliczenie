import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Publication.css";
import { PublicationContent } from "./PublicationContent";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  
`;

export const Publication: FC = () => {
  return (
    <>
      <StyledDiv>
        <img className="Obrazek3" src="./Media/handsome.jpg" alt="" />
        <PublicationContent />
      </StyledDiv>
    </>
  );
};
