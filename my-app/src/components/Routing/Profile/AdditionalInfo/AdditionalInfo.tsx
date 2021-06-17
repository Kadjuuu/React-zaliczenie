import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";

const AdditionalInfoWrapper = styled.div`
  background: ${Colors.white};
  padding: 5px;
  margin-top: 30px;
  border-top: 0.1rem solid grey;
  height: 100%;
  img {
    position: absolute;
    display: flex;
    height: 25px;
    cursor: pointer;
    width: 25px;
    margin-left: 66.5%;
  }
`;

const Elements = styled.div`
  h1 {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333333;
  }
`;

const PersonalElement = styled.div`
  display: flex;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  p {
    display: block;
    padding: 5px;
    font-size: 20px;
    background-color: #000000;
    color: #fcfcfc;
    border-radius: 10px;
  }
`;

const EditButton = styled.div`
button{
  outline: none;
background-color: transparent;
border: none;

}

`;

const SaveButton = styled.div`
button{
  height: 20px;
  width: 50px;
  margin-right: 10px;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
}
`;



export const AdditionalInfo: FC = () => {

  const Save = () => {
    let Expertise1 = (document.getElementById("Expertise1") as HTMLInputElement).value;
    let Speciality1 = (document.getElementById("Speciality1") as HTMLInputElement).value;
    let Speciality2 = (document.getElementById("Speciality2") as HTMLInputElement).value;
    let Admission1 = (document.getElementById("Admission1") as HTMLInputElement).value;
    let Admission2 = (document.getElementById("Admission2") as HTMLInputElement).value;
    let County1 = (document.getElementById("County1") as HTMLInputElement).value;
  setUpdate([Expertise1, Speciality1, Speciality2, Admission1, Admission2, County1])
  }
  
  const [updated, setUpdate] = useState<string[]>([]);

  const [edit, setEditMode] = useState(false);
  const changeMode = () => (edit === true ? setEditMode(false) : setEditMode(true));
  
  return (
    <>
      <AdditionalInfoWrapper>
        <EditButton>
        <button onClick={() => changeMode()}><img src="./Media/edit-button.svg" alt="" /></button>
        </EditButton>
        <Elements>
        <SaveButton>
        {edit && <button onClick={() => {Save(); changeMode()}} >Save</button> }
        </SaveButton>
          <h1>Expertise</h1>
          <PersonalElement>
          
        {edit && <input type="text" id="Expertise1" placeholder="Mergers and acquisition" />}
        {!edit &&  <p>{updated[0]===undefined? "Mergers and acquisition":updated[0]}</p> }
          
           
          </PersonalElement>
          <h1>Specialities</h1>
          <PersonalElement>
          {edit && <input type="text" id="Speciality1" placeholder="Cross border operation" />}
          {!edit &&  <p>{updated[1]===undefined? "Cross border operation":updated[1]}</p> }
          </PersonalElement>
          <PersonalElement>
          {edit && <input type="text" id="Speciality2" placeholder="Transaction over 500M€/$" />}
          {!edit &&  <p>{updated[2]===undefined? "Transaction over 500M€/$":updated[2]}</p> }
          
          </PersonalElement>
          <h1>Admission to practice law</h1>
          <PersonalElement>
          {edit && <input type="text"  id="Admission1" placeholder="Paris bar association" />}
          {!edit &&  <p>{updated[3]===undefined? "Paris bar association":updated[3]}</p> }
          </PersonalElement>
          <PersonalElement>
          {edit && <input type="text"  id="Admission2" placeholder="Tunisian bar association" />}
          {!edit &&   <p>{updated[4]===undefined? "Tunisian bar association":updated[4]}</p> }
          </PersonalElement>
          <h1>Counties</h1>
          <PersonalElement>
          {edit && <input type="text"  id="County1" placeholder="Tunisia" />}
          {!edit &&   <p>{updated[5]===undefined? "Tunisia":updated[5]}</p> }
          </PersonalElement>
        </Elements>
      </AdditionalInfoWrapper>
    </>
  );
};
