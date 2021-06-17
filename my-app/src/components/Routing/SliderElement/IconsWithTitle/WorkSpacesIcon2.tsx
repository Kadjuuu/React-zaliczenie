import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./WorkSpacesIcon.css";
import { Colors } from "../../../../styledHelpers/Colors";

const ImgStyled = styled.div`
  background: ${Colors.white};

  display: flex;
img{border:1px solid black}
`;

const TitleStyled = styled.div`
  margin-top: 20px;
  margin-left: 200px;
  font-size: 20px;
  color: rgb(19, 77, 75);
`;

export const WorkSpacesIcon2: FC = () => {
  return (
    <>
      <ImgStyled>
        <img
          className="WorkspacePicture"
          src="./Media/list.png"
          alt=""
        />
      </ImgStyled>
      <TitleStyled>
        <p>Supplier contract</p>
      </TitleStyled>
    </>
  );
};
