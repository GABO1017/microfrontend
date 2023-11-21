import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { storeTodo, ITodo } from "@Renthub/store";
import './styles.css'

export default function Root(props) {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {

    const subscription = storeTodo.storeTodo$.subscribe(setTodos)
    
    return () => {
      subscription.unsubscribe();
    };
  },[]);

  const handleDelete = (id: number) => {
    storeTodo.deleteTodo(id);
  };

  return <section>
    <div className="navbar-container">
      <div className="color">
        <a href="/" className="nav-link">Angular Form</a>
        <a href="/react" className="nav-link">React List</a>
      </div>
    </div>
    <div className="todo-list-container">
      <h1>List of To Do</h1>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}
            <button onClick={() => handleDelete(todo.id)}> 
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  </section>;
}
