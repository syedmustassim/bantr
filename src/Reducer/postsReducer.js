export const initialPostData = {
  input: "",
  media: null,
  mediaAlt: "",
};

export const initialPostState = {
  posts: [],
  postData: initialPostData,
  filterType: "latest",
};

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return { ...state, posts: action.payload };
    case "FILTER_POSTS":
      return { ...state, filterType: action.payload };
    case "LIKED_POSTS":
      return { ...state, posts: action.payload };
    case "DISLIKED_POSTS":
      return { ...state, posts: action.payload };
    case "CREATE_NEW_POST":
      return { ...state, posts: action.payload };
    case "DELETE_POST":
      return { ...state, posts: action.payload };
    case "EDIT_POST":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
