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
`;

const StyledListItem = styled(ListItemText)`
text-align: center;
`;


const Likes = (props) => {
  const { items, likesCounter, likedElements } = props;

  useEffect(() => {
    likesCounter(items);
  }, [items, likesCounter]);


  return (
    <StyledContainer>
    <List sx={{ width: "100%", maxWidth: 360}}>
      {(likedElements || []).map((elem) => {
        if(elem.likes){
          return <ListItem><StyledListItem>{`${elem.title} has ${elem.likes} likes`}</StyledListItem></ListItem>;
        }
      })}
    </List>
    </StyledContainer>
    )
};

const mapStateToProps = (state) => ({
  items: state?.items.value,
  likedElements: state?.items.likedElements
});

const mapDispatchToProps = (dispatch) => {
  return {
    likesCounter: (items) => dispatch(likesCounter(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
