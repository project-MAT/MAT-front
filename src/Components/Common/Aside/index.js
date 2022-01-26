import { NavLink } from 'react-router-dom'
import { EditModal } from '../../index'
import React, { useState } from 'react'
import * as I from '../../../Assets/SVG'
import './style.css'

const Aside = () => {
  return (
    <div className="aside">
      <NavLink to="/main">구인공고</NavLink>
      <NavLink to="/rank">HOT RANK</NavLink>
      <NavLink to="/about">알아보기</NavLink>
      <NavLink to="/user">My Page</NavLink>
      <div className="writeSection">
        공고문 쓰기 <I.Write />
      </div>
    </div>
  )
}

export default Aside
