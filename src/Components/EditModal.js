import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { usePosts } from "../Context/PostsContext";
import "./EditModal.css";

export const EditModal = ({ post, isClosed }) => {
  //   console.log(post, "edit modal post");
  //   console.log(isClosed, "lol");

  const { currentUser } = useAuth();
  const { editPost } = usePosts();

  const [content, setContent] = useState(post || {});

  const postRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    editPost(post._id, {
      content: content?.content,
      media: content?.mediaURL,
      mediaAlt: content?.mediaAlt,
    });
    isClosed();
  };

  return (
    <div className="edit-modal">
      <img src={currentUser?.profileImg} alt="profile" />
      <form onSubmit={handleSubmit}>
        <div className="edit-modal-content">
          <textarea
            ref={postRef}
            value={content?.content}
            placeholder="spill the tea..."
            onChange={(event) =>
              setContent((prev) => ({ ...prev, content: event.target.value }))
            }
          />
        </div>

        <button type="submit" className="edit-modal-save">
          Save
        </button>
        <button onClick={isClosed} className="edit-modal-cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};
