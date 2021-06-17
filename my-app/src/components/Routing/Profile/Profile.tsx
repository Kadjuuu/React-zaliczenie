import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { MainInfo } from "./MainInfo/MainInfo";
import { UpperMenu } from "./UpperMenu/UpperMenu"
import { AdditionalInfo } from "./AdditionalInfo/AdditionalInfo"
import { PanelInfo } from "./PanelInformations/PanelInformations"
import { Proposals } from "./Proposals/Proposals" 
import { InternalReviews } from "./InternalReviews/InternalReviews"
import { AmmountOfFees } from "./AmmountOfFees/AmmountOfFees"

const ProfileWrapper= styled.div`
  background: ${Colors.white};
  padding: 5px;
  margin-inline: 10%;
  height: 100%;
  border:1px solid black;

`;

export const Profile: FC = () => {
  return (
    <>
      <ProfileWrapper>
        <UpperMenu/>
          <MainInfo/>
          <AdditionalInfo/>
          <PanelInfo/>
          <Proposals/>
          <InternalReviews/>
          <AmmountOfFees/>
      </ProfileWrapper>
    </>
  );
};
