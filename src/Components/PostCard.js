import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import { useUsers } from "../Context/UserContext";

import {
  BsHeart,
  BsBookmarks,
  BsShare,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";

import "./PostCard.css";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const { currentUser } = useAuth();

  const {
    usersState: { users },
    addBookmark,
    removeBookmark,
    postInBookmark,
  } = useUsers();

  const { likePostHandler, dislikePostHandler, likedByUser } = usePosts();

  const navigate = useNavigate();

  const findUserWhosePost = users?.find(
    (item) => item.username === post.username
  );

  // console.log(post.likes.likeCount, "post details");

  // console.log(post, "initial");

  // console.log(postInBookmark(post?._id), "bookmark");

  return (
    <div>
      <div className="post-container">
        <div className="post-heading">
          <img
            src={findUserWhosePost.profileImg}
            alt=""
            className="avatar-img"
          />
          <div onClick={() => navigate(`/profile/${findUserWhosePost?._id}`)}>
            <p>
              {findUserWhosePost.firstName} {findUserWhosePost.lastName}
            </p>
            <span>{findUserWhosePost.createdAt}</span>
          </div>
          <div className="post-heading-option">
            <SlOptions size={25} />
          </div>
        </div>
        <div className="post-content">
          <p>{post?.content}</p>
          {post?.mediaURL ? (
            <div className="post-media">
              <img src={post?.mediaURL} alt="post-media" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="post-icons">
          <p>
            {post.likes.likeCount > 0 &&
            post.likes.likedBy.find(
              (item) => item.username === currentUser.username
            ) ? (
              <FcLike size={25} onClick={() => dislikePostHandler(post._id)} />
            ) : (
              <BsHeart size={25} onClick={() => likePostHandler(post._id)} />
            )}
            <span>{post.likes.likeCount}</span>
          </p>
          <p>
            {postInBookmark(post?._id) ? (
              <BsFillBookmarkFill
                size={25}
                onClick={() => removeBookmark(post._id)}
              />
            ) : (
              <BsBookmarks size={25} onClick={() => addBookmark(post._id)} />
            )}
          </p>
          <BiComment size={25} />
          <BsShare size={25} />
        </div>
      </div>
    </div>
  );
};
