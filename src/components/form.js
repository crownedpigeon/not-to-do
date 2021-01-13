import React, { useState } from "react"
import "./form.css"


const Form = ({addTodo}) => {

    const [text, setText] = useState('');
    const [priority, setPriority] = useState('');
    const [order, setOrder] = useState(0);

    const submit = (e) => {
        addTodo({text, priority, order})
        setText('');
        setPriority('');
        setOrder(0);
        e.preventDefault();
    }

    return (
        <form action="" onSubmit={submit}>
            <label htmlFor="todo">what i have to do</label>
            <input type="text" name="todo" id="todo" value={text} onChange={e => setText(e.target.value)} required></input>

            <p>how bad i have to do it</p>
             <div className="priorityContainer">
                <div className="priority">
                    <input className="input-hidden" checked={priority === 'low'} onChange={e => {setPriority('low'); setOrder(4)}} type="radio" id="low" name="priority" required></input>
                   <label htmlFor="low"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" checked={priority === 'mid'} onChange={e => {setPriority('mid'); setOrder(3)}}  type="radio" id="mid" name="priority"></input>    
                     <label htmlFor="mid"><br></br></label>
                </div>

                <div className="priority">
                    <input className="input-hidden" checked={priority === 'high'} onChange={e => {setPriority('high'); setOrder(2)}}   type="radio" id="high" name="priority"></input>    
                     <label htmlFor="high"><br></br></label>
                </div>

                 <div className="priority">
                    <input className="input-hidden" checked={priority === 'urgent'} onChange={e => {setPriority('urgent'); setOrder(1)}}  type="radio" id="urgent" name="priority"></input>    
                     <label htmlFor="urgent"><br></br></label>
                </div>
            </div>
            <input type="submit" value="submit!"></input>
        </form>
    )
}

export default Form;