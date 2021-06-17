import { FC } from "react";
import styled from "styled-components";
import "./LeftMenu.css";

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";


const InnerWrapper = styled.div``;

const ProfileWrapper = styled.div`
  width: 250px;
  height: 300px;
  background: ${Colors.white};
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border: 1px solid black;
`;

const Icons = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  padding: 5px;
`;

const SecondMenu = styled.div`
  padding: 10px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Information = styled.div`
  padding-top: 20px;
  text-align: center;
  padding-bottom: 30px;
  padding: 5px;
`;

const LinkWrapper = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  text-align: center;
  margin-left: -30px;
  padding-top: 30px;
`;

export const Random = Math.floor(Math.random() * 8) + 1;

export const LeftMenu: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <InnerWrapper>
      {console.log({ usersList })}
      <ProfileWrapper>
        <Information>
          <img className="Logo" src="./Media/profile/ProfileIcon.png" alt="" />
          <div>{usersList.length !== 0 ? usersList[Random]?.name : ""}</div>
          <div>Job title - Company</div>
        </Information>
        <LinkWrapper>
          <img className="iconLink" src="./Media/network.png" alt="" />
          <a className="textLink" href="">
            Your network
          </a>
          <img className="borderIcon" src="./Media/user-plus.png" alt="" />
        </LinkWrapper>
        <LinkWrapper>
          <img className="iconLink" src="./media/publications.png" alt="" />
          <a className="textLink" href="">
            Your Publications
          </a>
          <img className="borderIcon" src="./Media/plus.png" alt="" />
        </LinkWrapper>
      </ProfileWrapper>
      <Icons>
        <SecondMenu>
        <Link to="/publications">
          <img className="iconLink" src="./Media/publications.png" alt="" />
          <a className="textLink" href="">
            Publications
          </a>
          </Link>
        </SecondMenu>
        <SecondMenu>
        <Link to="/ecosystem">
          <img className="iconLink" src="./Media/ecosystem.png" alt="" />
          <a className="textLink" href="">
            Ecosystem
          </a>
          </Link>
        </SecondMenu>
        <SecondMenu>
          <Link to="/entities">
          <img className="iconLink" src="./Media/entities.svg" alt="" />
          <a className="textLink" href="">
            Entities
          </a>
          </Link>
        </SecondMenu>
      </Icons>
    </InnerWrapper>
  );
};
