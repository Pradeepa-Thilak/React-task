"use client";
import { useRef, useState } from "react";

type UploadFileModalProps = {
  onClose: () => void;
};

export default function UploadFileModal({ onClose }: UploadFileModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

 

// const validateFile = (file: File) => {
//   const ext = file.name.split(".").pop()?.toLowerCase();

//   if (ext !== "xls" && ext !== "xlsx") {
//     setError("File not compatible for upload. Try again");
//     return false;
//   }

//   setError("");
//   return true;
// };

 const handleFile = (selectedFile: File) => {
  setFile(selectedFile);      // ✅ ALWAYS set file

  const ext = selectedFile.name.split(".").pop()?.toLowerCase();

  if (ext !== "xls" && ext !== "xlsx") {
    setError("File not compatible for upload. Try again");
  } else {
    setError("");             // ✅ valid file → clear error
  }
};


  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  return (
    <>
      <div className="upload-header">
        <h3>UPLOAD FILE</h3>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    <div className="upload-modal">
     
      
      <p className="upload-info">
        Upload excel file to modify the buylist
      </p>

      
      <div
        className="drop-zone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="cloud">
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </div>

        <p>
          <strong>Choose a file or drag and drop it here</strong> 
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

     
      <div className="display">
      {file && (
        <div className="selected-file">
          {file.name}
        </div>
      )}

      {error && (
        <div className="error-text">
          {error}
        </div>
      )}
    </div>

     
 
    
      <button className="upload-btn" disabled={!file}>
        Upload
      </button>
    </div>
    </>
  );
}
