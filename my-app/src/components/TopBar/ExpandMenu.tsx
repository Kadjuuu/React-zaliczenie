import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Random } from "../LeftMenu/LeftMenu";

const MenuBar = styled.div`
  position: absolute;
  width: 298px;
  height: 620px;
  background: ${Colors.white};
  margin-top: 10px;
  white-space: nowrap;
  margin-left: -20px;
  margin-top: 56px;
  z-index: 100;
  border:1px solid black;
`;

const MenuContent = styled.ul`
  a {
    color: black;
    text-decoration: none;
    display: flex;
  }
  position: absolute;
  padding-top: 10px;
  width: 100%;
  padding-left: 30px;
  li {
    margin: 10px;
  }
  input {
    height: 20px;
    display: flex;

    width: 80%;
    border-radius: 5px 5px 5px 5px;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 15px;
  }
  p {
    font-weight: bold;
    margin-top: 3%;
  }
`;

const Account = styled.div`
  margin-top: 20px;
  width: 80%;
  border-top: solid grey 2px;
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;
  li{
    display: flex;
  }
`;

const Profile = styled.div`
display: block;
margin-bottom: 30px;
  white-space: nowrap;
  p {
    display: flex;
    margin-top: 25px;
    margin-left: 45px;
    position: absolute;

  }
  img{
    width: 30px;
    height: 30px;
  }
`;

export const ExpandMenu: FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  return (
    <MenuBar>
      <MenuContent>
        <ul>
          <input type="text" value={inputText} onChange={inputHandler} />

          <p>Platform</p>
          <li>
            {/* <img src="./Media/house.png" alt="" /> */}

            {"Home".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/">
                {" "}
                <img src="./media/house.svg" alt="" /> Home
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/publications.png" alt="" /> */}

            {"Publications".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/publications">
                {" "}
                <img src="./media/publications.svg" alt="" />
                Publications
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/people.png" alt="" /> */}

            {"People".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/people">
                {" "}
                <img src="./media/people.svg" alt="" /> People
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/entities.png" alt="" /> */}

            {"Entities".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/entities">
                <img src="./media/entities.svg" alt="" /> Entities
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/administratios.png" alt="" /> */}

            {"Administration"
              .toLowerCase()
              .includes(inputText.toLowerCase()) && (
              <Link to="/administration">
                {" "}
                <img src="./media/administration.svg" alt="" />
                Administration
              </Link>
            )}
          </li>

          <p>Workspaces</p>
          <li>
            {/* <img src="./Media/administratios.png" alt="" /> */}

            {"Client contract"
              .toLowerCase()
              .includes(inputText.toLowerCase()) && (
              <Link to="/client_contact">
                {" "}
                <img src="./media/contract.jpg" alt="" />
                Client contract
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/administratios.png" alt="" /> */}

            {"Supplier contract"
              .toLowerCase()
              .includes(inputText.toLowerCase()) && (
              <Link to="/supplier">
                <img src="./media/contract.jpg" alt="" />
                Supplier contract
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/entities.png" alt="" /> */}

            {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/corporate">
                <img src="./media/entities.svg" alt="" />
                Corporate
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/bell.png" alt="" /> */}

            {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) && (
              <Link to="/group_norms">
                {" "}
                <img src="./media/book.jpg" alt="" />
                Group Norms
              </Link>
            )}
          </li>
          <li>
            {/* <img src="./Media/comments.png" alt="" /> */}

            {"Real estate contracts"
              .toLowerCase()
              .includes(inputText.toLowerCase()) && (
              <Link to="/real_estate_contracts">
                <img src="./media/contract.jpg" alt="" />
                Real estate contracts
              </Link>
            )}
          </li>
          <Account>
            <p>Account</p>
            <Profile>
              <li>
                {/* <img src="./Media/house.png" alt="" /> */}
                
                {"See profile"
                  .toLowerCase()
                  .includes(inputText.toLowerCase()) && (
                  <Link to="/see_profile">
                    <img src="./media/profile/profileicon.png" alt="" />
                    <h1>
                      {usersList.length !== 0 ? usersList[Random]?.name : ""}
                    </h1>
                    <p>
                    See profile
                    </p>
                  </Link>
                  
                )}
              </li>
            </Profile>
            <li>
              {/* <img src="./Media/Privacy.png" alt="" /> */}
              {"Privacy".toLowerCase().includes(inputText.toLowerCase()) && (
                <Link to="/privacy">
                  <img src="./media/privacy.svg" alt="" />
                  Privacy
                </Link>
              )}
            </li>
            <li>
              {/* <img src="./Media/Settings.png" alt="" /> */}
              {"Settings".toLowerCase().includes(inputText.toLowerCase()) && (
                <Link to="/settings">
                  <img src="./media/settings.svg" alt="" />
                  Settings
                </Link>
              )}
            </li>
          </Account>
          <Logout>
            <li>
              <img src="./media/logout.svg" alt="" />
              <a href="Login"> Logout</a>
            </li>
          </Logout>
        </ul>
      </MenuContent>
    </MenuBar>
  );
};
