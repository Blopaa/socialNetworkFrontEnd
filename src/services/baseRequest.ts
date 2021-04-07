import axios from 'axios'
// @ts-ignore
const {SNOWPACK_PUBLIC_API_URI} = import.meta.env;

export const getRequest = async (url: string, headers?: {}) => {
    try {
        const {data, status} = await axios.get( SNOWPACK_PUBLIC_API_URI + url, {headers: headers})
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}

export const postRequest = async (url: string, body: {}, headers?: {}) => {
    try {
        const {data, status} = await axios.post(SNOWPACK_PUBLIC_API_URI + url, body, {headers: headers})
        return {data, status}
    }catch (e) {
        const {status} = e.response;
        const {message} = e.response.data
        return {status, message}
    }
}

export const deleteRequest = async (url: string, header: {}) => {
    try {
        const {data, status} = await axios.delete(SNOWPACK_PUBLIC_API_URI + url, {headers: header})
        return {data, status}
    }catch (e){
        const {status} = e.response;
        const {message} = e.response.data
        console.log(message)
        return {status, message}
    }
}