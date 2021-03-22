import axios from 'axios'

export const getRequest = async (url: string, headers?: {}) => {
    try {
        const {data, status} = await axios.get("http://localhost:3000" + url, {headers: headers})
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}

export const postRequest = async (url: string, body: {}, headers?: {}) => {
    try {
        const {data, status} = await axios.post("http://localhost:3000" + url, body, {headers: headers})
        console.log(data)
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}