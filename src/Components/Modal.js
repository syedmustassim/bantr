import { GrClose } from "react-icons/gr";
import "./Modal.css";

export const Modal = ({ isOpen, isClosed, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-main-container">
      <div className="modal-secondary-container">
        <button className="modal-close-btn" onClick={isClosed}>
          <GrClose />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
