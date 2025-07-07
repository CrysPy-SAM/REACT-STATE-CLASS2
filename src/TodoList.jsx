import { useState } from "react";

export default function TodoList() {
    let [todos, setTodo] = useState(["sample Task"]);
    let [newTodo, setNewtodo] = useState("");


let addNewTask = () =>{
    setTodo([...todos, newTodo]);  
    setNewtodo("");
}


     let updateTodoValue=(event) =>{
       setNewtodo(event.target.value);
     }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}
