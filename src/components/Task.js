import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 
      'reminder' : ''}`} onDoubleClick={() =>
    onToggle(task.id)}>
      <h3>
        {task.text}{' '} 
        <FaTimes 
         style={{color: 'slategrey', cursor: 
         'pointer', padding: '1px', marginTop: '10px'}} 
         onClick={() => onDelete(task.id)}  
       />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task