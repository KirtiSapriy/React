
import React from "react"

import { useState } from "react"

import Counter2 from "./counter2"
import Counter3 from "./counter3"


function Counter() {

        const [count, setCount] = useState(0)

        const CountInc = () => {
                setCount(count + 1)
        }

        const CountDec = () => {
                if (count == 0) {
                        return
                }
                setCount(count - 1)
        }
        return <>
                <div className="countBox">

                        <div className="count2">
                                <Counter2 countVal={count}></Counter2>
                        </div>
                        <div className="count1">
                                <h2>{count}</h2>
                        </div>
                        <div className="count3">
                                <Counter3 countVal2={count}></Counter3>
                        </div>

                </div>
                <div className="btns">
                        <button onClick={CountDec} className="btn1">-</button>
                        <button onClick={CountInc} className="btn2">+</button>

                </div>
        </>
}

export default Counter