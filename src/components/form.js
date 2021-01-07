import React from "react"
import "./form.css"

const Form = () => {
    return (
        <form action="">
            <label for="todo">what i have to do</label>
            <input type="text" name="todo" id="todo" required></input>

            <p>how bad i have to do it</p>
            <div className="priorityContainer">
  
                <div>
                    {/* <input type="radio" id="low" name="low"></input> */}
                    <p>🙂</p>
                    <label for="low">not very</label>
                </div>

                <div>
                    {/* <input type="radio" id="mid" name="mid"></input> */}
                    <p>😐</p>
                    <label for="mid">eh</label>
                </div>
                {/* <label for="mid">😐 eh</label>
                <input type="radio" id="mid" name="mid"></input>
                <label for="high">😰 pretty bad</label>
                <input type="radio" id="high" name="high"></input>
                <label for="urgent">😡 defcon 1</label>
                <input type="radio" id="urgent" name="urgent"></input> */}
            </div>


            <input type="submit" value="submit!"></input>
        </form>
    )
}

export default Form;