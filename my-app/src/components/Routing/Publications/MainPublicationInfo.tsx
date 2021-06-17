import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./LatestPublications.css";
import { PublicationInfo } from "./PublicationInfo";

const StyledShownPublicationInfo = styled.div`
  position: absolute;
  font-weight: bold;
  margin-top: 240px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  width: 15%;
  color: white;
  font-size: 20px;
`;



export const MainPublicationInfo: FC = () => {
  return (
    <>
      <StyledShownPublicationInfo>
       
      </StyledShownPublicationInfo>
  
    </>
  );
};
