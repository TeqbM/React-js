import "module";

import { fruits } from "../../data.js";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Shop() {
  const [fruit, setFruit] = useState(fruits);
  const [products, setProducts] = useState(fruits);
  const [filter, setFilter] = useState({ category: [], color: [] });



  let category = [...new Set(fruit.map((cat) => cat.category))];
  const allColors = [
    ...new Set(
      fruit.reduce(
        (accumulator, product) => [...accumulator, ...product.color],
        []
      )
    ),
  ];

  // const filterCategory = (ele) => {
  //   const categoryProducts = fruit.filter(
  //     (product) => product.category === ele
  //   );

  //   setProducts(categoryProducts);
  // };
  
  const filterProducts =()=>{
  
    let filterCategory = fruit.filter(prt => filter.category.includes(prt.category));

  let filterColor = fruit.filter(clr => filter.color.some(fColor => clr.color.includes(fColor)))

  
    setProducts([...new Set([...filterCategory,...filterColor])]);
    console.log(products);
  }
  return (
    <>
      <section className="flex mb-10">
        <div className="bg-slate-100 min-w-64 p-5 shadow-sm h-full border border-slate-200">
          <h3 className="font-semibold text-2xl text-orange-600 mb-3">
            Filter
          </h3>
          <div className="mt-3">
            <h4 className="h4 mb-3">Categories</h4>
            <ul className="flex flex-wrap gap-3 items-center">
              <li
                onClick={() => {
                  setProducts(fruit)
                  setFilter({ category: [], color: [] })
                }}
                className={`bg-white py-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:outline hover:outline-1`}
              >
                All
              </li>
              {category.map((itm, inx) => (
                <li
                  key={inx}
                  onClick={() => {
                    if(filter.category.includes(itm)) {
                      let deleteItm = filter.category.filter(item => item !== itm)
                      setFilter({ ...filter, category: [...deleteItm] })
                    } else {
                      setFilter( { ...filter, category: [...filter.category, itm] })
                    }
                  }}
                  className={`bg-white py-1 px-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-orange-600 hover:text-white  ${filter.category.includes(itm) ? "active-fil":""}`}
                >
                  {itm}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 mb-5">
            <h4 className="h4 mb-3">Color</h4>
            <div className="flex flex-wrap gap-2">
              {allColors.map((clr, inx) => (
                <span
                  key={inx}
                  onClick={() => {
                    if(filter.color.includes(clr)) {
                      console.log(clr);
                      let deleteClr = filter.color.filter(itemc => itemc !== clr);
                      setFilter({ ...filter, color: [...deleteClr] })
                    } else {
                      setFilter({ ...filter, color: [...filter.color, clr] })}
                    }
                  }
                  
                  className={`inline-block w-10 h-10 rounded-md cursor-pointer hover:shadow-lg hover:outline hover:outline-orange-600 ${filter.color.includes(clr) ? "active-clr":""}`}
                  style={{ backgroundColor: clr }}
                ></span>
              ))}
            </div>
          </div>
              {(filter.category.length > 0 || filter.color.length > 0) && <button className="btn" onClick={filterProducts}>Filter</button>}
        </div>
        <div className="p-5 min-w-[calc(100%-272px)]">
          <ul className="grid grid-cols-4 gap-6">
            {products.map((products) => {
              let { id, name, image, category, price,color, discription } = products;
              return (
                <li
                  key={id}
                  className="border rounded-md overflow-hidden relative"
                >
                  <img
                    className="h-64 object-cover w-full border-b"
                    src={image}
                    alt={name}
                  />
                  <span className="absolute top-2 right-2 bg-orange-500/70 backdrop-blur border border-orange-700 text-white rounded-full px-4 py-1 text-sm">
                    {category} {id}
                  </span>
                  <div className="p-3 space-y-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <div className="">{discription.slice(0, 70)}...</div>
                    <div className="flex gap-2 flex-wrap">
                    {color.map((clrItm,cId) =>  <span key={cId} className="inline-block w-7 h-7 rounded-md" style={{backgroundColor:clrItm}}> </span>)}
                    </div>
                    <div className="text-orange-600 font-semibold">
                      {price}₹
                    </div>
                    <Link to={`/shop/${id}`} className="btn text-base">View Product</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
