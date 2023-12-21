import React, { useEffect, useState } from 'react'
import StatCard from '../../components/common/StatCard'
import { makeRequestOne } from '../../config/config'
import { useSelector } from 'react-redux'
import { selectToken } from '../../providers/app/appSlice'
import { URLS } from '../../config/constants'

const AdminDashboard = () => {

    const [stats, setStats] = useState(null)

    const token = useSelector(selectToken)

    const loadStats = () => {
        Promise.all([
            makeRequestOne(URLS.MERCHANTS, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { merchants: res?.data?.meta?.total }
            }).catch(() => {
                return { merchants: 0 }
            }),

            makeRequestOne(URLS.ORDERS, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { orders: res?.data?.meta?.total }
            }).catch(() => {
                return { orders: 0 }
            }),

            makeRequestOne(URLS.STATEMENT, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { statements: res?.data?.meta?.total }
            }).catch(() => {
                return { statements: 0 }
            }),

            makeRequestOne(URLS.CATEGORIES, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { categories: res?.data?.meta?.total }
            }).catch(() => {
                return { categories: 0 }
            }),

            makeRequestOne(URLS.PRODUCTS, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { products: res?.data?.meta?.total }
            }).catch(() => {
                return { products: 0 }
            }),

            makeRequestOne(URLS.CLIENTS, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { clients: res?.data?.meta?.total }
            }).catch((e) => {
                return { clients: 0 }
            }),

            makeRequestOne(URLS.MERCHANT_CATEGORIES, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
                return { merchant_categories: res?.data?.meta?.total }
            }).catch((e) => {
                return { merchant_categories: 0 }
            }),


        ])
            .then(responses => {
                console.log(responses)
                const result = responses.reduce((obj, item) => {
                    const key = Object.keys(item)[0];
                    const value = item[key];
                    obj[key] = value;
                    return obj;
                }, {});
                setStats(result)
            }).catch(err => {
                console.log("Promises error: ", err)
            })
    }

    useEffect(() => {
        loadStats()
    }, [])

    return (
        <div>
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 py-2 text-center text-sm-start">Your sales / earnings</h2>

                <div className="row mx-n2 pt-2">
                    <StatCard title="Merchants"
                        value={stats?.merchants ?? 0}
                        tagline="Total No. of merchants"
                    />
                    <StatCard title="Merchant Categories"
                        value={stats?.merchant_categories ?? 0}
                        tagline="Total No. of merchant categories"
                    />
                    <StatCard title="Product Categories"
                        value={stats?.categories ?? 0}
                        tagline="Total No. of product categories"
                    />
                    <StatCard title="Products"
                        value={stats?.products ?? 0}
                        tagline="Total No. of products"
                    />
                    <StatCard title="Orders"
                        value={stats?.orders ?? 0}
                        tagline="Total No. of orders"
                    />
                    <StatCard title="Statements"
                        value={stats?.statements ?? 0}
                        tagline="Total No. of statements"
                    />
                    <StatCard title="Clients/Customers"
                        value={stats?.clients ?? 0}
                        tagline="Total No. of clients"
                    />
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard