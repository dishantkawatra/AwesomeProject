import { ADD_ITEM } from "../ActionType"

const initialState = {
  dataSource: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, { dataSource: action.dataSource });

    default:
      return state;
  }
};
export default AddItemReducer;