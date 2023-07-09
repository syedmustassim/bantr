import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import { useUsers } from "../Context/UserContext";
import { Modal } from "./Modal";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
import { EditModal } from "./EditModal";

export const PostCard = ({ post }) => {
  const { currentUser } = useAuth();

  const {
    usersState: { users },
    addBookmark,
    removeBookmark,
    postInBookmark,
    getUserByUserId,
  } = useUsers();

  const { likePostHandler, dislikePostHandler, likedByUser, deletePost } =
    usePosts();

  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const findUserWhosePost = users?.find(
    (item) => item.username === post.username
  );

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <p className="user-name">
              {findUserWhosePost.firstName} {findUserWhosePost.lastName}
            </p>
            <span>{findUserWhosePost.createdAt}</span>
          </div>
          {findUserWhosePost?.username === currentUser?.username ? (
            <div className="post-heading-option">
              <div>
                <SlOptions size={25} onClick={toggleOptions} />
              </div>
              {showOptions ? (
                <div className="options">
                  <button onClick={openModal}>Edit</button>
                  <button
                    onClick={(e) => {
                      deletePost(post?._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} isClosed={closeModal}>
          <EditModal post={post} isClosed={closeModal} />
        </Modal>
      )}
    </div>
  );
};
