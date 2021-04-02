import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const CLIENTE_ID = 'movieflix';
export const CLIENTE_SECRET =  'movieflix-xyz';


export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export async function saveSessionData (token: string){
    await AsyncStorage.setItem('token', token);
 }

 export async function userToken() {
    const token = await AsyncStorage.getItem('token')
    return token 
}

export async function getAccessTokenDecoded (){
    const sessionData = await userToken() || " ";
    try {
        const tokenDecoded = jwtDecode(sessionData);
        return tokenDecoded as AccessToken;
    } catch (error) {
        return {} as AccessToken
    }
}
export async function isTokenValid (){
    const data = await getAccessTokenDecoded();
    if (Date.now() <= data.exp * 1000) {
        return true;
    }
    return false;
}
export async function isAuthenticated() {
    try {
       const token = await userToken();
       return token ? true : false;
    } catch (error) {
       console.log(error)
    }
 }

export async function isAllowedByRole (routeRoles: Role[] = []) {
    if (routeRoles.length === 0) {
        return true;
    }
    const  data  = await getAccessTokenDecoded();
    return routeRoles.some(role => data.authorities?.includes(role));
}

export async function doLogout() {
    try {
       await AsyncStorage.removeItem("token")
    } catch (error) {
       console.log(error)
    }
 }