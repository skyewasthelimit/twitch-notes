import { useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

const TaskTracker = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    
    ])

const addTask = (task) => {
  const id = Math.floor(Math.random() *
   10000) + 1
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: 
    !task.reminder } : task
    )
  )
}

  return (
    <div className='container'>
      <Header
       onAdd={() => setShowAddTask
       (!showAddTask)} 
       showAdd={showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />
      ) : (
        'You are all caught up - Great job'
      )}
    </div>
  )
}

export default TaskTracker;
