'use server';
import axios from "axios"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const api = 'http://localhost:8080/api/auth/signup'
let data = null
export const registerUser = async (username, email, password) => {

    // console.log('email', email, 'password', password)
    await axios.post(api, { username, email, password })
        .then(res => {
            console.log(res)
            data = res
        })
        .catch(err => {
            console.log(err)
        })
    
    
    redirect('/dashboard')


}

export async function logoutUser(){

    cookies().delete("id");
    cookies().delete("name");
    cookies().delete("token");

    redirect("/login");

}
