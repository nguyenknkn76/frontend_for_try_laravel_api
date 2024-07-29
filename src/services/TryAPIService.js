import axios from "axios"

const dictionary = async(term) => {
    const res = await axios.get(`http://localhost:8000/api/try-call-api/${term}`)
    return res.data
}

export default {dictionary}