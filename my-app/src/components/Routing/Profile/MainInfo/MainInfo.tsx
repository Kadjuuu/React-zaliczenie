import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { Random } from "../../../LeftMenu/LeftMenu";
import { IUsersReducer } from "../../../../reducers/usersReducers";
import { IState } from "../../../../reducers";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileWrapper= styled.div`
display: flex;
  background: ${Colors.white};
  padding: 5px;
  margin: 1%;
  height: 50%;
  border-radius: 15px;
`;

const ProfileImageWrapper= styled.div`
display: block;
width: 110px;
text-align: center;
  img{
    height:100px;
    width: 100px;
  }
  p{
    color: #5f5fc7;
    font-size:20px;
    font-weight: bold;
    cursor: pointer;
  }
`;
const PersonalInfo= styled.div`
margin-top: 5px;
margin-left: 30px;
display: block;
font-size:25px;
color: #292929;

h1{
  font-weight: bold;
}
p{
margin-top: 15px;
}
`;

const ContactInfo=styled.div`
display: block;
width: 100%;
text-align: right;
font-size:25px;
img{
  margin-bottom: 50px;
  height: 25px;
  width: 25px;
  cursor: pointer;
}
p{
  margin-right: 30px;
}
`;


const Button = styled.div`

width: 99%;
height: 35%;
button{
  margin-right: 2px;
  position: absolute;
  height: 40px;
  width: 40px;
  background-color: transparent;
  outline: none;
  border: none;
}
`;

const SaveButton = styled.div`
button{
  height: 20px;
  width: 50px;
  margin-right: 10px;
}
`;


export const MainInfo: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  let Info = {
    name: usersList.length !== 0 ? usersList[Random]?.name : "",
    city: usersList.length !== 0 ? usersList[Random]?.address.city : "",
    email: usersList.length !== 0 ? usersList[Random]?.email : "",
    phone: usersList.length !== 0 ? usersList[Random]?.phone : "",
    isInEditMode: false,
  };

  const [edit, setEditMode] = useState(false);
  const changeMode = () => (edit === true ? setEditMode(false) : setEditMode(true));


  const Save = () => {
    let name = (document.getElementById("editName") as HTMLInputElement).value;
    let city = (document.getElementById("editCity") as HTMLInputElement).value;
    let email = (document.getElementById("editEmail") as HTMLInputElement).value;
    let phone = (document.getElementById("editPhone") as HTMLInputElement).value;
  setUpdate([name, city, email, phone])
}


const [updated, setUpdate] = useState<string[]>([]);


  return(
    <>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <img
            className="ProfilePicture"
            src="./Media/profile/ProfileIcon.png"
            alt=""
          />
          <p>See Profile</p>
        </ProfileImageWrapper>
        <PersonalInfo>
          {console.log(updated[0])}
        {edit && <input type="text" id="editName" placeholder={Info.name} />}
        {edit && <input type="text"  id="editCity" placeholder={Info.city} />}
        {!edit &&  <h1 id="name">{updated[0]===undefined? Info.name:updated[0]}</h1>}
        {!edit &&  <p id="city">{updated[1]===undefined? Info.city:updated[1]}</p>}
         
          <p>Partner</p>
        </PersonalInfo>
        <ContactInfo>
<Button>
         <button onClick={() => changeMode()}><img src="./Media/edit-button.svg"  alt="" /></button>
        </Button>
        <SaveButton>
        {edit && <button onClick={() => {Save(); changeMode()}} >Save</button> }
        </SaveButton>
        {edit && <input type="text" id="editEmail" placeholder={Info.email} />}
        {edit && <input type="text" id="editPhone" placeholder={Info.phone} />}
        {!edit && <p id="email">{updated[2]===undefined? Info.email:updated[2]}</p> }
        {!edit && <p id="phone">{updated[3]===undefined? Info.phone:updated[3]}</p>}
        </ContactInfo>
      </ProfileWrapper>
    </>
  );
};
