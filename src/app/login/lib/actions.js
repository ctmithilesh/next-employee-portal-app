'use server';
import axios from "axios";
import { redirect } from "next/navigation";
const api = 'http://localhost:8080/api/auth/signin'
import { cookies } from 'next/headers'
import { revalidatePath } from "next/cache";
let data = null
export async function loginUser(email, password) {

    const cookieStore = cookies()

    // console.log('email', email, 'password', password)
    await axios.post(api, { email, password })
        .then(res => {
            console.log('data', res)
            data = res.data
            const oneDay = 24 * 60 * 60 * 1000
            cookieStore.set('id', data.id, { expires: Date.now() + oneDay })
            cookieStore.set('email', data.email, { expires: Date.now() + oneDay })
            cookieStore.set('token', data.accessToken, { expires: Date.now() + oneDay })
        })
        .catch(err => {
            console.log(err)
        })


    console.log('New Cookie Value', cookieStore)
    revalidatePath('/', 'layout')
    redirect('/employee-dashboard')


}