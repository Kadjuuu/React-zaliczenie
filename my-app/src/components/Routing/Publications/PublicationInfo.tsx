import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./PublicationInfo.css";
import { Random } from "../../LeftMenu/LeftMenu";

import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 10%;
  white-space: nowrap;
  margin-left: 100px;
  img {
    height: 20px;
  }
`;

export const PublicationInfo: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <>
      <StyledInfo>
        <p>7 Jan, 2020 </p>{" "}
        <img
          className="ProfilePicture"
          src="./Media/profile/ProfileIcon.png"
          alt=""
        />{" "}
        <p> {usersList.length !== 0 ? usersList[Random]?.name : ""} </p>
      </StyledInfo>
    </>
  );
};
