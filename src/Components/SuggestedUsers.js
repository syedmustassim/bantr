import { useAuth } from "../Context/AuthContext";
import { useUsers } from "../Context/UserContext";
import "./SuggestedUsers.css";

export const SuggestedUsers = () => {
  const {
    usersState: { users },
  } = useUsers();

  const { currentUser } = useAuth();

  console.log(users, "suggested all users");
  console.log(currentUser, "suggested current user");

  const filterUsers = users?.filter(
    (user) => user.username !== currentUser.username
  );
  console.log(filterUsers, "users filtered once");

  const usersToBeSuggested = filterUsers?.filter(
    (singleUser) =>
      !currentUser?.following?.find(
        (item) => item.username === singleUser.username
      )
  );

  console.log(usersToBeSuggested, "suggest users logic?");

  return (
    <div className="suggested-sidebar">
      <h1>Suggested Users</h1>
      {usersToBeSuggested?.map((user) => (
        <div className="suggested-user-card">
          <div className="user-info">
            <img src={user?.profileImg} alt="avatar" />
            <div className="name-info">
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
};
