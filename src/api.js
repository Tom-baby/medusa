import axios from 'axios'
import qs from 'qs'
import config from './config'
// ${config.Access_token_url}


// export const getAccesToken = params => {
//     return axios.post(`${config.Access_token_url}`, qs.stringify(params), {
//         headers: { accept: 'application/json' }
//     }).then(res => res.data)
// }
export const getUserAccesToken = params => {
    return axios.post(`/login/oauth/access_token`, qs.stringify(params), {
        headers: { accept: 'application/json' }
    }).then(res => res.data)
}
export const getUserInfo = params => {
    return axios.get(`/user`,  { params: params }).then(res => res.data)
}