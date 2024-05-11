import RateList from "@/views/Currency/Show/RateList";
import {useLocation} from "react-router-dom";
const ShowCurrencyRate = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currency = searchParams.get('currency') || ''
    return (
        <>
            <div className="mb-8 bg-white p-3 rounded">
                <h3 className="mb-3">Currency rate</h3>
                <RateList currency={currency} />
            </div>
        </>
    )
}

export default ShowCurrencyRate
