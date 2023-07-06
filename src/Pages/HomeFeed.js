import { Navbar } from "../Components/Navbar";
import { NewPost } from "../Components/NewPost";
import { PostCard } from "../Components/PostCard";
import { Sidebar } from "../Components/Sidebar";
import { SuggestedUsers } from "../Components/SuggestedUsers";
import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import "./HomeFeed.css";

export const HomeFeed = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser, "current user");

  const {
    postsState: { posts },
    filterPosts,
  } = usePosts();

  // console.log(posts, "home feed");

  // console.log(posts, "initial render");

  const postsFollowing = posts?.filter((post) =>
    currentUser?.following.some(
      (userFollowing) =>
        userFollowing.username === post.username ||
        currentUser.username === post.username
    )
  );

  const sortedPosts = filterPosts(postsFollowing);

  document.title = "Home || Bantr";
  // console.log(sortedPosts, "sorted posts");

  // console.log(currentUser, "mushu");
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
