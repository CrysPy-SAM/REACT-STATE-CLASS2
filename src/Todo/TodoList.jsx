import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodo] = useState([{ task: "sample-Task", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewtodo] = useState("");

    let addNewTask = () => {
        setTodo((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone:false }];
        });
        setNewtodo("");
    };

    let updateTodoValue = (event) => {
        setNewtodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodo( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        
    }
     
    let upperCaseAll = () =>{
        setTodo( (prevTodos) =>(
      prevTodos.map((todo) =>{
        return{
            ...todo,
            task: todo.task.toUpperCase()
        };
      }))
    )
    };

   let UppercaseOne = (id) => {
    setTodo((prevTodos) =>
        prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            } else {
                return todo;
            }
        })
    );
};

    let MarkAsDone = (id) => {
    setTodo((prevTodos) =>
        prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                   isDone: true,
                };
            } else {
                return todo;
            }
        })
    );
};



    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />

            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                             &nbsp; &nbsp;&nbsp;
     <button onClick={() => deleteTodo(todo.id)}>delete</button>
<button onClick={() => UppercaseOne(todo.id)}>UpperCase One</button>
<button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>
                            
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>
                UpperCase All
            </button>
        </div>
    );
}
