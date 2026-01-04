"use client";
import "./Modal.css";
type ModalProps = {
  isopen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: "default" | "upload";
};

export default function Modal({ isopen, onClose, children, variant="default" }: ModalProps) {
  if (!isopen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal modal-${variant}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

