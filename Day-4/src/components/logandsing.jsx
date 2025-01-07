import React, { useState } from "react";



function LogAndSing() {

        const [state, setstste] = useState(true)
        const [val, setval] = useState([])
        const [val2, setval2] = useState([])

        console.log(val2);
        console.log(val);




        const signUp = () => {
        }
        const logIn = () => {
                alert("login")
        }
        return <>
                <div className="border-2 w-[50rem] h-[40rem] justify-evenly items-center flex">
                        {state == true ?
                                < div id="log in" className="flex  items-center w-11/12 flex-col h-4/6 " >
                                        <h1>Log In</h1>

                                        <input type="email" value={val2} onChange={e => setval2(e.target.value)} className="border-2 w-96 h-10 my-4 mt-10" />
                                        <br />
                                        <input type="password" className="border-2 w-96 h-10 my-4" />
                                        <br />
                                        <input type="submit" className="border-2 w-96 h-10 my-4" onClick={logIn} />

                                        <p className="cursor-pointer" onClick={() => { setstste(false) }}>No Account ? Create New Acconut</p>
                                </div> :

                                <div id="Sign Up" className="flex   items-center w-11/12 flex-col h-5/6 ">
                                        <h1>Sign up</h1>
                                        <input type="email" value={val} onChange={e => setval(e.target.value)} className="border-2 w-96 h-10 my-4 mt-10" />
                                        <br />
                                        <input type="text" className="border-2 w-96 h-10 my-4" />
                                        <br />
                                        <input type="password" className="border-2 w-96 h-10 my-4" />
                                        <br />
                                        <input type="submit" className="border-2 w-96 h-10 my-4" onClick={signUp} />
                                        <p className="cursor-pointer" onClick={() => { setstste(true) }}>Alredy account ? login</p>

                                </div>
                        }
                </div >
        </>
}

export default LogAndSing