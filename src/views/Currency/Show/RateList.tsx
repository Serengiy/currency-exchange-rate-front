import {useEffect, useState} from "react";
import useCurrency from "@/utils/hooks/useCurrency";
import Alert from "@/components/ui/Alert";
import useTimeOutMessage from "@/utils/hooks/useTimeOutMessage";
import {meta, rateItem} from "@/@types/currency";
import {Pagination, Table} from "@/components/ui";

type currencyParams = {
    base_currency?: string
    currency: string
    rate_updated_at?: string
    page?: number
}

const RateList = ({currency}: currencyParams) => {
    const [message, setMessage] = useTimeOutMessage()
    const [rate, setRate] = useState<rateItem[]>()
    const [currentPage, setCurrentPage] = useState<number|undefined>()
    const [total, setTotal ] = useState<number|undefined>()
    const {currencyShowRate} = useCurrency()
    const fetchData =  async (
        values: currencyParams
    )  =>{
        try {
            const {base_currency, currency, rate_updated_at, page} = values
            const resp = await currencyShowRate({base_currency, currency, rate_updated_at, page})
            if (resp?.data) {
                setRate(resp.data?.data)
                setTotal(resp.data?.meta?.total)
                setTotal(resp.data?.meta?.current_page)
                setTotal(resp.data?.meta?.last_page)
            }
        } catch (errors: any) {
            setMessage(errors)
        }
    }
    const handlePageChange = (page: number)=>{
        fetchData({currency, page})
    }
    useEffect(() => {
        fetchData({currency})
    }, []);

    return (
        <>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}
            <Table

            >
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                    <th>Updated at</th>
                </tr>
                </thead>
                <tbody>
                {rate?.map((item) => (
                    <tr key={item.updated_at}>
                        <td> {item.currency}</td>
                        <td>{item.rate}</td>
                        <td>{item.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination
                currentPage={currentPage}
                totalPages={total}
                total={total}
                onChange={handlePageChange}
            />
        </>
    )
}

export default RateList
