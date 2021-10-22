import { ADD_COMMENT } from "./actionTypes";

const initialState = { name: "Kenzie", comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // const { updatedUser } = action;
      return action.updatedUser;

    default:
      return state;
  }
};

export default userReducer;
