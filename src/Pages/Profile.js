import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import { useUsers } from "../Context/UserContext";
import { Sidebar } from "../Components/Sidebar";
import { PostCard } from "../Components/PostCard";

import "./Profile.css";
import { SuggestedUsers } from "../Components/SuggestedUsers";
import { useEffect } from "react";

export const Profile = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const {
    postsState: { posts },
  } = usePosts();

  const {
    usersState: { users, user },
    getUserByUserId,
  } = useUsers();

  // console.log(user, "user");

  useEffect(() => {
    getUserByUserId(userId);
  }, [userId, currentUser]);

  console.log(user, "user obj");

  const selectedUser = users.find(
    (item) => item._id.toString() === userId.toString()
  );

  // console.log(selectedUser, "selected user");
  // console.log(currentUser, "lol");

  // console.log(selectedUser.username === currentUser?.username, "boolean check");

  // useEffect(() => {
  //   getUserByUserId(userId);
  // }, [userId, currentUser]);

  const selectedUserPosts = posts?.filter(
    (item) => item?.username === selectedUser?.username
  );

  document.title = `${selectedUser?.firstName} ${selectedUser?.lastName}`;

  return (
    <div>
      <div className="profile-container">
        <Sidebar />
        <div className="profile-heading-container">
          <div className="profile-first">
            <img src={selectedUser?.backgroundImg} alt="background" />
          </div>
          <img
            src={selectedUser?.profileImg}
            alt="user"
            className="profile-image"
          />
          <div className="profile-heading-content">
            <div className="profile-heading-primary">
              <h1>
                {selectedUser?.firstName} {selectedUser?.lastName}
              </h1>

              {selectedUser?.username === currentUser?.username ? (
                <button className="edit-profile-btn"> Edit Profile</button>
              ) : (
                <button>Unfollow</button>
              )}
            </div>
            <div className="profile-heading-secondary">
              <small>@{selectedUser?.username}</small>

              <small>Followers: {selectedUser?.followers?.length}</small>
              <small>Following: {selectedUser?.following?.length}</small>
            </div>
            <div className="profile-heading-bio">
              <h4>Bio: {selectedUser?.bio}</h4>
              <h4>
                Portfolio: <a href="google.com">{selectedUser?.portfolio}</a>
              </h4>
            </div>
          </div>
          <div className="profile-posts-content">
            <h2>Posts</h2>
            {selectedUserPosts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};
