import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { addTask, removeTask } from "../store/slices/tasksSlice";

export function TaskList() {
    // Disparar ações: Dispatch
    // Resgatar informações do estado: Selector
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks);
    const [taskTitle, setTaskTitle] = useState("");

    function handleAddTask() {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            completed: false
        }
        dispatch(addTask(newTask));
        setTaskTitle('');
    }

    function handleRemoveTask(id: number) {
        dispatch(removeTask(id));
    }

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                value={taskTitle} 
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Adicione uma tarefa"
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </>
    )
}