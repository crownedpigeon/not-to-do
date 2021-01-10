import React from "react"
import "./form.css"


const Form = () => {

    return (
        <form action="">
            <label for="todo">what i have to do</label>
            <input type="text" name="todo" id="todo" required></input>

            <p>how bad i have to do it</p>
             <div className="priorityContainer">
                <div className="priority">
                    <input className="input-hidden" type="radio" id="low" name="priority"></input>
                   <label for="low"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" type="radio" id="mid" name="priority"></input>    
                     <label for="mid"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" type="radio" id="high" name="priority"></input>    
                     <label for="high"><br></br></label>
                </div>

                 <div className="priority">
                    <input className="input-hidden" type="radio" id="urgent" name="priority"></input>    
                     <label for="urgent"><br></br></label>
                </div>
            </div>


            <input type="submit" value="submit!"></input>
        </form>
    )
}

export default Form;