import React from "react";
import { NavLink } from "react-router-dom";
import {AppUseCon} from '../../AppContext'
export default function index() { 
  let item = AppUseCon()

  let totle = item.carti.reduce((total,num,inx,arr) => arr.price + num, 0);

  console.log(totle);

  // // let totle = item.carti.reduce((acc,curVal) => acc+ curVal,0)
  // console.log(totle);

    
  return (
    <header className="py-2 bg-orange-100/50 backdrop-blur border-b border-orange-200 sticky top-0 z-50 ">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="brand">
            <NavLink to="/" className="text-2xl font-bold text-orange-600">
              LoGo
            </NavLink>
          </div>
          <ul className="flex items-center menu space-x-7">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li className=" flex gap-3">
              <div className="bg-orange-600 w-7 flex justify-center items-center h-h rounded-full text-white">{item.carti.length}</div>
              2300
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
