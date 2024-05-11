import ApiService from './ApiService'
import type {
    SignInCredential,
    SignUpCredential,
    ForgotPassword,
    ResetPassword,
    SignInResponse,
    SignUpResponse,
} from '@/@types/auth'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import axios from "axios";
import appConfig from "@/configs/app.config";
import {authToken} from "@/@types/auth";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {availableCurrenciesResponse, currencyParams} from "@/@types/currency";

const {apiUrl} = appConfig
// const token = useSelector((state:RootState)=>state.auth.session.token)
export async function apiAvailableCurrenciesIndex() {
    return ApiService.fetchData<availableCurrenciesResponse>({
        url: apiUrl+'/api/rates',
        method: 'get',
        headers:{
            'Authorization': 'Bearer ' + 'token'
        },
    })
}

export async function apiShowCurrencyRate(params: currencyParams) {
    let url =  apiUrl+'/api/rates/show'
    if(params){
        url += '?'
        const queryParams = [];
        // Assuming currencyParams is an object with key-value pairs
        if (params.base_currency) {
            queryParams.push(`base_currency=${params.base_currency}`);
        }
        if (params.currency) {
            queryParams.push(`currency=${params.currency}`);
        }
        if (params.rate_updated_at) {
            queryParams.push(`rate_updated_at=${params.rate_updated_at}`);
        }
        if (params.page) {
            queryParams.push(`page=${params.page}`);
        }
        if (queryParams.length > 0) {
            url += `?${queryParams.join('&')}`;
        }
    }

    return ApiService.fetchData<availableCurrenciesResponse>({
        url: url,
        method: 'get',
        headers:{
            'Authorization': 'Bearer ' + 'token'
        },
    })
}

// export async function apiSignUp(data: SignUpCredential) {
//     return ApiService.fetchData<SignUpResponse>({
//         url: apiUrl+'/api/register',
//         method: 'post',
//         data,
//     })
// }
//
// export async function apiSignOut(token: any) {
//     return ApiService.fetchData({
//         url: apiUrl+'/api/logout',
//         method: 'post',
//         headers:{
//             'Authorization': 'Bearer ' + token
//         }
//     })
// }

export async function apiForgotPassword(data: ForgotPassword) {
    return ApiService.fetchData({
        url: '/forgot-password',
        method: 'post',
        data,
    })
}

export async function apiResetPassword(data: ResetPassword) {
    return ApiService.fetchData({
        url: '/reset-password',
        method: 'post',
        data,
    })
}
