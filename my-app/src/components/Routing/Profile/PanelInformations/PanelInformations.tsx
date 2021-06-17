import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { IUsersReducer } from "../../../../reducers/usersReducers";
import { IState } from "../../../../reducers";
import { useSelector } from "react-redux";
import { EditText, EditTextarea } from 'react-edit-text';

const PanelInfoWrapper = styled.div`
  background: ${Colors.white};
  padding: 5px;
  margin: 2%;
  height: 100%;
  border-top: 0.1rem solid grey;

  h1 {
    color: #5e666e;
    font-size: 30px;
    font-weight: bold;
  }
`;

const InfoInsides = styled.div`
  font-size: 25px;
  font-weight: normal;
  padding-top: 15px;
  h2 {
    margin-top: 25px;
    margin-left: 5px;
    color: #6d6969;
  }
  h3 {
    margin-top: 25px;
    margin-left: 5px;
    color: #2b5a97;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
  }
  input {
    background: #ebedee;
    border-radius: 15px;
    width: 100%;
  }
  img {
    height: 50px;
  }
`;

const Correspondants = styled.div`
  margin-top: 10px;
  display: flex;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  padding: 5px;
  font-size: 20px;
  background-color: #ebedee;
  color: #145864;
  border-radius: 10px;
  text-align: center;
  p {
    
  }
`;

const Actions = styled.div`
  display: flex;
  position: absolute;
  margin-left: 47%;
  img {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }
  p {
    margin-right: 15px;
    margin-left: 35px;
    cursor: pointer;
  }
`;

const Random1 = Math.floor(Math.random() * 8) + 1;
const Random2 = Math.floor(Math.random() * 8) + 1;

export const PanelInfo: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <>
      <PanelInfoWrapper>
        <h1>Panel Informations</h1>
        <InfoInsides>
          <h2>Hourly fee</h2>
          <p>610€/hour (Negociated)</p>

          <h2>Terms & conditions</h2>
          <p>Monthly 10k€ retainer - see with Jeanny Smith</p>

          <input id="file-input" type="file" />

          <h3>Services & projects</h3>
          <p> Corporate M&A and international acquisitions </p>

          <h3>Internal correspondants</h3>
          <Correspondants>
            <img src="./Media/profile/ProfileIcon.png" alt="" />
            <p>{usersList.length !== 0 ? usersList[Random1]?.name : ""}</p>
            <Actions>
              <img src="./Media/message.png" alt="" />
              <p>Message</p>
              <img src="./Media/people.svg" alt="" />
              <p>Profile</p>
            </Actions>
          </Correspondants>
          <Correspondants>
            <img src="./Media/profile/ProfileIcon.png" alt="" />
            <p>{usersList.length !== 0 ? usersList[Random2]?.name : ""}</p>
            <Actions>
              <img src="./Media/message.png" alt="" />
              <p>Message</p>
              <img src="./Media/people.svg" alt="" />
              <p>Profile</p>
            </Actions>
          </Correspondants>
        </InfoInsides>
      </PanelInfoWrapper>
    </>
  );
};
