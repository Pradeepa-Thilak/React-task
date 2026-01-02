"use client";
import "./Modal.css";
type ModalProps = {
  isopen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isopen, onClose, children }: ModalProps) {
  if (!isopen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

