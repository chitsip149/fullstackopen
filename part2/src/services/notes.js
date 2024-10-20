import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const response = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
    }
    return response.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    return axios.put(baseUrl, newObject).then (response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}

