import React from "react";
import { useParams, Link } from "react-router-dom";
import { fruits } from "../../data.js";
export default function Singleproducts() {
  let { id } = useParams();
  let singleProduct = fruits.find((itm) => itm.id == id);
  console.log(singleProduct);

  const { id: pId, name, image, price, discription,SKU} = singleProduct;
  // console.log(id);
  return (
    <section>
      <div className="bg-slate-100 py-4">
        <div className="container">
          <Link to="/shop" className="text-orange-600">
            {" "}
            Back Shop
          </Link>{" "}
          / <span>{name}</span>
        </div>
      </div>
      <div className="py-7">
        <div className="container">
          <div className="flex gap-8 ">
            <div className="w-5/12">
              <div className="p-2 rounded-xl shadow-lg border">
                <img
                  src={image}
                  alt={name}
                  className="h-[65vh] rounded-lg w-full object-cover "
                />
              </div>
            </div>
            <div className="w-8/12">
              <div className="space-y-5">
                {pId}
                <h1 className="text-2xl font-bold text-orange-600">{name}</h1>
                <div> {SKU && <><strong>SKU:</strong> {SKU}</> } </div>
                <div>{discription}</div>
                <div className="text-xl text-orange-600">{price}₹</div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
