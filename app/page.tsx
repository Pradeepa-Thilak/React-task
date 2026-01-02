"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import filterIcon from "@/app/assets/filter.jpg";
import Image from "next/image";
import downarrow from "@/app/assets/downward-arrow.png";
import uparrow from "@/app/assets/arrow-up.png";

type ModalType="file" | "search" | null;

export default function HomePage() {

  const [open, setOpen] = useState(false);
const [statusOpen, setStatusOpen] = useState(false);

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
         
        </>

        )}
        {/* child2 */}
        {modalType==="search" &&(
        <>
           <div className="top">

            <div className="ltop">
              <Image src={filterIcon} alt="filter" className="filterb"></Image>

              <p>Filter Buylist by</p>
            </div>

            <div className="rtop">
              <button className="reset">
                RESET</button>

              <button className="close" onClick={()=>setOpen(false)}>X</button>
            </div>

          </div>
          <div className="bottom">
            <div className="leftp">
              <div className="lhead">
                 <div className="status" onClick={()=>setStatusOpen(!statusOpen)}>
                  Status
                  <Image src={statusOpen? downarrow: uparrow} alt="downarrow"
                  width={12}
                  height={12}></Image>
                 </div>
                <div className="lprightbox">
                  <button className="clearall">Clear All</button>
                  <button className="selectall" >Select All

                  </button>
                </div>
              </div>
              <div className="lbody">
                {statusOpen && (
                  <div className="dropdown-list">
                    <label><input type="checkbox" /> PENDING</label>
                    <label><input type="checkbox" /> APPROVED</label>
                    <label><input type="checkbox" /> REJECTED</label>
                    <label><input type="checkbox" /> EDITED & PENDING</label>
                  </div>
                )}
                  <div className="filter-section">
                    Filter title 
                  <Image src={statusOpen? downarrow: uparrow} alt="downarrow"
                  width={12}
                  height={12}></Image>
                </div>
                  <div className="filter-section">
                    Filter title
                  <Image src={statusOpen? downarrow: uparrow} alt="downarrow"
                  width={12}
                  height={12}></Image>
                </div>
              </div>

            </div>
              <div className="rightp">
                <div className="rightp-head">Submitted by</div>
              </div>
          </div>
        </>
        )}

        </Modal>

    </div>
  )
}

