"use client";
import { useRef, useState } from "react";

type UploadFileModalProps = {
  onClose: () => void;
};

export default function UploadFileModal({ onClose }: UploadFileModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  /* Validate XLS / XLSX */
  const validateFile = (file: File) => {
    const validTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!validTypes.includes(file.type)) {
      setError("File not compatible for upload. Try again");
      return false;
    }

    setError("");
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setFile(file);
    }
  };

  /* Drag handlers (TypeScript-safe) */
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  return (
    <div className="upload-modal">
      {/* Header */}
      <div className="upload-header">
        <h3>UPLOAD FILE</h3>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Info */}
      <p className="upload-info">
        Upload excel file to modify the buylist
      </p>

      {/* Drop Zone */}
      <div
        className="drop-zone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="cloud">☁️</div>

        <p>
          <strong>Choose a file</strong> or drag and drop it here
        </p>

        <span>XLS or XLSX format</span>

        <button
          className="browse-btn"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          Browse File
        </button>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept=".xls,.xlsx"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) handleFile(selectedFile);
          }}
        />
      </div>

      {/* Selected File */}
      {file && (
        <div className="file-chip">
          <span>{file.name}</span>
          <button onClick={() => setFile(null)}>✕</button>
        </div>
      )}

      {/* Error */}
      {error && <p className="error-text">{error}</p>}

      {/* Footer */}
      <button className="upload-btn" disabled={!file}>
        Upload
      </button>
    </div>
  );
}
