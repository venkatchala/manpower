import React, { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

function AddNewUser(props) {
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
    <div>
      <h1>People</h1>
      <label>Name</label>
      <input type="text" ref={userName} />
      <br />
      <label>Address</label>
      <input type="text" ref={userAddress} />
      <br />
      <label>Mobile Number</label>
      <input type="text" ref={userMobileNumber} />
      <br />
      <label>Apply for the Job</label>
      <input type="text" ref={userAppliedFortheJob} />
      <br />
      <button
        onClick={() => {
          navigate("/peopleList");
        }}
      >
        Cancel
      </button>
      <button onClick={onClickAddUser}>Add</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddButton: (jsonObject) =>
      dispatch({ type: "addUserDetail", payload: jsonObject }),
  };
};

const AddNewUserDetail = connect(mapDispatchToProps)(AddNewUser);

export default AddNewUserDetail;
