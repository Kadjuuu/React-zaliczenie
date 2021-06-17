import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Colors } from "../../../styledHelpers/Colors";
import { SliderElement1 } from "../SliderElement/WorkSpaces";
import { SliderElement2 } from "../SliderElement/WorkSpacesClientContract";
import { SliderElement3 } from "../SliderElement/WorkSpacesCorporate";
import { SliderElement4 } from "../SliderElement/WorkSpacesSupplierContract";

const StyledSlider = styled(Slider)`
  display: block;
  align-items: center;
  margin: auto;
  width: 100%;
  overflow: hidden;
  .slick-list {
    width: 100%;
  }
  .slick-track {
    display: flex;
    align-items: center;
    > div {
      width: 250px;
    }
  }
`;

const SliderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  
  overflow: hidden;
  margin-inline: 10%;
  background: ${Colors.white};
  border:1px solid black;;
 
`;

const SingleElement = styled.div`
  margin: 30px;
  height: 300px;
  width: 88%;
  background: ${Colors.white};
  border:1px solid black;
  display: flex;
  
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: false,
};

export const WorkSpaces: FC = () => {
  return (
    <>
      <SliderWrapper>
        <StyledSlider {...settings}>
          <div>
            <SingleElement>
              <SliderElement1 />
            </SingleElement>
          </div>
          <div>
            <SingleElement>
              <SliderElement2 />
            </SingleElement>
          </div>
          <div>
            <SingleElement>
              <SliderElement3 />
            </SingleElement>
          </div>
          <div>
            <SingleElement>
              <SliderElement4 />
            </SingleElement>
          </div>
        </StyledSlider>
      </SliderWrapper>
    </>
  );
};
