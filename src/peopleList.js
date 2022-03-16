import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

function PeopleList(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>

      {props.people !== undefined &&
        props.people.map((user) => (
          <div>
            <p>{user.userName}</p>
            <p>{user.userAddress}</p>
            <p>{user.userMobileNumber}</p>
            <p>{user.userAppliedFortheJob}</p>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    people: state,
  };
};

const PeopleListDetail = connect(mapStateToProps)(PeopleList);

export default PeopleListDetail;
