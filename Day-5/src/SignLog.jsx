import React, { useState } from "react";
import Swal from "sweetalert2";

function SignLog() {

        const [state, setState] = useState(true)
        const [email, setEmail] = useState("")
        const [pass, setPass] = useState("")
        const [Logemail, setLogEmail] = useState("")
        const [Logpass, setLogPass] = useState("")

        const [username, setUN] = useState("")
        const [arr, setArray] = useState([])
        const [val, setVal] = useState(true)

        const submitsing = () => {


                (email == "" || pass == "" || username == "") ? (setVal(false), Swal.fire("Plece Fill All Fild")) :
                        (pass.length <= 4) ? (setVal(false), Swal.fire("Plece Enter Vlide length password")) :
                                arr.filter(el => el.email == email).length != 0 ? (setVal(false), Swal.fire("Emile Already rgi"), console.log(val)) :
                                        arr.filter(el => el.username == username).length != 0 ? (setVal(false), Swal.fire("username Already rgi")) :
                                                setVal(true)

                // setVal(true)

                if (val == true) {
                        let a = {
                                email,
                                pass,
                                username
                        }
                        setArray([...arr, a])
                        setEmail("")
                        setPass("")
                        setUN("")
                        setState(true)

                }
                console.log(arr);








        }
s
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
                <div className="">
                        {state == true ? <div><h1>log</h1>

                                <div>
                                        <input type="email" value={Logemail} onChange={(v) => setLogEmail(v.target.value)} />
                                        <br />
                                        <input type="password" value={Logpass} onChange={(v) => setLogPass(v.target.value)} />
                                        <br />
                                        <input type="submit" onClick={chack} />
                                        <br />
                                </div>
                                <p onClick={() => { setState(false) }}  >Create Account ? Sign up</p></div> : <div><h1>sign</h1>
                                <div>
                                        <input type="text" value={username} onChange={(v) => { setUN(v.target.value) }} />
                                        <br />
                                        <input type="email" value={email} onChange={(v) => { setEmail(v.target.value) }} />
                                        <br />
                                        <input type="password" value={pass} onChange={(v) => { setPass(v.target.value) }} />
                                        <br />
                                        <input type="submit" onClick={submitsing} />
                                        <br />
                                </div>
                                <p onClick={() => { setState(true) }}>Exiting ? Log in</p></div>}
                </div>
        </>

}

export default SignLog