import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchRepositories } from "../store/slices/repositoriesSlice";

export function RepositoryList() {
    const dispatch = useAppDispatch();
    const {repositories, loading} = useAppSelector(state => state.repositories);
    const [username, setUsername] = useState("");

    function handleSearch(){
        dispatch(fetchRepositories(username));
    }

    return (
        <>
            <h1>Buscar repositórios do Github</h1>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Digite o nome do usuário"
            />
            <button onClick={handleSearch}>Buscar</button>
            {loading && <p>Carregando...</p>}
            <ul>
                {repositories.map((repositories) => (
                    <li key={repositories.id}>
                        <a 
                            href={repositories.html_url} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            {repositories.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}