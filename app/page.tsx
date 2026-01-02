"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";

type ModalType="file" | "search" | null;

export default function HomePage() {

  const [open, setOpen] = useState(false);

  const[modalType,setModalType]=useState<ModalType>(null);

  const openModal=(type:ModalType)=>{
    setModalType(type);
    setOpen(true);
  }

  return (
    <div className="container">
      <button className ="file" onClick={()=>openModal("file")}>
        File
      </button>


      <button className="search" onClick={()=>openModal("search")}>
        Search
      </button>
      <Modal isopen={open} onClose={()=>setOpen(false)}>
        {/* child1 */}
        {modalType==="file" &&(
        <>
          <h2>File Modal</h2>
          <p>This is the file modal content.</p>
        </>

        )}
        {/* child2 */}
        {modalType==="search" &&(
        <>
          <h2>Search Modal</h2>
          <p>This is the search modal content.</p>
        </>
        )}

        </Modal>

    </div>
  )
}

