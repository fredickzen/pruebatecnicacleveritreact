import { types } from "../types/types";

export const SetIsAddVisible = (visible) => ({
    type: types.IS_ADD_VISIBLE_SET,
    payload: visible,
  });

export const AddUsers = (user) => ({
  type: types.USERS_ADD,
  payload: user,
});

export const LoadUsers = (users) => ({
  type: types.USERS_LOAD,
  payload: users,
});

export const SetSelectedUser = (user) => ({
  type: types.SELECTED_USER_SET,
  payload: user,
});

export const SetSearchWord = (word) => ({
  type: types.SEARCH_WORD_SET,
  payload: word,
});
