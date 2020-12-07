import { types } from "../types/types";

const INIT_STATE = {
  isAddVisible: false,
  selectedUser: null,
  searchWord: "",
  users: [],
};

export const UsersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.IS_ADD_VISIBLE_SET:
      return { ...state, isAddVisible: action.payload };
    case types.SEARCH_WORD_SET:
      return { ...state, searchWord: action.payload };
    case types.SELECTED_USER_SET:
      return { ...state, selectedUser: action.payload };
    case types.USERS_ADD:
      return { ...state, users: [...state.users, action.payload] };
    case types.USERS_LOAD:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
