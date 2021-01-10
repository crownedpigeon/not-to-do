import React, { useState } from "react"
import Todo from "./todo"
import "./form.css"


const Form = ({addTodo}) => {

    const [text, setText] = useState('');
    const [priority, setPriority] = useState('');

    const submit = (e) => {
        addTodo({text, priority})
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={submit}>
            <label for="todo">what i have to do</label>
            <input type="text" name="todo" id="todo" value={text} onChange={e => setText(e.target.value)} required></input>

            <p>how bad i have to do it</p>
             <div className="priorityContainer">
                <div className="priority">
                    <input className="input-hidden" checked={priority === 'low'} onChange={e => setPriority('low')} type="radio" id="low" name="priority"></input>
                   <label for="low"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" checked={priority === 'mid'} onChange={e => setPriority('mid')}  type="radio" id="mid" name="priority"></input>    
                     <label for="mid"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" checked={priority === 'high'} onChange={e => setPriority('high')}   type="radio" id="high" name="priority"></input>    
                     <label for="high"><br></br></label>
                </div>

                 <div className="priority">
                    <input className="input-hidden" checked={priority === 'urgent'} onChange={e => setPriority('urgent')}  type="radio" id="urgent" name="priority"></input>    
                     <label for="urgent"><br></br></label>
                </div>
            </div>
            <input type="submit" value="submit!"></input>
        </form>
    )
}

export default Form;