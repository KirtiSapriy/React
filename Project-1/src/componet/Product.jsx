
function Product(props) {

        let Data = props.data

        return <>
                <div>
                        {Data.map((el) => (
                                <>

                                        <img src={el.URL} alt="" height={100} width={100} />
                                        <h5>{el.Title}</h5>
                                        <p>{el.Price}</p>
                                        <p>{el.Catagory}</p>

                                        <button>Add To cart</button>

                                </>
                        ))}
                </div>
        </>
}

export default Product