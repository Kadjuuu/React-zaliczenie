import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "react-slick";

import { Publications } from "../Routing/Publications/Publications";
import { WorkSpaces } from "../Routing/Workspaces/Workspaces";
import { Error } from "../Routing/Error404/Error404";
import { ResumeYourWork } from "../Routing/ResumeYourWork/ResumeYourWork";
import { WorkSpaceCorporate } from "../Routing/Workspace/Corporate/Workspace";
import { WorkSpaceClientContract } from "../Routing/Workspace/ClientContract/Workspace";
import { WorkSpaceGroupNorms } from "../Routing/Workspace/GroupNorms/Workspace";
import { WorkSpaceRealEstateContracts } from "../Routing/Workspace/RealEstateContracts/Workspace";
import { WorkSpaceSupplierContract } from "../Routing/Workspace/SupplierContract/Workspace";
import { Profile } from "../Routing/Profile/Profile"

import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { useDispatch } from "react-redux";

import { getUsers } from "../../actions/usersActions";
import {Entities} from "../Routing/Entities/Entities";

type GetUsers = ReturnType<typeof getUsers>;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
`;

const MainPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopBar />
        <Content>
          <LeftMenu />
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <Publications />
                <WorkSpaces />
                <ResumeYourWork/>
              </Route>
              <Route path="/publications" exact>
                <Error />
              </Route>
              <Route path="/people" exact>
                <Error/>
              </Route>
              <Route path="/entities" exact><Entities/></Route>
              <Route path="/administration" exact>
              <Error/>
              </Route>
              <Route path="/client_contact" exact>
              <WorkSpaceClientContract/>
              </Route>
              <Route path="/supplier" exact>
              <WorkSpaceSupplierContract/>
              </Route>
              <Route path="/corporate" exact>
              <WorkSpaceCorporate/>
              </Route>
              <Route path="/group_norms" exact>
              <WorkSpaceGroupNorms/>
              </Route>
              <Route path="/real_estate_contracts" exact>
              <WorkSpaceRealEstateContracts/>
              </Route>
              <Route path="/see_profile" exact>
              <Profile/>
              </Route>
              <Route path="/privacy" exact>
              <Error/>
              </Route>
              <Route path="/settings" exact>
              <Error/>
              <Route path="/ecosystem" exact>
                <Error />
              </Route>
              </Route>
            </Switch>
          </Wrapper>
        </Content>
      </Wrapper>
    </Router>
  );
};

export default MainPage;
