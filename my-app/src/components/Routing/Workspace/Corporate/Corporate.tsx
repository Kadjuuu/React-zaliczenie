import { FC } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Colors } from "../../../../styledHelpers/Colors";
import { HoldingsContent } from "./CorporateContent";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;

  img {
    height: 50%;
    width: 100%;
  }
`;

export const Holdings: FC = () => {
  return (
    <>
      <ContentWrapper>
        <ImageWrapper>
          <img src="./Media/Typing.jpg" alt="" />
        </ImageWrapper>
        <HoldingsContent />
      </ContentWrapper>
    </>
  );
};
