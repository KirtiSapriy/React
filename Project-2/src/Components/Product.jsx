import React, { useState } from "react";
import Swal from "sweetalert2";
import '../index.css'


function Product({ Data }) {

        return (<>
                <div className="h-auto w-full flex gap-x-5 gap-y-2 px-7 flex-wrap py-6">{Data.map((el, i) => {
                        return <div key={i} className="h-60 justify-evenly items-center w-[23rem] rounded-lg overflow-hidden border border-blue-500/50 flex hover:shadow-xl  hover:shadow-blue-500/50	">

                                <div className="w-[50%]   overflow-hidden p-2 h-full flex items-center"><img src={el.Image} className="h-5/6 w-full" alt="" /></div>
                                <div className="w-[45%] h-5/6 p-2 justify-evenly  flex flex-col">
                                        <h1 className="h-18 p-1 px-2">{el.Title}</h1>
                                        <p className="px-2">$ {el.Price}</p>
                                        <button className="h-10 w-11/12 border text-blue-500 hover:bg-blue-600 hover:text-white rounded-md border-blue-500 self-center">Add To Card</button>
                                </div>
                        </div>

                })}</div>
        </>)
}

export default Product 