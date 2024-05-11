import {apiAvailableCurrenciesIndex, apiShowCurrencyRate} from "@/services/CurrencyService";
import {currencyParams} from "@/@types/currency";

function useCurrency() {
    const availableCurrenciesIndex = async () => {
        try {
            const resp = await apiAvailableCurrenciesIndex()
            if (resp.data) {
                return {
                    status: 'success',
                    data: resp.data,
                }
            }
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const currencyShowRate = async (params: currencyParams) =>{
        try {
            const resp = await apiShowCurrencyRate(params)
            if(resp.data){
                return {
                    status: 'success',
                    data:resp.data
                }
            }
        }catch (errors: any){
            return {
                status:'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    return {
        availableCurrenciesIndex,
        currencyShowRate
    }
}

export default useCurrency
