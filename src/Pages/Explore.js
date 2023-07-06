import { Navbar } from "../Components/Navbar";
import { PostCard } from "../Components/PostCard";
import { Sidebar } from "../Components/Sidebar";
import { SuggestedUsers } from "../Components/SuggestedUsers";
import { usePosts } from "../Context/PostsContext";
import "./Explore.css";

export const Explore = () => {
  const {
    postsState: { posts },
  } = usePosts();
  console.log(posts, "explore page");

  return (
    <div>
      {/* <Navbar /> */}
      <div className="explore-container">
        <Sidebar />
        <div>
          <h1 className="explore-heading">
            <span>Explore</span>
          </h1>
          {posts?.length > 0 ? (
            posts?.map((item) => <PostCard key={item._id} post={item} />)
          ) : (
            <h3>No posts to display</h3>
          )}
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};
