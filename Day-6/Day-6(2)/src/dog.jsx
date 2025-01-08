import React, { useState, useEffect } from "react";

function DogApi() {
        const [state, setState] = useState(1)
        const [dogImage, setDog] = useState(null)
        useEffect(() => {
                fetch(`https://dog.ceo/api/breeds/image/random`)
                        .then(res => res.json())
                        .then((res) => {
                                setDog(res.message)
                                console.log(dogImage)
                        })
                        .catch(er => console.log(er))
        }, [state])

        console.log(state);


        return <>

                <div className=" sm:w-full  h-[45rem] lg:w-full flex  justify-evenly items-center p-4">
                        <div className="h-full w-full border-2 rounded-xl lg:w-7/12   flex justify-evenly items-center flex-col">
                                <h1 className="font-bold text-3xl">Rendom Dog Images Generator</h1>
                                <div className=" sm:w-9/12 sm:h-4/6 lg:w-8/12 lg:h-4/6 ">
                                        {dogImage == null ? <div className="animate-pulse h-full w-full "></div> : <img src={dogImage} alt="" className="h-full w-full" />}

                                </div>
                                <button onClick={() => { setState(state + 1) }} className=" h-12 rounded-md font-bold text-lg border-2 hover:border-4 w-60">Click</button>
                        </div>
                </div>
        </>
}

export default DogApi