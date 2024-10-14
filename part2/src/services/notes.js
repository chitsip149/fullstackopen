import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(response => response.data)
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

