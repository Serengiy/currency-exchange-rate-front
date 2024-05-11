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

const {apiUrl} = appConfig
export async function apiSignIn(data: SignInCredential) {
    return ApiService.fetchData<SignInResponse>({
        url: apiUrl+'/api/login',
        method: 'post',
        data,
    })
}

export async function apiSignUp(data: SignUpCredential) {
    return ApiService.fetchData<SignUpResponse>({
        url: apiUrl+'/api/register',
        method: 'post',
        data,
    })
}

export async function apiSignOut(token: any) {
    return ApiService.fetchData({
        url: apiUrl+'/api/logout',
        method: 'post',
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
}

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
