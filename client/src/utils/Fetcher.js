import axios from 'axios';
import { useLocalStorage } from './'

const baseUrl = "http://localhost:8080"
export const ApiGet = async (url, id=0) => {
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
     const whois = id || null
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/${url}`, {
            headers: {whois, usersCountry}
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
};

export const ApiPlus = (url, method, whois, body) => {
    

    axios[method](`${baseUrl}/${url}`)

}