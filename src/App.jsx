import { useState } from 'react'
import { Header } from './Header'
import { TaskItem } from './TaskItem'
import './App.css' // Puedes mantener los estilos por defecto o borrarlos

function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Ver el video del curso de React' },
    { id: 2, text: 'Configurar proyecto con Vite' }
  ])
  
  // Estado para el texto del input
  const [newTask, setNewTask] = useState('')

  // Función para agregar tareas
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(), // Genera un ID único básico
      text: newTask
    }
    setTasks([...tasks, newTaskObj])
    setNewTask('') // Limpia el input
  }

  // Función para eliminar tareas
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
 // NUEVA: Función para editar tareas
  const handleEditTask = (taskId) => {
    // Buscamos la tarea actual para mostrar su texto en el cuadro
    const taskToEdit = tasks.find(task => task.id === taskId);
    const newText = prompt("Edita tu tarea:", taskToEdit.text);

    // Validamos que el usuario no haya cancelado y que no esté vacío
    if (newText !== null && newText.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, text: newText } : task
      ));
    }
  }
  return (
    <div>
      <Header />
      
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea..."
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <ul>
        {/* Renderizado dinámico de la lista usando .map() */}
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={handleDeleteTask}
            onEdit={handleEditTask} 
          />
        ))}
      </ul>
    </div>
  )
}

export default App