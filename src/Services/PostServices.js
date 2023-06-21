import axios from "axios";

export const getAllPostsService = async () => await axios.get("/api/posts");

export const getUserPostService = async (username) =>
  await axios.get(`/api/posts/user/${username}`);

export const createNewPostService = async (postData, encodedToken) => {
  await axios.post(
    "/api/user/posts",
    { postData },
    { headers: { authorization: encodedToken } }
  );
};

export const editPostService = async (postData, encodedToken) => {
  await axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization: encodedToken } }
  );
};

export const deletePostService = async (postId, encodedToken) => {
  await axios.delete(
    `/api/user/posts/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

export const likePostService = async (postId, encodedToken) => {
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

export const dislikePostService = async (postId, encodedToken) => {
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};
