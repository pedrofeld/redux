import { useAppSelector } from "../store/hooks"

export function TaskList() {
    const tasks = useAppSelector(state => state.tasks)
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <button>Remover</button>
                    </li>
                ))}
            </ul>
        </>
    )
}