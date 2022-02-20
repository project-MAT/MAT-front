import { NavLink } from "react-router-dom";
import EditModal from "../../Modals/EditModal/index"
import React, { useState } from "react";
import * as I from "../../../Assets/SVG";
import "./style.css";

const Aside = () => {

  const [editShowing, setEditShowing] = useState(false)
  const openEdit = () => {
    setEditShowing(true)
  }
  const closeEdit=(e) => {
    setEditShowing(false)
  }

  return (
    <div className="aside">
      <NavLink
        to="/main"
        className={({ isActive }) => (isActive ? "activated" : "")}
      >
        구인공고
      </NavLink>
      <NavLink
        to="/rank"
        className={({ isActive }) => (isActive ? "activated" : "")}
      >
        HOT RANK
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "activated" : "")}
      >
        알아보기
      </NavLink>
      <NavLink
        to="/My"
        className={({ isActive }) => (isActive ? "activated" : "")}
      >
        My Page
      </NavLink>
      <div className="writeSection" onClick={openEdit}>
        공고문 쓰기 <I.Write />
      </div>
      {editShowing && <EditModal />}
      {editShowing && <EditModal closeEdit={closeEdit} />}
    </div>
  );
};

export default Aside;
