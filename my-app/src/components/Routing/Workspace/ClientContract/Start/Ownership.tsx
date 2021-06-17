import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";

const Ownership = styled.div`
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

const OwnershipDescription = styled.div`
  p {
    color: grey;
    font-size: 25px;
  }
`;

const OwnershipWrapper = styled.div`
  margin: 20px;
  align-items: left;
  img {
    width: 80px;
    height: 80px;
  }
`;

export const StartOwnership: FC = () => {
  return (
    <>
      <OwnershipWrapper>
        <Ownership>
          <img src="./media/CContract2.png" alt="" />
          <p>
            Structure the <b>ownership</b>{" "}
          </p>
          <OwnershipDescription>
            <p>
              Get a clear view of the ownership by looking at the relations
              between individuals and entities.
            </p>
          </OwnershipDescription>
        </Ownership>
      </OwnershipWrapper>
    </>
  );
};
