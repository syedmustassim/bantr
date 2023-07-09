import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { initialPostState, postsReducer } from "../Reducer/postsReducer";
import {
  getAllPostsService,
  likePostService,
  dislikePostService,
  createNewPostService,
  deletePostService,
  editPostService,
} from "../Services/PostServices";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { token } = useAuth();
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostState
  );

  const getAllPosts = async () => {
    try {
      const {
        status,
        data: { posts },
      } = await getAllPostsService();
      if (status === 200) {
        postsDispatch({ type: "GET_ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: "LIKED_POSTS", payload: posts });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        console.log("cannot like a post that has already been liked");
      } else {
        console.log(error);
      }
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePostService(postId, token);
      // console.log(posts, "lolol");
      if (status === 201) {
        postsDispatch({ type: "DISLIKED_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likedByUser = (post, user) =>
    post?.likes.likedBy.find((item) => item.username === user.username);

  const filterPosts = (posts) => {
    if (postsState?.filterType === "latest") {
      return posts?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (postsState?.filterType === "trending") {
      return posts?.sort((a, b) => b?.likes.likeCount - a?.likes.likeCount);
    } else {
      return posts;
    }
  };

  const createPost = async ({ content, media, mediaAlt }) => {
    try {
      const {
        status,
        data: { posts },
      } = await createNewPostService(content, media, mediaAlt, token);
      if (status === 201) {
        postsDispatch({ type: "CREATE_NEW_POST", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await deletePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: "DELETE_POST", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (postId, { content, mediaURL, mediaAlt }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editPostService(postId, content, mediaURL, mediaAlt, token);
      if (status === 201) {
        postsDispatch({ type: "EDIT_POST", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        postsState,
        postsDispatch,
        likePostHandler,
        dislikePostHandler,
        likedByUser,
        filterPosts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
