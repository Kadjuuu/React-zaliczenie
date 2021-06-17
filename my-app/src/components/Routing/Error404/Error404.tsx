import { FC } from "react";
import styled from "styled-components";


const ErrorDiv = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`;
const ErrorDesc = styled.p`
font-weight: bold;
font-size: 100px;
display: flex;
justify-content: center;
align-items: center;
`;



export const Error: FC = () => {
  return (
    <>
    <ErrorDesc>
    Page Not Found
    </ErrorDesc>
    </>
  );
};
