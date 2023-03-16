import { connect } from "react-redux";
import { deleteItem } from "./store/items";

const Likes = (props) => {
  const { items, del: delAction } = props;

  return (
    <div>
      {items.map((value, ind) => {
        console.log("value", value);
        return (
          <div key={ind}>
            {value.title}

            <button
              onClick={() => {
                delAction(value.id);
              }}
            >
              Remove 1
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state?.items.value,
});

const mapDispatchToProps = (dispatch) => {
  return {
    del: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
