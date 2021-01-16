import axios from 'axios';

const baseurl = "https://jumga-backend.herokuapp.com"
export const ApiGet = async (url, id) => {
     const whois = id || null
    return new Promise((resolve, reject) => {
        axios.get(`${baseurl}/${url}`, {
            headers: {whois}
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
};

// export const ApiPlus = (url, method, whois, body) => {
    

//     axios[method](`${baseUrl}/${url}`)

// }