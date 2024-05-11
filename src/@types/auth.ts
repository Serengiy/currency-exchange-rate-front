export type SignInCredential = {
    email: string
    password: string
}

export type authToken = {
    token:string
}

export type SignInResponse = {
    token: string
    user: {
        name: string
        email: string
    }
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
    name: string
    email: string
    password: string,
    password_confirmation: string
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    password: string
}
