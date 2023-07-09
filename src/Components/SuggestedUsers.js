import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useUsers } from "../Context/UserContext";
import "./SuggestedUsers.css";

export const SuggestedUsers = () => {
  const {
    usersState: { users, user },
    handleFollowUser,
  } = useUsers();

  const { currentUser } = useAuth();

  const loggedInUser = users?.find(
    (item) => item?.username === currentUser?.username
  );

  const navigate = useNavigate();

  const filterUsers = users?.filter(
    (user) => user.username !== loggedInUser.username
  );

  const usersToBeSuggested = filterUsers?.filter(
    (singleUser) =>
      !loggedInUser?.following?.find(
        (item) => item.username === singleUser.username
      )
  );

  return (
    <div className="suggested-sidebar">
      <h1>Suggested Users</h1>
      {usersToBeSuggested?.map((user) => (
        <div className="suggested-user-card">
          <div className="user-info">
            <img
              src={user?.profileImg}
              alt="avatar"
              onClick={() => navigate(`/profile/${user?._id}`)}
            />
            <div
              className="name-info"
              onClick={() => navigate(`/profile/${user?._id}`)}
            >
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div>
          <button onClick={() => handleFollowUser(user._id)}>Follow</button>
        </div>
      ))}
    </div>
  );
};
