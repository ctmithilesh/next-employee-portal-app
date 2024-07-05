'use server';

import axios from "axios";
const _api = 'https://fakestoreapi.com/products'
let data = null
export async function fetchProducts() {


    await axios.get(_api)
        .then(res => {
            console.log(res)
            data = res.data
        })
        .catch(err => {
            console.log(err)
        })


    return data;

}
export async function fetchDetails(id) {

    await axios.get(`${_api}/${id}`)
        .then(res => {
            console.log(res)
            data = res.data
        })
        .catch(err => {
            console.log(err)
        })


    return data;
    

}