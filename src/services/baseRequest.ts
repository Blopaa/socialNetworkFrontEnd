import axios from 'axios'

const baseUri = "http://localhost:3000";

export const getRequest = async (url: string, headers?: {}) => {
    try {
        const {data, status} = await axios.get( baseUri + url, {headers: headers})
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}

export const postRequest = async (url: string, body: {}, headers?: {}) => {
    try {
        const {data, status} = await axios.post(baseUri + url, body, {headers: headers})
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}

export const deleteRequest = async (url: string, header: {}) => {
    try {
        const {data, status} = await axios.delete(baseUri + url, {headers: header})
        return {data, status}
    }catch (e){
        const {status} = e.response;
        const {message} = e.response.data
        console.log(message)
        return {status, message}
    }
}