
function Product(props) {

        let Data = props.data

        const add = () => {
                Swal.fire({
                        title: "Add to cart",
                        icon: "success",
                        draggable: true
                });
        }

        return <>
                <div className="  h-auto flex gap-5  w-full">
                        {Data.map((el) => (
                                <>
                                        <div className="h-[17rem] w-4/12  flex justify-evenly  items-center">

                                                <div className=" h-full w-5/12 flex items-center  p-2 justify-evenly">
                                                        <img src={el.URL} alt="" className="h-full w-full" /></div>
                                                <div className=" h-full w-6/12 flex px-3 justify-evenly flex-col">
                                                        <h5 className="text-2xl font-bold">{el.Title}</h5>
                                                        <p className="text-lg"> ₹ {el.Price}</p>
                                                        <p>{el.Catagory}</p>

                                                        <button onClick={add} className=" h-10 w-11/12 border-2 rounded-md bg-[#5f4b8bff] text-white font-bold">Add To cart</button>
                                                </div>
                                        </div>

                                </>
                        ))}
                </div>
        </>
}

export default Product