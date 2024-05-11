import {useEffect, useState} from "react";
import useCurrency from "@/utils/hooks/useCurrency";
import Alert from "@/components/ui/Alert";
import useTimeOutMessage from "@/utils/hooks/useTimeOutMessage";
import {rateItem} from "@/@types/currency";
import {Table} from "@/components/ui/Table";
import {Pagination} from "@/components/ui";
import {Link} from "react-router-dom";

const RateList = () => {
    const [message, setMessage] = useTimeOutMessage()
    const [rates, setRate] = useState<rateItem[]>()
    const {availableCurrenciesIndex} = useCurrency()

    const fetchData =  async ()  =>{
        try {
            const resp = await availableCurrenciesIndex()
            if (resp?.data) {
                setRate(resp.data?.data)
            }
        } catch (errors: any) {
            setMessage(errors)
        }
    }
    useEffect(() => {
        fetchData()
        setInterval(() =>{
            fetchData()
        }, 60000);
    }, []);

    return (
        <>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}
            <div>
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
                    {rates?.map((item) => (
                        <tr key={item.currency}>
                            <td >
                                <Link to={`/rate-currency/show?currency=${item.currency}`}>
                                    {item.currency}
                                </Link>
                            </td>
                            <td>{item.rate}</td>
                            <td>{item.updated_at}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default RateList
