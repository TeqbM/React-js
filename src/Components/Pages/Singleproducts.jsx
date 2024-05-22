import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { fruits } from "../../data.js";
import { AppContext, AppUseCon } from "../../AppContext";

export default function Singleproducts() {
  let { id } = useParams();
  let singleProduct = fruits.find((itm) => itm.id == id);
  const {
    id: pId,
    name,
    image,
    category,
    price,
    discription,
    SKU,
  } = singleProduct;

  // const { carti, setCarti } = AppUseCon();
  const { carti, setCarti } = useContext(AppContext);

  const getProducst = () => {
    const index = carti.findIndex(
      (cartItem) => cartItem.id === singleProduct.id
    );

    if (index !== -1) {
      carti[index].quantity = Number(carti[index].quantity ?? 1) + 1;
    } else {
      singleProduct.quantity = 1;
      carti.push(singleProduct);
    }
    const data = Object.values({ ...carti });
    setCarti(data);
  };

  return (
    <section>
      <div className="bg-slate-100 py-4">
        <div className="container">
          <Link to="/shop" className="text-orange-600">
            Back Shop
          </Link>
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
                <div>{discription}</div>
                <div className="text-xl text-orange-600">
                  <strong>Price: </strong> {price}₹
                </div>
                <button onClick={() => getProducst()} className="btn">
                  Add to Cart
                </button>

                <ul className="mt-3 pt-4 border-t">
                  <li>
                    {SKU && (
                      <>
                        <strong>SKU:</strong> {SKU}
                      </>
                    )}
                  </li>
                  <li>
                    {category && (
                      <>
                        <strong>Category:</strong> {category}
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
