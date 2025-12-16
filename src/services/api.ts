import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com'
});

export async function getRepositories(username: string){
    try{
        const reponse = await api.get(`/users/${username}/repos`);
        return reponse.data;
    } catch (error) {
        console.log(error);
    }
}