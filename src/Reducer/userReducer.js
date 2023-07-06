export const initialUserState = {
  users: [],
  bookmarks: [],
  user: {},
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return { ...state, users: action.payload };
    case "GET_ALL_BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "ADD_BOOKMARK":
      return { ...state, bookmarks: action.payload };
    case "REMOVE_BOOKMARK":
      return { ...state, bookmarks: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
