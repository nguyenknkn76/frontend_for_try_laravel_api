import axios from 'axios'

const baseUrl = 'http://localhost:8000/api/notes'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const update = async (note) => {
    const updatedNote = {...note, important: !note.important}
    const res = await axios.put(`${baseUrl}/${note.id}`, updatedNote)
    return res.data
}

const udpateContent = async (newNote) => {
    const res = await axios.put(`${baseUrl}/${newNote.id}`, newNote)
    return res.data
}

const create = async (newNote, loggedinToken) => {
    setToken(loggedinToken)
    const config = {
        headers: { Authrorization: token },
    }
    console.log(config, newNote, baseUrl)
    const res = await axios.post(baseUrl, newNote)
    return res.data
}

const remove = async note => {
    const res = await axios.delete(`${baseUrl}/${note.id}`)
    console.log(res)
    return res.data
}

export default {getAll, update, create,  remove, setToken, udpateContent}