import { Navbar } from "../Components/Navbar";
import { NewPost } from "../Components/NewPost";
import { PostCard } from "../Components/PostCard";
import { Sidebar } from "../Components/Sidebar";
import { SuggestedUsers } from "../Components/SuggestedUsers";
import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import { useUsers } from "../Context/UserContext";
import "./HomeFeed.css";

export const HomeFeed = () => {
  const { currentUser } = useAuth();

  const {
    usersState: { users },
  } = useUsers();

  const loggedInUser = users?.find(
    (item) => item?.username === currentUser?.username
  );

  const {
    postsState: { posts },
    filterPosts,
  } = usePosts();

  const postsFollowing = posts?.filter((post) =>
    loggedInUser?.following.some(
      (userFollowing) =>
        userFollowing.username === post.username ||
        loggedInUser.username === post.username
    )
  );

  const sortedPosts = filterPosts(postsFollowing);

  document.title = "Home || Bantr";

  return (
    <div>
      {/* <Navbar /> */}
      <div className="homefeed-container">
        <Sidebar />
        <div>
          <h1 className="home-feed-heading">Home Feed </h1>
          <NewPost />
          {sortedPosts?.length > 0 ? (
            sortedPosts?.map((item) => <PostCard key={item._id} post={item} />)
          ) : (
            <div>No Posts added yet</div>
          )}
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};
