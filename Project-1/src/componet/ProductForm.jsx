import React, { useState } from "react";
import Product from "./product";
import Swal from "sweetalert2";
Swal

function ProductForm() {
        const [state, setState] = useState(true)
        const [URL, setUrl] = useState("")
        const [Title, setTitle] = useState("")
        const [Price, setPrice] = useState("")
        const [Catagory, setCat] = useState("")
        const [Data, setData] = useState([])

        const Add = () => {

                URL != "" && Title != "" && Price != "" && Catagory != "" ?
                        setData([...Data, { URL, Title, Price, Catagory }])
                        : Swal.fire({
                                icon: "error",
                                title: "Fill All Filde",
                                text: "Something went wrong!",
                        });
                setUrl("")
                setTitle("")
                setPrice("")
                setCat("")

                console.log(Data);
        }



        return <>
                <div className="h-auto w-full flex items-center justify-evenly gap-8 flex-col py-4">
                        <div className="w-11/12 flex gap-10  h-20 items-center ">
                                <button className="h-10 w-40 border-2 capitalize bg-[#5f4b8bff] text-[#e69a8dff] border-[#e69a8dff] rounded-md font-bold text-lg hover:bg-[#e69a8dff] transition delay-200 duration-300 ease-in-out  hover:text-[#5f4b8bff]   " onClick={() => { setState(true) }}>form</button>
                                <button className="h-10 w-40 border-2 capitalize bg-[#e69a8dff] text-[#5f4b8bff] border-[#5f4b8bff] rounded-md font-bold text-lg hover:bg-[#5f4b8bff] transition delay-200 duration-300 ease-in-out  hover:text-[#e69a8dff]   " onClick={() => { setState(false) }}>Product</button>
                        </div>
                        <div className="w-11/12 h-auto  flex justify-evenly items-center p-2">
                                {state == true ?
                                        <div className="h-[35rem]  w-7/12 flex flex-col justify-evenly items-center">
                                                <h3 className="text-3xl font-bold text-[#e69a8dff]">Product Add Form</h3>
                                                <div className="h-5/6  w-8/12 p-5 flex justify-evenly flex-col items-start ">

                                                        <input type="text" className="border-2 w-11/12 h-12 rounded-md px-2 font-bold border-[#e69a8dff] hover:border-[#5f4b8bff]" value={URL} onChange={(it) => { setUrl(it.target.value) }} placeholder="Enter Image URL" />
                                                        <br />
                                                        <input type="text" className="border-2 w-11/12 h-12 rounded-md px-2 font-bold border-[#e69a8dff] hover:border-[#5f4b8bff]" value={Title} onChange={(it) => { setTitle(it.target.value) }} placeholder="Enter Title" />
                                                        <br />
                                                        <input type="text" className="border-2 w-11/12 h-12 rounded-md px-2 font-bold border-[#e69a8dff] hover:border-[#5f4b8bff]" value={Price} onChange={(it) => { setPrice(it.target.value) }} placeholder="Enter Price" />
                                                        <br />
                                                        <input type="text" className="border-2 w-11/12 h-12 rounded-md px-2 font-bold border-[#e69a8dff] hover:border-[#5f4b8bff]" value={Catagory} onChange={(it) => { setCat(it.target.value) }} placeholder="Enter Catagory" />
                                                        <br />
                                                        <input type="submit" className="h-12  w-6/12 font-bold rounded-md border-[#e69a8dff] bg-[#5f4b8bff] text-[#e69a8dff] border-2" onClick={Add} />
                                                </div>

                                        </div>
                                        : <div><Product data={Data} /></div>}
                        </div>

                </div>
        </>
}

export default ProductForm