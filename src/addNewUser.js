import React, { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

function AddNewUser(props) {
  const Header = styled.h1`
    text-align: center;
  `;
  const Container = styled.div`
    width: 500px;
    min-height: 200px;
    background-color: lightgrey;
  `;
  const Label = styled.label`
    width: 150px;
    height: 50px;
    padding-left: 20px;
    display: inline-block;
  `;
  const Input = styled.input`
    display: inline-block;
    width: 250px;
    height: 30px;
  `;
  const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: green;
    color: white;
    border: none;
    margin: 5px;
    float: right;
  `;
  const userName = useRef();
  const userAddress = useRef();
  const userMobileNumber = useRef();
  const userAppliedFortheJob = useRef();
  const navigate = useNavigate();

  const onClickAddUser = () => {
    props.handleAddButton({
      userName: userName.current.value,
      userAddress: userAddress.current.value,
      userMobileNumber: userMobileNumber.current.value,
      userAppliedFortheJob: userAppliedFortheJob.current.value,
    });
    navigate("/peopleList");
  };

  return (
    <Container>
      <Header>People</Header>
      <Label>Name</Label>
      <Input type="text" ref={userName} />
      <br />
      <Label>Address</Label>
      <Input type="text" ref={userAddress} />
      <br />
      <Label>Mobile Number</Label>
      <Input type="text" ref={userMobileNumber} />
      <br />
      <Label>Apply for the Job</Label>
      <Input type="text" ref={userAppliedFortheJob} />
      <br />

      <Button onClick={onClickAddUser}>Add</Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddButton: (jsonObject) =>
      dispatch({ type: "addUserDetail", payload: jsonObject }),
  };
};

const AddNewUserDetail = connect(null, mapDispatchToProps)(AddNewUser);

export default AddNewUserDetail;
