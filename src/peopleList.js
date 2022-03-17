import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

function PeopleList(props) {
  const Container = styled.div`
    width: 400px;
    min-height: 100px;
    background-color: lightgrey;
    margin: 10px;
  `;
  const Span = styled.span`
    display: inline-block;
    margin: 10px;
    padding: 5px;
  `;
  const Para = styled.p``;
  const navigate = useNavigate();
  return (
    <div>
      {props.people !== undefined &&
        props.people.map((user) => (
          <Container>
            <Para>
              <Span>{user.userName}</Span>
              <Span style={{ float: "right" }}>{user.userMobileNumber}</Span>
            </Para>
            <Para>
              <Span>{user.userAddress}</Span>
              <Span style={{ float: "right" }}>
                {user.userAppliedFortheJob}
              </Span>
            </Para>
          </Container>
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
