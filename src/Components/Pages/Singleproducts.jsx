import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom';


export default function Singleproducts() {

  const [ishow, setIshow] = useState(false);
  const [productsid, setProductsid] = useState([]);

  let {id} = useParams();

  const API_URL = "https://fakestoreapi.com/products";

  useEffect(()=>{
      try{
        setIshow(true)
        fetch(API_URL).then((res) => res.json()).then((data) => setProductsid(data));
      }catch(e){
        console.log(e.message);
      }finally{
        setIshow(false)
      }
  },[])
  
  let data = {}


  if (productsid.length > 0) {
    data = productsid[id-1];
  }
  console.log(data)
  return (
    <section className="py-5">    
      <div className="container">
          <Link to="/shop" className="btn mb-5">Back to shop</Link>
          {ishow ? <div>loading...</div>:(
            <div className='flex gap-5'>
                <div className='p-7 border rounded-md'>
                  <img src={data.image} alt={data.title} />
                </div>
                <div className='space-y-3'>
                  <h1 className='text-2xl font-semibold text-orange-600'>{data.title}</h1>
                  <div className='text-xl text-orange-600'>{data.price}₹</div>
                  <div>{data.description}</div>
                  <span className='bg-orange-500 py-1 px-5  rounded-full inline-block'>{data.category}</span>
                  <br />
                  <br />
                  <button className='btn'>add to cart</button>
                </div>
            </div>
          )}
      </div>
    </section>
  )
}
