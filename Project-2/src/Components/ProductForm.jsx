import React, { useState } from "react";
import Swal from "sweetalert2";
import '../index.css'


function ProductForm({ Data, setData
}) {
        const [Product, setProduct] = useState({
                Image: "",
                Title: "",
                Price: "",

        })

        const [val, setVal] = useState({
                Image: false,
                Title: false,
                Price: false,
        })
        const [Error, setError] = useState({})

        const Change = (e) => {
                const { name, value } = e.target


                setProduct({ ...Product, [name]: value })
        }
        const blur = (e) => {
                const { name, value } = e.target

                if (name == "Image") {

                        if (value == "") {
                                setError({ ...Error, [name]: "Enter Url" })
                                setVal({ ...val, [name]: true })


                        }
                        else if (value.length < 10) {
                                setError({ ...Error, [name]: "Enter Valid URL" })
                                setVal({ ...val, [name]: true })
                        }
                }
                if (name == "Title") {
                        // let Title = /^[^.-_#][A-Za-z0-9_ -.]+$/
                        if (value == "") {
                                setError({ ...Error, [name]: "Enter Title" })
                                setVal({ ...val, [name]: true })


                        }
                        // else if (Title.test(value) == false) {
                        //         setError({ ...Error, [name]: "Enter Valid Title" })
                        //         setVal({ ...val, [name]: true })
                        // }
                }
                if (name == "Price") {
                        if (value == "") {
                                setError({ ...Error, [name]: "Enter Price" })
                                setVal({ ...val, [name]: true })
                        }
                        else if (value.length < 3) {
                                console.log(value.length);

                                setError({ ...Error, [name]: "Enter Price" })
                                setVal({ ...val, [name]: true })
                        }
                }


        }
        const focus = (e) => {
                const { name, value } = e.target

                setVal({ ...val, [name]: false })

        }
        const submit = (form) => {
                form.preventDefault()

                let isvalid = Object.values(Product).filter((value) => {
                        return value == ""
                })
                let isVal = Object.values(val).filter((value) => {
                        return value == true
                })
                if (isvalid.includes("")) {
                        console.log("Error");
                        Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Fill all Data",
                        });
                        setVal({
                                ...val, Image: true,
                                Title: true,
                                Price: true,
                        })
                }
                else if (isVal.length == 0) {
                        console.log(Data);

                        setData([...Data, Product])

                        setProduct({
                                ...Product, Image: "",
                                Title: "",
                                Price: "",
                        })



                        Swal.fire({
                                icon: "success",
                                title: "",
                                text: "Data Add Success",
                        });
                }
        }

        return (<>
                <div className="w-full lg:w-6/12   h-[30rem] lg:h-[32rem] flex flex-col items-center justify-evenly m-auto">
                        <h1 className="text-3xl lg:text-4xl self-start mx-16 px-1 lg:mx-36 lg:px-4">Product Form</h1>
                        <form action="" onSubmit={submit} className=" h-5/6 lg:h-5/6  lg:w-11/12 w-9/12 flex gap-y-4 flex-col items-center">
                                <div className="h-16 w-11/12 lg:w-9/12 flex flex-col gap-y-1 items-center lg:h-20  pt-2 mt-10">     <input placeholder="Enter Image URL" className={val.Image ? `h-7 px-3 lg:h-11 w-10/12 rounded-md border border-red-700 font-semibold text-[13px] lg:text-[17px]` : ` text-[13px] lg:text-[17px] h-7 lg:h-11 w-10/12 rounded-md px-4 font-semibold border`} type="text" name="Image" value={Product.Image} onChange={Change} onFocus={focus} onBlur={blur} />
                                        {val.Image ? <p className="text-[12px] text-red-800 self-start lg:text-[14px] mx-9 lg:mx-14 font-semibold">! {Error.Image}</p> : ""}</div>
                                <div className="h-16 w-11/12 lg:w-9/12 flex flex-col gap-y-1 items-center lg:h-20  pt-2">   <input placeholder="Enter Title " className={val.Title ? `h-7 px-3 lg:h-11 w-10/12 rounded-md border border-red-700 font-semibold text-[13px] lg:text-[17px]` : ` text-[13px] lg:text-[17px] h-7 lg:h-11 w-10/12 rounded-md px-4 font-semibold border`} type="text" name="Title" value={Product.Title} onChange={Change} onFocus={focus} onBlur={blur} />
                                        {val.Title ? <p className="text-[12px] text-red-800 self-start lg:text-[14px] mx-9 lg:mx-14 font-semibold">! {Error.Title}</p> : ""}</div>
                                <div className="h-16 w-11/12 lg:w-9/12 flex flex-col gap-y-1 items-center lg:h-20 pt-2">  <input placeholder="Enter Price " className={val.Price ? `h-7 px-3 lg:h-11 w-10/12 rounded-md border border-red-700 font-semibold text-[13px] lg:text-[17px]` : ` text-[13px] lg:text-[17px] h-7 lg:h-11 w-10/12 rounded-md px-4 font-semibold border`} type="text" name="Price" value={Product.Price} onChange={Change} onFocus={focus} onBlur={blur} />
                                        {val.Price ? <p className="text-[12px] text-red-800 self-start lg:text-[14px] mx-9 lg:mx-14 font-semibold">! {Error.Price}</p> : ""}</div>
                                <div className="h-16 w-11/12 lg:w-9/12 flex items-center  lg:h-20  ">
                                        <input className="h-11 text-lg font-bold hover:bg-white hover:text-black w-60 border-2 rounded-md mx-11 " type="submit" />
                                </div>   </form>
                </div>
        </>)
}

export default ProductForm