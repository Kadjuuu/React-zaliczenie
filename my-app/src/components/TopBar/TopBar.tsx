import React, { FC, useState } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import { ExpandMenu } from "./ExpandMenu";

// import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from "../../styledHelpers/Colors";



import "./TopBar.css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px;
  display: inline-flex;
  justify-content: space-between;
  background: ${Colors.white};
  border: 1px solid black;
`;
const RightIcon = styled.div`
  margin-right: 10px;
`;

const InputWrapper = styled.div`
img{position:absolute; margin-right:300px}

`;

const ExpandedMenuWrapper = styled.div`
  position: absolute;
  margin-left: 248px;
`;
const Menu = styled.div`
  display: flex;
  position: absolute;
  margin-left: -240px;
`;

export const TopBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOn = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <InnerWrapper>
        <img className="logo" src="./media/logo.png" alt="" />
        {
          <ExpandedMenuWrapper>
            <Menu>
              <img
                onClick={toggleOn}
                className="menuicon"
                src="./Media/arrow-down.svg"
                alt=""
              />
              {isOpen && <ExpandMenu />}
            </Menu>
            <Link to="">
                <img
                className="menuicon"
                src="./Media/house.svg"
                alt=""
              />
            </Link>

          </ExpandedMenuWrapper>
        }

        <InputWrapper>
          <input className="search" placeholder="Search" type="text" />
          
        </InputWrapper>
        <RightIcon>
          <img className="icon" src="./media/house.svg" alt="" />
          <img className="icon" src="./media/comments.svg" alt="" />
          <img className="icon" src="./media/bell.svg" alt="" />
        </RightIcon>
      </InnerWrapper>
    </Wrapper>
  );
};
