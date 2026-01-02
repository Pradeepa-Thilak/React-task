"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import filterIcon from "@/app/assets/filter.jpg";
import Image from "next/image";

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
                
              </div>
              <div className="lbody">

              </div>

            </div>
              <div className="rightp">
                <div className="rightp-head">Submitted by</div>
                <div className="searchinput">
                  <input type="text" placeholder="Enter Customer ID / SO ID" className="input" />
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                </div>
                <div className="lists">
                  <div className="name">Priya Patel (DS)</div>
                  <div className="name-detail">
                    <div>
                      <span>3 Buylists</span>
                    </div>
                    <div className="rating">
                      <span>2</span>
                      <span className="circle yellow"></span>
                      <span>1</span>
                      <span className="circle green"></span>
                      <span>0</span>
                      <span className="circle red"></span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </>
        )}

        </Modal>

    </div>
  )
}

