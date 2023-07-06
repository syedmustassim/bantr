import { useState, useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import { GiCancel } from "react-icons/gi";
import { GoFileMedia } from "react-icons/go";
import { usePosts } from "../Context/PostsContext";

import "./NewPost.css";

export const NewPost = () => {
  const { currentUser } = useAuth();
  const { createPost } = usePosts();
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const newPostRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (media) {
      createPost({
        content,
        media: URL.createObjectURL(event.target.files[0]),
        mediaAlt: "media-post",
      });
    } else {
      createPost({ content, media: "", mediaAlt: "" });
    }
    setContent("");
    setMedia(null);
  };

  return (
    <div className="create-post">
      <div className="post-profile-picture">
        <img src={currentUser.profileImg} alt="profile" />
      </div>
      <form className="post-form" onSubmit={handleSubmit}>
        <textarea
          ref={newPostRef}
          value={content}
          rows={3}
          placeholder="Spill the tea.."
          className="post-input"
          required
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
        {media ? (
          <div>
            {media?.type?.includes("video") ? (
              <video>
                <source src={URL.createObjectURL(media)} type="video/mp4" />
              </video>
            ) : (
              <img src={URL.createObjectURL(media)} alt="media" />
            )}{" "}
            <button onClick={() => setMedia(null)}>
              <GiCancel />
            </button>
          </div>
        ) : (
          <></>
        )}
        <div>
          <label>
            <input
              type="file"
              accept="image/*, video/"
              style={{ display: "none" }}
              onChange={(event) => setMedia(event.target.files[0])}
            />

            <div className="new-post-icon">
              <GoFileMedia size={30} />
              <button type="submit" className="submit-button">
                Post
              </button>
            </div>
          </label>
          {/* <button type="submit" className="submit-button">
            Post
          </button> */}
        </div>
      </form>
    </div>
  );
};
