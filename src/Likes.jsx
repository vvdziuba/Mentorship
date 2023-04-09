import { useEffect } from "react";
import { connect } from "react-redux";
import { likesCounter } from "./store/items";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  width: 360px;
  text-align: center;
  margin-top: 5px;
  height: 200px;
  position: relative;
`;

const StyledListItem = styled(ListItemText)`
  text-align: center;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  position: absolute;
  top: 1px;
  /* left: 40px; */
  text-align: center;
  width: 100%;
`;

const StyledDivider = styled.hr`
  background-color: black;
  color: black;
  width: 100%;
`;

const StyledListCont = styled(List)`
  margin-top: 35px !important;
`;

const Likes = (props) => {
  const { items, likesCounter, likedElements = [] } = props;

  useEffect(() => {
    likesCounter(items);
  }, [items, likesCounter]);

  if (likedElements.length === 0) {
    return <></>;
  }
  return (
    <StyledContainer>
      <StyledTitle>
        Most Liked Elements:
        <StyledDivider />
      </StyledTitle>
      <StyledListCont sx={{ width: "100%", maxWidth: 360 }}>
        {(likedElements || []).map((elem, ind) => {
          if (elem.likes) {
            return (
              <ListItem key={ind}>
                <StyledListItem>{`${elem.title} has ${elem.likes} likes`}</StyledListItem>
              </ListItem>
            );
          }
        })}
      </StyledListCont>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({
  items: state?.items.value,
  likedElements: state?.items.likedElements,
});

const mapDispatchToProps = (dispatch) => {
  return {
    likesCounter: (items) => dispatch(likesCounter(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
