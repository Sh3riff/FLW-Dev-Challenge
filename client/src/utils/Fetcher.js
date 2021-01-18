import axios from 'axios';

const baseUrl = "http://localhost:8080"
export const ApiGet = async (url, user ,country) => {
    const whois = user ? user.email : ""
    let parseHeader = whois ? { whois, country } : { country }
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/${url}`, {
            headers: parseHeader
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
};

export const ApiPlus = ( method, url, body, user, country) => {
    const whois = user ? user.email : ""
    let parseHeader = whois ? { whois, country } : { country }  
    return new Promise((resolve, reject) => {
        axios[method](`${baseUrl}/${url}`, body,  {
            headers: parseHeader
        })
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })

}