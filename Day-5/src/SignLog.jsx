import React, { useState } from "react";
import Swal from "sweetalert2";

function SignLog() {

        const [state, setState] = useState(false)
        const [email, setEmail] = useState("")
        const [pass, setPass] = useState("")
        const [Logemail, setLogEmail] = useState("")
        const [Logpass, setLogPass] = useState("")

        const [username, setUN] = useState("")
        const [arr, setArray] = useState([])
        const [val, setVal] = useState(false)

        const submitsing = () => {


                if (email == "" || pass == "" || username == "") {
                        (Swal.fire("Plece Fill All Fild"))
                        return
                }
                if (pass.length <= 4) {
                        (setVal(false), Swal.fire("Plece Enter Vlide length password"))
                        return
                }
                if (arr.filter(el => el.email == email).length != 0) {
                        Swal.fire("Emile Already rgi"), console.log(val)
                        return
                }
                if (arr.filter(el => el.username == username).length != 0) {
                        (setVal(false), Swal.fire("username Already rgi"))
                        return
                }

                // setVal(true)

                let a = {
                        email,
                        pass,
                        username
                }
                setEmail("")
                setPass("")
                setUN("")
                setArray([...arr, a])
                setVal(false)
                setState(true)

                console.log(arr);








        }

        const chack = () => {

                if (Logemail == "" && Logpass == "") {
                        Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Enter Email And Password",
                        })
                }
                else {
                        let log = arr.filter((el) => {
                                return el.email == Logemail
                        })

                        console.log(log);

                        log.length == 1 ?
                                (log[0].pass == Logpass
                                        ? (Swal.fire({
                                                title: "login Success",
                                                icon: "success",
                                                draggable: true
                                        }),
                                                console.log(Logpass, log[0].pass))
                                        : (Swal.fire({
                                                icon: "error",
                                                title: "Oops...",
                                                text: "Enter valide password",
                                        }), console.log(Logpass, log[0].pass))
                                )
                                : (Swal.fire({
                                        icon: "error",
                                        title: "Oops...",
                                        text: "Enter valide email",


                                }))
                }
        }

        return <>
                <div className="w-full h-[40rem]  flex justify-evenly  items-center ">
                        {state == true ? <div className="h-5/6 flex flex-col items-center justify-evenly w-7/12 border-2">
                                <h1 className="text-5xl font-bold">Log in</h1>

                                <div className="h-[20rem] w-7/12 p-3 p-x-5 flex justify-evenly aitrms-center flex-col  ">
                                        <input type="email" className=" h-12  px-3 rounded-md border placeholder:text-white text-white hover:border-2" placeholder="Enter Email" value={Logemail} onChange={(v) => setLogEmail(v.target.value)} />
                                        <br />
                                        <input type="password" className=" h-12  px-3 rounded-md border placeholder:text-white text-white hover:border-2" placeholder="Enter Password" value={Logpass} onChange={(v) => setLogPass(v.target.value)} />
                                        <br />
                                        <input type="submit" className=" h-10 w-3/12 border rounded-md hover:bg-white hover:text-black font-bold" onClick={chack} />
                                        <br />
                                </div>
                                <p onClick={() => { setState(false) }} className="font-bold cursor-pointer text-lg">Create Account ? Sign up</p></div> :
                                <div className="h-5/6 flex flex-col items-center justify-evenly w-7/12 border-2"><h1 className="text-5xl font-bold">Sign Up</h1>
                                        <div className="h-[20rem] w-7/12 p-3 p-x-5 flex justify-evenly aitrms-center flex-col ">
                                                <input className="h-12  px-3 rounded-md border placeholder:text-white text-white hover:border-2" placeholder="Enter Username" type="text" value={username} onChange={(v) => { setUN(v.target.value) }} />
                                                <br />
                                                <input className="h-12  px-3 rounded-md border placeholder:text-white text-white hover:border-2" placeholder="Enter Email ID " type="email" value={email} onChange={(v) => { setEmail(v.target.value) }} />
                                                <br />
                                                <input className="h-12  px-3 rounded-md border placeholder:text-white text-white hover:border-2" type="password" placeholder="Enter Password" value={pass} onChange={(v) => { setPass(v.target.value) }} />
                                                <br />
                                                <input type="submit" className=" h-10 w-4/12 border rounded-md hover:bg-white hover:text-black font-bold" onClick={submitsing} />
                                                <br />
                                        </div>
                                        <p onClick={() => { setState(true) }} className="font-bold cursor-pointer text-lg">Exiting ? Log in</p></div>}
                </div>
        </>

}

export default SignLog