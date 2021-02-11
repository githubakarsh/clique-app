import Select from 'react-select';
import {useState} from 'react';

export const NewTodo = ({

}) => {
const [taskText, setTaskText] = useState(null);
const [taskList, setTaskList] = useState([]);
const [pageState, setPageState] = useState({inputError: false})

const onAddTask = () => {
    const list = taskList;
    if(taskText) {
        if(pageState.inputError) {
            setPageState({...pageState, inputError: false});    
        }
        setTaskList(list.concat({text: taskText, id: parseInt(Math.random()*100000)}));
        setTaskText('');
    }else {
        setPageState({...pageState, inputError: true})
    }
}

const deleteTask = (id) => {
    let list = taskList;
    let filtered = list.filter(item => item.id !== id);
    setTaskList(filtered);
}
return <><div className="new-todo-main">
     <section className="new-todo-card">
         <article className="new-todo-card__title"><emp>To Do</emp></article>
         {pageState.inputError && <article className="input-error"> <span>Please enter task</span></article>}
         <article className="new-todo-card__input-container">
             <input type="text" id="todo-input"value={taskText} defaultValue={taskText} onChange={(e) => {
                 setTaskText(e.target.value);
            }} className="new-todo-input"/>
             <span className="new-todo-button-container">
                 <button id="AddTask" className="new-todo-button" onClick={() => onAddTask()}>Add Task</button>
            </span>
         </article>
    </section>
    
     </div>
     {taskList.length > 0 &&<section className="todo-list" name="taskList">
     <ul >{taskList.map((item) => 
             <li key={item.id} className="animate-elem">{item.text} <span className="todo-task-icon" id="closeIcon"><i className="material-icons" id="delete-item" onClick={() => deleteTask(item.id)}>close</i></span></li>
         )}</ul>
     </section>}
     </>
     ;
}