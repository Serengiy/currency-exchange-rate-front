export type availableCurrenciesResponse = {
    data: rateItem[],
    meta: meta
}

export type meta = {
    current_page?: number
    total?: number
    last_page?: number
}

export type currencyParams = {
    base_currency?: string,
    currency: string,
    rate_updated_at?: string,
    page?: number,
}

export type rateItem = {
    currency: string
    rate: string
    updated_at: string,
}

