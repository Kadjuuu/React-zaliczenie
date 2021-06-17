import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { EntityElementsMosaic } from "./EntityElementsMosaic";
import { EntityElementsList } from "./EntityElementsList";
import { Filter } from "./Filters";

const WrappedEntities = styled.div`
  display: block;
  background: ${Colors.white};
  margin: 2%;
  margin-top: 2%;
  border: 1px solid black;
`;

const WrapperSettings = styled.div`
  display: flex;
  width: 100%;
  min-height: 2vh;
  
`;

const LeftMenu = styled.div`
  display: flex;
  width: 50%;
  margin: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #3f4044;
  justify-content: flex-start;
  
`;

const RightMenu = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 2%;
  font-size: 15px;
  align-items: center;
  img {
    margin-right: 3%;
    width: 15px;
    height: 15px;
  }
`;

const MosaicButton = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #2d515a;
  img {
    cursor: pointer;
  }
`;
const MenuButton = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  padding-left: 15px;
  margin-left: 10px;
  img {
    cursor: pointer;
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

const FiltersSettings = styled.div`
  display: flex;
  width: 100%;
  min-height: 2vh;
`;

const LeftFilters = styled.div`
  display: flex;
  width: 50%;
  margin: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #3f4044;
  justify-content: flex-start;
  align-items: center;
  p {
    padding-left: 10px;
    cursor: pointer;
  }
  img {
    border-right: 1px solid grey;
    width: 20px;
    padding-inline: 10px;
    cursor: pointer;
  }
`;

const RightFilters = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 2%;
  font-size: 15px;
  align-items: center;
  img {
    margin-right: 3%;
    width: 15px;
    height: 15px;
  }
  input {
    height: 30px;
    margin-right: 20px;
  }
`;

const RightButton = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  p {
    margin-inline: 10px;
  }
`;

const AllButton = styled.div`
  align-items: center;
  display: flex;
  background-color: #d8d8d8;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
  img {
    width: 20px;
    margin-left: 0px;
    border-right: 0px solid black;
  }
`;

const SortFilters = styled.div`
  align-items: center;
  display: flex;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-inline: 10px;
  img {
    border-right: 0px solid grey;
    cursor: pointer;
    
  }
  button {
    font-size: 20px;
    color: #3f4044;
    display: flex;
    outline: none;
    border: none;
    background-color: transparent;
    
  }
`;

export const Entities: FC = () => {
  const [view, setview] = useState(false);
  const changeView = () => (view === true ? setview(false) : setview(true));

  const [filter, menuState] = useState(false);
  const changeFilterState = () =>
  filter === true ? menuState(false) : menuState(true);

  return (
    <>
      <WrappedEntities>
        <WrapperSettings>
          <LeftMenu>
            <p>Entities</p>
          </LeftMenu>
          <RightMenu>
            <MosaicButton>
              <img src="/media/mosaic.png" alt="" />
              {view && <p>List</p>}
              {!view && <p>Mosaic</p>}

              <MenuButton>
                <button onClick={() => changeView()}>
                  <img src="/media/menu.png" alt="" />
                </button>
              </MenuButton>
            </MosaicButton>
          </RightMenu>
        </WrapperSettings>

        <FiltersSettings>
          <LeftFilters>
            <AllButton>
              <img src="/media/circle.png" alt="" /> <p>All</p>{" "}
              <img src="/media/arrow-down.svg" alt="" />
            </AllButton>
            <img src="/media/dots.png" alt="" />

            <SortFilters>
              <img src="/media/twoarrows.png" alt="" />
              <p>Sort</p>
              <button onClick={() => changeFilterState()}>
                <img src="/media/filter.png" alt="" />
                <p>Filters</p>
              </button>
            </SortFilters>

            <img src="/media/fullscreen.jpg" alt="" />
            <img src="/media/share.png" alt="" />
            <p>Share</p>
          </LeftFilters>

          <RightFilters>
            <input type="text" placeholder="Search..." />

            <RightButton>
              <img src="/media/wifi.png" alt="" />
              <p>Followed</p>
              <img src="/media/arrow-down.svg" alt="" />
            </RightButton>
          </RightFilters>
        </FiltersSettings>
        {filter && <Filter />}

        {view && <EntityElementsMosaic />}
        {!view && <EntityElementsList />}
      </WrappedEntities>
    </>
  );
};
