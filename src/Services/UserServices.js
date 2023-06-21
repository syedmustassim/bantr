import axios from "axios";

export const getAllUsersService = async () => await axios.get("/api/users");

export const editProfileService = async (userData, encodedToken) => {
  await axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: encodedToken } }
  );
};

export const getAllBookmarksSerivce = async (encodedToken) => {
  await axios.get("/api/users/bookmark", {
    headers: { authorization: encodedToken },
  });
};

export const addBookmarkService = async (postId, encodedToken) => {
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
};

export const removeBookmarkService = async (postId, encodedToken) => {
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

export const followUserService = async (followUserId, encodedToken) => {
  await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

export const unfollowUserService = async (followUserId, encodedToken) => {
  await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};
