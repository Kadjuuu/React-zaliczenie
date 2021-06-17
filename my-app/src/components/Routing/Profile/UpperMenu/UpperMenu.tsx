import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

const UpperMenuWrapper= styled.div`
display: flex;
  background: ${Colors.white};
  padding: 5px;
  margin: 10px;
  height: 100%;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  border-bottom: 0.1rem solid black;
  img{
    width: 25px;
    height: 25px;
  }
  p{
    font-weight: bold;
    color: #49496d;
    margin-inline: 15px;
    cursor: pointer;
  }

`;

export const UpperMenu: FC = () => {
  return (
    <>
      <UpperMenuWrapper>
          <img src="./Media/message.png" alt="" />
          <p>Message</p>
          <img src="./Media/document.png" alt="" />
          <p>Create a request</p>
          <img src="./Media/bag.png" alt="" />
          <p>Add to a cluster</p>
          <img src="./Media/x.png" alt="" />
      </UpperMenuWrapper>
    </>
  );
};
