import React, { useState } from "react";
import Swal from "sweetalert2";
import '../index.css'
import Product from "../components/Product";
import ProductForm from "../Components/ProductForm";


function Home() {

        const [state, setState] = useState(true)
        const [Data, setData] = useState([])


        return (<>

                <div className="w-full flex justify-evenly h-20">
                        <div className="w-7/12  h-20 items-center justify-center flex gap-x-9">
                                <button className="h-12 font-bold text-lg hover:shadow-lg  hover:shadow-sky-200/30  w-36 border-2" onClick={() => setState(false)}>Product</button>
                                <button className="h-12 font-bold text-lg hover:shadow-lg  hover:shadow-sky-200/30  w-36 border-2" onClick={() => setState(true)}>Form</button>
                        </div>
                </div>
                <div className="h-[40.5rem] flex flex-col justify-evenly">
                        <div className=" h-full flex ">
                                {state ? <ProductForm Data={Data} setData={setData} /> : <Product Data={Data} />}
                        </div>
                </div>

        </>)
}

export default Home