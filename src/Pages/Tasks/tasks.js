import { useEffect, useState } from 'react'
import { Resources } from '../../Resources/resources'
import './tasks.css'
export const Tasks = () => {
    const [taskData, setTaskData] = useState([
        {id: 1, name: 'Task name'},
        {id: 2, name: 'Task name'}
    ])
    
    const [taskName, setTaskName] = useState()
    const [addTaskFlag, setAddTaskFlag] = useState(false);
    const [mapFlag, setMapFlag] = useState();
    const [time,setTime] = useState()
    const handleInputChange = (e) => {
        setTaskName(e.target.value)
    }

    const deleteTask = (task) => {
        taskData.splice(taskData.map(item => item.id).indexOf(task.id), 1)
    }

    
    useEffect(()=>{
        console.log(taskData)
    },[taskData])

    useEffect(() => {
        setInterval(() => setTime({ time: Date.now() }), 200);
    }, [])

    return(
        <div className="tasks">
            <div className='tasks-list-add'>
                <div className='tasks-list-header'>
                    <h2>Tasks</h2>
                    <img onClick={()=>{setAddTaskFlag(!addTaskFlag)}} src={Resources.Add} alt=""/>
                </div>
                <div className='tasks-list'>
                {taskData.map((task)=>{
            if(task.name){
                return (
                    <div key={task.id} className='task'>
                        <h4>{task.name}</h4>
                        <div onClick={(task)=>{deleteTask(task)}} className='remove-task'>
                        Remove
                        </div>
                    </div>
                )
            }
        })}
                </div>
            </div>
            {addTaskFlag ?
            (
            <div className="add-task">
            <input onChange={handleInputChange} placeholder='Task name'></input>
            <div onClick={()=>{if(taskName){setTaskData([...taskData,{id: Math.floor(Math.random(0,100000)), name: taskName}])}}} className='add'>
                Add
            </div>
            </div>
            )
            :
            (<></>)}
        </div>

    )
}