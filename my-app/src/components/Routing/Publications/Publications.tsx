import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { LatestPublications } from "../Publications/LatestPublications";
import "./Publications.css";

import { MainPublicationInfo } from "./MainPublicationInfo";
import { PublicationInfo } from "./PublicationInfo";

const PublicationsWrapper = styled.div`
  display: flex;
  background: ${Colors.white};
  margin-inline: 10%;
  height: 400px;
  margin-top: 2%;
  border: 1px solid black;
  margin-bottom: 2%;
`;

export const Publications: FC = () => {
  return (
    <>
      <PublicationsWrapper>
        <MainPublicationInfo />
        <div>
          <img className="Obrazek1" src="./Media/MainPublication.jpg" alt="" />
        </div>
        <div>
          <LatestPublications />
        </div>
      </PublicationsWrapper>
    </>
  );
};
