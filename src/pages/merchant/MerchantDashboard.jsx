import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMerchant, selectToken } from '../../providers/app/appSlice'
import { CURRENCY, URLS } from '../../config/constants'
import { formatCurrency, makeRequestOne } from '../../config/config'
import StatCard from '../../components/common/StatCard'

const MerchantDashboard = () => {
    const [stats, setStats] = useState(null)
    const merchant = useSelector(selectMerchant)
    const token = useSelector(selectToken)

    const loadStats = () => {
        Promise.all(
            [
                makeRequestOne(URLS.ORDERS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id }).then(res => {
                    return { orders: res?.data?.meta?.total }
                }).catch(() => {
                    return { orders: 0 }
                }),
                makeRequestOne(URLS.STATEMENT, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id }).then(res => {
                    return { statements: res?.data?.meta?.total }
                }).catch(() => {
                    return { statements: 0 }
                }),
                makeRequestOne(URLS.PRODUCTS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id }).then(res => {
                    return { products: res?.data?.meta?.total }
                }).catch(() => {
                    return { products: 0 }
                }),
            ]
        ).then(responses => {
            const result = responses.reduce((obj, item) => {
                const key = Object.keys(item)[0];
                const value = item[key];
                obj[key] = value;
                return obj;
            }, {});
            setStats(result)
        }).catch(err => {

        })
    }

    useEffect(() => {
        loadStats()
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
                    <StatCard title="Your balance"
                        value={`${CURRENCY} ${formatCurrency(parseFloat(merchant?.balance))}`}
                        tagline="Available balance"
                    />
                    <StatCard title="Your Products"
                        value={stats?.products ?? 0}
                        tagline="Total No. of products"
                    />
                    <StatCard title="Your Orders"
                        value={stats?.orders ?? 0}
                        tagline="Total No. of orders"
                    />
                    <StatCard title="Your Statements"
                        value={stats?.statements ?? 0}
                        tagline="Total No. of statements"
                    />

                </div>

            </div>
        </div>
    )
}

export default MerchantDashboard