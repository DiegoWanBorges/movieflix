import axios, { AxiosRequestConfig } from 'axios'
import { CLIENTE_ID, CLIENTE_SECRET, userToken, doLogout } from './auth'
import qs from 'query-string'
import base64 from 'base-64'

type  LoginData = {
    username:string;
    password:string;
}

const BASE_URL= process.env.REACT_APP_BACKEND_URL ?? "https://diegowanborges-movieflix.herokuapp.com";

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    switch(error.response.status) { 
        case 401: { 
            doLogout();
           break; 
        } 
     }
    return Promise.reject(error);
  });

export const makeRequest =(params: AxiosRequestConfig) => {
    return axios({
        ...params,
        baseURL:BASE_URL
    })
}

export async function makePrivateRequest (params: AxiosRequestConfig) {
    const sessionData = await userToken();
    const headers ={
        Authorization: `Bearer ${sessionData}`
    }
    return makeRequest({...params,headers});
}

export const makeLogin = (loginData: LoginData ) => {
    const token= `${CLIENTE_ID}:${CLIENTE_SECRET}`;;
    const headers ={
        Authorization:`Basic ${base64.encode(token)}`,
        'Content-Type': `application/x-www-form-urlencoded`
    }
    const payload = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })
    return makeRequest({
        url:'/oauth/token',
        data:payload,
        method:'POST',
        headers:headers
    })
}