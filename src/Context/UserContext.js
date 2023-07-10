import { createContext, useContext, useEffect, useReducer } from "react";
import { initialUserState, userReducer } from "../Reducer/userReducer";
import { useAuth } from "./AuthContext";
import {
  addBookmarkService,
  followUserService,
  getAllBookmarksSerivce,
  getAllUsersService,
  getByUserIdService,
  removeBookmarkService,
  unfollowUserService,
  editProfileService,
} from "../Services/UserServices";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(userReducer, initialUserState);
  const { token, setCurrentUser } = useAuth();

  const getAllUsers = async () => {
    try {
      const {
        status,
        data: { users },
      } = await getAllUsersService();
      if (status === 200) {
        usersDispatch({ type: "GET_ALL_USERS", payload: users });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBookmarks = async () => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await getAllBookmarksSerivce(token);
      console.log(status, "status");
      if (status === 200) {
        usersDispatch({ type: "GET_ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addBookmark = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await addBookmarkService(postId, token);
      if (status === 200) {
        usersDispatch({ type: "ADD_BOOKMARK", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeBookmark = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await removeBookmarkService(postId, token);
      if (status === 200) {
        usersDispatch({ type: "REMOVE_BOOKMARK", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postInBookmark = (postId) =>
    usersState?.bookmarks?.find((item) => item._id === postId);

  const getUserByUserId = async (userId) => {
    try {
      const {
        status,
        data: { user },
      } = await getByUserIdService(userId);

      console.log(user, "context");

      if (status === 200) {
        usersDispatch({ type: "GET_USER", payload: user });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowUser = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserService(followUserId, token);
      if (status === 200) {
        usersDispatch({ type: "FOLLOW_USER", payload: [followUser, user] });
      }
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollowUser = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await unfollowUserService(followUserId, token);
      if (status === 200) {
        usersDispatch({ type: "UNFOLLOW_USER", payload: [followUser, user] });
      }
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (editInput) => {
    try {
      const {
        status,
        data: { user },
      } = await editProfileService(editInput, token);
      if (status === 201) {
        usersDispatch({ type: "EDIT_USER", payload: user });
        setCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        usersState,
        usersDispatch,
        getAllUsers,
        addBookmark,
        removeBookmark,
        getAllBookmarks,
        postInBookmark,
        getUserByUserId,
        handleFollowUser,
        handleUnfollowUser,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
