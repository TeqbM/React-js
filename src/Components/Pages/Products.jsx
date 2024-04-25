import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [catFilter, setCatFilter] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    try {
      setIsloading(true);
        fetch(API_URL).then((res) => res.json()).then((data) => {
          setProducts(data)
          setCatFilter(data)
        });
    } catch (e) {
      console.log(e.message);
    } finally {
      setInterval(() =>{
        setIsloading(false);
      },1000)
    }
  }, []);

  const category = [...new Set(products.map((cat) => cat.category))];

  const filterCat =(cat)=>{
    const filCat = products.filter(citm => {
      return citm.category === cat
    })
    setCatFilter(filCat);
  }
  return (
    <>
      <section className="py-10 mb-10">
        <div className="container">
          {isLoading ? (
            <button className="btn">Loading...</button>
          ) : (
            <>
              <ul className="flex justify-center gap-5 sticky top-0 py-2 border-b bg-white z-30">
                {category.map((cat) => (
                  <li className="btn cursor-pointer" key={cat} onClick={()=> filterCat(cat)}>
                    {cat}
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid grid-cols-4 gap-2">
                {catFilter.map((itm) => {
                  const { id, title, price, description, category, image } = itm;

                  return (
                    <div className="cart relative" key={id}>
                      <span className="absolute bg-orange-600 py-1 px-2 text-sm rounded-md right-2">
                        {category}
                      </span>
                      <div className="border-b mb-4 pb-4">
                        <img
                          src={image}
                          className="w-1/2 mx-auto h-44 object-contain"
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold ">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                      </h3>
                      <div>{price}₹</div>
                      <div className="mb-5">{description.slice(0, 100)}</div>
                      <Link className="btn" to={`/shop/${id}`}>View Products</Link>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
