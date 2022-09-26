import { ADD_ITEM } from '../ActionType';

const initialState = {
  dataSource: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // eslint-disable-next-line prettier/prettier
      return Object.assign({}, state, { dataSource: action.payload });

    default:
      return state;
  }
};
export default AddItemReducer;