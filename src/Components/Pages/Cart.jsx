import { useEffect, useState } from 'react';
import {AppUseCon} from '../../AppContext'

export default function Cart() {
     const [total,setTotal] =useState(0)

     let {carti} = AppUseCon();
     
     useEffect(()=>{
          if(carti.length > 0){
               let totalPrice = carti.reduce((accVal,curVal)=>{
                    let mulPrice = curVal.price * curVal.quantity;
                    return accVal + mulPrice
               },0)
               setTotal(totalPrice);
          }
          
     })

     
  return (
    <>
     <section className="py-10 mb-10">
          <div className="container">
               <div className="flex gap-9">
                    <div className="w-full">
     
                         {carti.length>0 ? (
                              <table>
                              <tbody>
                                   <tr>
                                        <th> id</th>
                                        <th>Product</th>
                                        <th> Price</th>
                                        <th> Quantity</th>
                                        <th> Subtotal</th>
                                   </tr>
                              </tbody>
                              <tbody>
                                   {carti.map((itm,inx) => {
                                        let {id,image,name,price,quantity} = itm;

                                        return(
                                             <tr key={id}>
                                                  <td> {itm.id}</td>
                                                  <td> 
                                                       <div className="flex gap-2">
                                                            <img src={image} alt={name} className='w-24 h-24 object-cover border-slate-600 rounded-md border' />
                                                            {name}
                                                       </div>
                                                  </td>
                                                  <td> {price}₹</td>
                                                  <td> {quantity}</td>
                                                  <td> {price*quantity}</td>
                                             </tr>     
                                             
                                        )
                                   })}
                              </tbody>                    
                                   
                         </table>
                         ): <>data not found</>}
                    </div>
                    <div className="bg-slate-100 min-w-80 border rounded-md space-y-5 flex flex-col justify-between">
                         <div className="">
                              <h3 className="mb-4 p-4">Cart Totals</h3>
                         </div>
                         <div className="">
                              <div className="flex justify-between border-y py-2 px-4 bg-white">
                                   <strong>Total</strong>
                                   <strong>{total}</strong>
                              </div>
                         <button className="btn w-full">Proceed to Checkout</button>

                         </div>
                    </div>
               </div>
          </div>
     </section>
    </>
  )
}
