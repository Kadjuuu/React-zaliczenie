import { FC } from "react";
import styled from "styled-components";
import React, {ChangeEvent, useState } from "react";
import ReactPaginate from "react-paginate";
import JsonData from "./WorkItems.json";

import { Colors } from "../../../styledHelpers/Colors";
import "./ResumeYourWork.css";

const ResumeYourWorkWrapper= styled.div`
  background: ${Colors.white};
  padding: 5px;
  margin-inline: 10%;
  height: 100%;
  border-radius: 15px;
  margin-top:2%;

`;

const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  margin-left: 50px;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;

  input {
    margin-left: 50%;
    justify-content: center;
    text-align: center;
  }
  h1 {
    color: grey;
  }
  input{
    height: 20px;
  }
  img{
    height: 25px;
    width: 25px;
    margin-inline: 10px;
    
  }
`;




const Followed = styled.div`
  display: flex;
  
  font-size: 20px;
  justify-content: center;
  text-align: center;
  color: #2121e7;
`;

const Items = styled.div`
margin: 30px;
align-items: center;
justify-content: center;

`;

const ItemTitle = styled.p`
font-weight: bold;
margin: 5px;
font-size:25px;
color: #6c6cdb;
`;

const ItemDesc = styled.p`
font-size:20px;
margin-left: 5px;
color: grey;
`;

const Item = styled.div`
border:1px solid black;
margin-bottom: 30px;
padding: 10px;
`;

const AdditionalInfo= styled.div`
margin-left: 5px;
margin-top: 20px;
display: flex;
p{
  margin-inline: 10px;
}
`;

export const ResumeYourWork: FC = () => {

  const [inputText, setInputText] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };


  const [items, setItems] = useState(JsonData.slice(0,30));
  const [pageNumber, setPageNumber] = useState(0)
  
  const ItemsPerPage = 6
  const PagesVisited = pageNumber * ItemsPerPage
  
  const DisplayItems = items
  .slice(PagesVisited, PagesVisited + ItemsPerPage)
  .map(item=> {
  return(
    <Item>
      {item.Title.toLowerCase().includes(inputText.toLowerCase()) && (
        <>
              <ItemTitle>{item.Title}</ItemTitle>
              <ItemDesc>{item.Desc}</ItemDesc>
              <AdditionalInfo><p>{item.Company}</p> <p>{item.Type}</p> <p>{item.LastUpdate}</p></AdditionalInfo>
              </>
      )}
    </Item>
  );
  });
  
  const pageCount = Math.ceil(items.length / ItemsPerPage);

  const changePage = ({ selected }:any) =>{
setPageNumber(selected);
  }

  return (
    <>
    
    <ResumeYourWorkWrapper>
      <Title>
        <h1>Resume your work</h1>
        <input type="text" placeholder="Filter by title..." onChange={inputHandler}/>
        <img src="./Media/search.svg" alt="" />
        <Followed>
          <img src="./Media/settings.svg" alt="" />
          <p>Followed</p>
          <img src="./Media/arrow-down.svg" alt="" />
        </Followed>
      </Title>
      <Items>
        
      {DisplayItems}
      </Items>
      <ReactPaginate
      pageRangeDisplayed={10}
      marginPagesDisplayed={10}
       previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />
       

      </ResumeYourWorkWrapper>
      
    </>
  )
}
