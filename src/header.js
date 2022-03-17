import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleListDetail from "./peopleList";
import AddNewUserDetail from "./addNewUser";

function Main() {
  const HeadContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #646255;
  `;
  const Heading = styled.h1`
    color: #000000;
    text-align: center;
  `;
  const UnorderList = styled.ul`
    list-style-type: none;
    display: flex;
  `;
  const List = styled.li`
    margin: 10px;
  `;

  const navigate = useNavigate();
  return (
    <div>
      <Heading>People Management App</Heading>
      <HeadContainer>
        <UnorderList>
          <List
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </List>
          <List
            onClick={() => {
              navigate("/peopleList");
            }}
          >
            People List
          </List>
        </UnorderList>
      </HeadContainer>
      <Routes>
        <Route path="/" element={<AddNewUserDetail />}></Route>
        <Route path="/peopleList" element={<PeopleListDetail />}></Route>
      </Routes>
    </div>
  );
}
export default Main;
