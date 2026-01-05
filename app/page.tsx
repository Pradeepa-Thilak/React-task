"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import filterIcon from "@/app/assets/filter.jpg";
import Image from "next/image";
import downarrow from "@/app/assets/downward-arrow.png";
import uparrow from "@/app/assets/arrow-up.png";
import UploadFileModal from "@/app/components/UploadFileModal";

type ModalType = "file" | "search" | null;

const buylist = [
  { id: 1, name: "Priya Patel" },
  { id: 2, name: "Rohan Singh" },
  { id: 3, name: "Vihaan Reddy" },
  { id: 4, name: "Saanvi Nair" },
  { id: 5, name: "Arjun Desai" },
  { id: 6, name: "Diya Joshi" },
  { id: 7, name: "Yash Kumar" },
  { id: 8, name: "Neha Iyer" },
  { id: 9, name: "Karan Mehta" },
  { id: 10, name: "Riya Das" },
  { id: 11, name: "Siddharth Rao" },
  
]

export default function HomePage() {

  const [open, setOpen] = useState(false);
const [statusOpen, setStatusOpen] = useState(false);

  const[modalType,setModalType]=useState<ModalType>(null);
  const [search, setSearch] = useState("");

  const filteredBuylist = buylist.filter((user) => (
    user.name.toLowerCase().includes(search.toLowerCase())
    ))
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

      <Modal 
      isopen={open} 
      onClose={()=>setOpen(false)}
      variant={modalType==="file" ? "upload" : "default"}>


        {/* child1 */}
        {modalType==="file" &&(
        <>
           <UploadFileModal onClose={() => setOpen(false)} />
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
                <div className="searchinput">
                  <input type="text" placeholder="Enter Customer ID / SO ID" className="input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                </div>
                <div className="user">
                {filteredBuylist.map((user) => (
                   <div className="lists" key={user.id}>
                    <div className="name">{user.name} (DS)</div>
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
                  ))}
                </div>
              </div>
          </div>
        </>
        )}

        </Modal>

    </div>
  )
}

