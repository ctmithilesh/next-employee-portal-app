'use server';

import { cookies } from "next/headers";

export const fetchCookies = () => {

    return cookies().get('name')

}