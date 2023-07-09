export const initialUserState = {
  users: [],
  bookmarks: [],
  user: {},
  followingUsers: [],
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
    case "FOLLOW_USER":
      return {
        ...state,
        users: state?.users?.map((user) => {
          const updatedUserValue = action?.payload?.find(
            ({ _id }) => _id === user._id
          );
          return updatedUserValue ? updatedUserValue : user;
        }),
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        users: state?.users?.map((user) => {
          const updatedUserValue = action?.payload?.find(
            ({ _id }) => _id === user._id
          );
          return updatedUserValue ? updatedUserValue : user;
        }),
      };
    default:
      return state;
  }
};
