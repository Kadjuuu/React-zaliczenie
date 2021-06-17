import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../../../styledHelpers/Colors";
import { Holdings } from "./Corporate";
import { Start } from "./Start/Start";
import { ResumeYourWork } from "../../ResumeYourWorkWorkspaces/ResumeYourWork"

const WorkSpaceWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
  width: 80%;
  overflow: hidden;
  margin-inline: 10%;
  margin-bottom: 2%;
  background: ${Colors.white};
  border:1px solid black;
`;

const StartWrapper = styled.div`
  align-items: center;
  display: block;
  height: 400px;
  justify-content: center;
  width: 80%;
  overflow: hidden;
  margin-inline: 10%;
  margin-bottom: 2%;
  background: #f3f2f2;
  border:1px solid black;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-weight: normal;
  }
`;

const TopText = styled.div`
  display: flex;
  align-items: center;
  margin-inline: 300px;
  margin-left: 90px;
  margin-top: 10px;
  p {
    color: #6b6b6b;
    font-weight: bold;
    margin-right: 1110px;
    white-space: nowrap;
  }
`;

export const WorkSpaceCorporate: FC = () => {
  return (
    <>
      <WorkSpaceWrapper>
        <Holdings />
      </WorkSpaceWrapper>
      <StartWrapper>
        <TopText>
          <p>Start working on corporate matters</p>
          <p>Hide</p>
        </TopText>
        <MenuWrapper>
          <Start />
        </MenuWrapper>
      </StartWrapper>
      <ResumeYourWork/>
    </>
  );
};
