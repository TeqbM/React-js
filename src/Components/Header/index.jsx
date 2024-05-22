import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../AppContext";
export default function index() {
  const [totalq, setTotalq] = useState(0);
  const [total, setTotal] = useState(0);

  let {carti, setCarti} = useContext(AppContext);

  useEffect(() => {
    if (carti.length > 0) {
      let qtyTotal = carti.reduce(
        (curQut, curArr) => curQut + curArr.quantity,
        0
      );

      let totalPrice = carti.reduce((curAcc,curVal)=>{
        let sumQly = curVal.price * curVal.quantity;
        return curAcc + sumQly;
      },0);

      setTotal(totalPrice);
      setTotalq(qtyTotal);
    }

  }, [carti]);

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
            <li className="">
              <NavLink to="/cart" className={"flex gap-3"}>
                <div className="bg-orange-600 w-7 flex justify-center items-center h-h rounded-full text-white">
                  {totalq}
                </div>
                {total}₹
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
