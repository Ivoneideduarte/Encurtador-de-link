
//npm install axios
import axios from 'axios'
//Minha chave Access token: 2ac30d4a2a2a3b8014794b123a4a6191935d24fe
export const key = '2ac30d4a2a2a3b8014794b123a4a6191935d24fe'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api
