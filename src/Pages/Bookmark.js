import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import { useUsers } from "../Context/UserContext";

import { Sidebar } from "../Components/Sidebar";
import { SuggestedUsers } from "../Components/SuggestedUsers";
import "./Bookmark.css";
import { PostCard } from "../Components/PostCard";

export const Bookmark = () => {
  const {
    usersState: { bookmarks },
  } = useUsers();

  const {
    postsState: { posts },
  } = usePosts();

  document.title = "Bookmarks || Bantr";

  return (
    <div>
      {/* <Navbar /> */}
      <div className="homefeed-container">
        <Sidebar />
        <div>
          <h1 className="home-feed-heading">Bookmarked Posts</h1>
          {bookmarks.length > 0 ? (
            bookmarks.map((item) => {
              const bookmarkPost = posts?.find(({ _id }) => _id === item._id);
              return <PostCard post={bookmarkPost} />;
            })
          ) : (
            <div>No posts found</div>
          )}
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};
