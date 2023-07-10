import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUsers } from "../Context/UserContext";

import "./EditUserModal.css";

export const EditUserModal = ({ selectedUser, isClosed }) => {
  const { currentUser } = useAuth();
  const { editUser } = useUsers();

  const [editInput, setEditInput] = useState(currentUser);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    editUser(editInput);
    isClosed();
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="form-group">
          <label htmlFor="coverImage">Cover image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setCoverImage(e.target.files[0]);
              setEditInput({
                ...editInput,
                backgroundImg: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setProfileImage(e.target.files[0]);
              setEditInput({
                ...editInput,
                profileImg: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={editInput.firstName}
            onChange={(e) =>
              setEditInput({ ...editInput, firstName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={editInput.lastName}
            onChange={(e) =>
              setEditInput({ ...editInput, lastName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            value={editInput.bio}
            onChange={(e) =>
              setEditInput({ ...editInput, bio: e.target.value })
            }
          />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button onClick={isClosed}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
