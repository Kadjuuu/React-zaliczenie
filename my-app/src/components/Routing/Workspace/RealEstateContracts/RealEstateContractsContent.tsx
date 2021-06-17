import { FC } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Colors } from "../../../../styledHelpers/Colors";

const HoldingsWrapper = styled.div`
  margin-top: -130px;
  margin-left: 30px;
  display: flex;

  img {
    height: 100px;
    width: 100px;
  }
`;

const CogWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  img {
    height: 25px;
    width: 25px;
  }
`;
const HoldingsTitle = styled.div`
  width: 100%;
  margin-top: -100px;
  display: flex;
`;

const HoldingsContentWrapper = styled.div`
  max-width: 100%;
  display: block;
  text-align: left;
  width: 100%;
  margin-left: 25px;
  margin-top: 100px;

  h1 {
    font-weight: bold;
    color: #474747;
    font-size: 30px;
    justify-content: left;
  }
  p {
    margin-top: 15px;
    font-size: 25px;
    color: grey;
    width: 100%;
  }
`;

export const HoldingsContent: FC = () => {
  return (
    <>
      <HoldingsWrapper>
        <img src="./media/list.png" alt="" />
        <HoldingsContentWrapper>
          <HoldingsTitle>
            <h1>Real Estate Contracts</h1>
          </HoldingsTitle>
          <p>
            Workspace purpose and a bit of context. This much is needed
            description is here to remind people where they are, if they are new
            or have poor memory.
          </p>
        </HoldingsContentWrapper>
        <CogWrapper>
          <img src="./media/cog.svg" alt="" />
        </CogWrapper>
      </HoldingsWrapper>
    </>
  );
};
