export function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li style={{ margin: '10px 0' }}>
      {task.text}
      
      {/* Botón de Eliminar */}
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px', color: 'red' }}>
        🗑️
      </button>

      {/* Botón de Editar */}
      <button onClick={() => onEdit(task.id)} title="Editar tarea">
        ✏️
      </button>
    </li>
  );
}