import React,{useState} from 'react';
import Task from './Task';

function Tasks() {
    const [tasks, setTasks] = useState([
        {id:1,title:"login feature",isCompleted:false},
        {id:2,title:"signup feature",isCompleted:true},
        {id:3,title:"transaction feature",isCompleted:false},
        {id:4,title:"orders feature",isCompleted:true},
        {id:5,title:"payments feature",isCompleted:false},
    ]);
    const updateTask = (id, status) => {
        let index = tasks.findIndex(t => t.id == id);
        let copy =[...tasks];
        copy [index]["isCompleted"]= status;
        setTasks(copy);
    };
    const deleteTask = (id) => {
        let result = tasks.filter(t => t.id !== id);
    setTasks(result);
    };

    const createTask = e => {
        let title = e.target.value;
        
        if (e.key === "Enter" ) {
          setTasks([ ...tasks, { id: tasks.length + 2, title, isComplete: false }]);
        }
    };
    console.log(tasks)

  return (
    <div>
         <input type="text"  placeholder='Enter kuch bhi' onKeyUp={createTask} />
        {tasks?.map(task =>(
            <Task 
            key={task.id} 
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            updateTask={updateTask}
            />
        ))}
    </div>
  );

        } 

export default Tasks;
