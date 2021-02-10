import Select from 'react-select';
import {useState} from 'react';

export const NewTodo = ({

}) => {
const [taskText, setTaskText] = useState();
const [taskList, setTaskList] = useState([]);

const onAddTask = () => {
    const list = taskList;
    setTaskList(list.concat({text: taskText, id: parseInt(Math.random()*100000)}));
}

const deleteTask = (id) => {
    let list = taskList;
    let filtered = list.filter(item => item.id !== id);
    setTaskList(filtered);
}
return <div className="new-todo-main">
     <section className="new-todo-card">
         <article className="new-todo-card__title">Title</article>
         <article className="new-todo-card__input-container">
             <input type="text" onChange={(e) => setTaskText(e.target.value)} className="new-todo-input"/>
             <span className="new-todo-button-container">
                 <button className="new-todo-button" onClick={() => onAddTask()}>Add Task</button>
            </span>
         </article>
    </section>
    {taskList.length > 0 &&<section className="todo-list">
    <ul>{taskList.map((item) => 
            <li key={item.id}>{item.text} <span className="todo-task-icon"><i className="material-icons" onClick={() => deleteTask(item.id)}>close</i></span></li>
        )}</ul>
    </section>}
     </div>;
}