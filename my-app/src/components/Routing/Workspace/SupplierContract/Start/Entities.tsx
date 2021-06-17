import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";

const Entities = styled.div`
  display: block;
  height: 280px;
  padding: 20px;
  width: 300px;
  overflow: hidden;
  margin: 2%;
  background: white;
  border:1px solid black;
p{
    margin-top: 30px;
    color: #444494;
font-size: 30px;
}
b{
    font-weight: bold;
}
`;

const EntitiesDescription = styled.div`
p{
    color: grey;
    font-size: 25px;
}
`;

const EntitiesWrapper = styled.div`
margin:20px;
align-items: left;
img{
    width: 80px;
    height: 80px;
}
`;


export const StartEntities: FC = () => {
  return (
    <>
    <EntitiesWrapper>
    <Entities>
        <img src="./media/CContract.png" alt="" />
        <p>Explore your <b>entities</b> </p>
        <EntitiesDescription>

<p>Take a few minutes to look at the most important elements and specificities of your entities</p>
        </EntitiesDescription>
    </Entities>
    </EntitiesWrapper>
    </>
  );
};
