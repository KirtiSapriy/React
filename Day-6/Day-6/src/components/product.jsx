
import React, { useState, useEffect } from "react"
import Swal from 'sweetalert2'

function Product() {

        const [state, setstase] = useState(0)
        const [array, setarr] = useState(null)

        const heandel = () => {
                setstase(state + 1)
                Swal.fire("Product Add Successfully");
        }
        useEffect(() => {

                fetch(`https://dummyjson.com/products`)
                        .then(res => res.json())
                        .then((res) => {
                                setarr(res.products)

                        })
                        .catch(er => console.log(er))

        }, [])
        console.log(array);



        return <>

                <div className="w-full h-auto flex p-2 bg-[#00000010] ">
                        {array == null ? <div className="animate-pulse h-80 w-4/12 bg-[#0000080]"></div> : <div className="w-full h-auto flex justify-start pl-6  items-center flex-wrap">{array.map((el) => {

                                return < div className="h-80 w-4/12  flex justify-evenly items-center " >
                                        <div className="flex grid-col-2 gap-4   border-2 border-black rounded-md  hover:shadow-xl p-2 w-11/12  h-5/6">
                                                <div className="w-6/12 relative overflow-hidden h-full">
                                                        <span className="absolute top-2 flex px-2 py-[0.2rem] font-bold rounded-r-md z-10 bg-[#3b82a4]  h-8 bg-zinc-900	 text-white w-40 ">{el.availabilityStatus}</span>
                                                        <img src={el.thumbnail} className="h-full w-full ease-in duration-300 delay-300 hover:scale-125" alt="" />
                                                </div>
                                                <div className="w-6/12  h-full flex  justify-evenly flex-col px-3">
                                                        <h3 className="truncate text-lg font-bold">{el.title}</h3>
                                                        <p className="font-bold"> $ {el.price}</p>
                                                        <p className="font-bold"> <i className="fa fa-star text-yellow-400"></i> {el.rating}</p>

                                                        <button onClick={heandel} className="border-black border  rounded-md font-semibold       h-10 w-11/12  mx-auto hover:bg-black hover:text-white" >Add To Cart</button>

                                                </div></div>
                                </div>
                        })}
                        </div>

                        }
                </div >
        </>
}

export default Product