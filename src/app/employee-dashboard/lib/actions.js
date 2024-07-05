'use server';

import { cookies } from "next/headers";

export const fetchEmailCookie = () => {

    const email = cookies().get('email')

    return email.value

}