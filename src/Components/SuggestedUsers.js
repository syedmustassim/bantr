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

  console.log(loggedInUser, "log in ");

  const navigate = useNavigate();

  // console.log(users, "suggested all users");
  // console.log(currentUser, "suggested current user");

  const filterUsers = users?.filter(
    (user) => user.username !== loggedInUser.username
  );
  // console.log(filterUsers, "users filtered once");

  const usersToBeSuggested = filterUsers?.filter(
    (singleUser) =>
      !loggedInUser?.following?.find(
        (item) => item.username === singleUser.username
      )
  );

  console.log(users, "following");
  console.log(currentUser, "current user");

  // console.log(usersToBeSuggested, "suggested");

  // console.log(usersToBeSuggested, "suggest users logic?");
  // console.log(currentUser?.following);
  return (
    <div className="suggested-sidebar">
      <h1>Suggested Users</h1>
      {usersToBeSuggested?.map((user) => (
        <div className="suggested-user-card">
          <div className="user-info">
            <img src={user?.profileImg} alt="avatar" />
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
