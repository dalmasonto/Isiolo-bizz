import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMerchant, selectToken } from '../../providers/app/appSlice'
import { CURRENCY, URLS } from '../../config/constants'
import { formatCurrency, makeRequestOne } from '../../config/config'

const MerchantDashboard = () => {
    const [stats, setStats] = useState(null)
    const merchant = useSelector(selectMerchant)
    const token = useSelector(selectToken)
    const loadData = async() =>{
        const stats_ = {}
        makeRequestOne(URLS.ORDERS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id}).then(res=>{
            console.log(res)
            stats_.orders = res?.data?.data?.meta?.total
        }).catch(()=>{})
        makeRequestOne(URLS.STATEMENT, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id}).then(res => {
            stats_.statements = res?.data?.data?.meta?.total
        }).catch(()=>{})
        makeRequestOne(URLS.PRODUCTS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id}).then(res => {
            stats_.products = res?.data?.data?.meta?.total
        }).catch(()=>{})
        setStats(stats_)
    }

    useEffect(() => {
        loadData()
    }, [])

    console.log("stats: ", stats)

    return (
        <div>
            <>
            {/* {JSON.stringify(merchant ? merchant : {}, null, 4)} */}
            </>
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 py-2 text-center text-sm-start">Your sales / earnings</h2>
                <div className="row mx-n2 pt-2">
                    <div className="col-md-4 col-sm-6 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Earnings (before taxes)</h3>
                            <p className="h2 mb-2">
                                $1,690.<small>50</small>
                            </p>
                            <p className="fs-ms text-muted mb-0">Sales 8/1/2021 - 8/15/2021</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Your balance</h3>
                            <p className="h2 mb-2">
                                {CURRENCY} {formatCurrency(parseFloat(merchant?.balance))}
                            </p>
                            <p className="fs-ms text-muted mb-0">Available balance</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Lifetime earnings</h3>
                            <p className="h2 mb-2">
                                $9,156.<small>74</small>
                            </p>
                            <p className="fs-ms text-muted mb-0">Based on list price</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MerchantDashboard