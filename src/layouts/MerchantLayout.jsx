import React, { useEffect, useState } from 'react'
import MerchantSidebar from '../components/account/MerchantSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLoggedIn, selectMerchant, selectToken, selectUser } from '../providers/app/appSlice'
import { Center, Container, Title } from '@mantine/core'
import { makeRequestOne, toDate } from '../config/config'
import { URLS } from '../config/constants'

const MerchantLayout = () => {
    const [orders, setOrders] = useState(0)
    const loggedIn = useSelector(selectLoggedIn)
    const user = useSelector(selectUser)
    const merchant = useSelector(selectMerchant)
    const token = useSelector(selectToken)

    const navigate = useNavigate()

    const loadOrders = () => {
        makeRequestOne(URLS.ORDERS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "filter[merchant_id]": merchant?.id }).then(res => {
            setOrders(res?.data?.meta?.total)
        }).catch(() => {
            return { merchants: 0 }
        })
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate('/account/auth')
        }
        loadOrders()
    }, [loggedIn])
    return (
        <>
            {
                user?.user?.merchant ? (
                    <div>
                        <div className="page-title-overlap bg-accent pt-4">
                            <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                                <div className="d-flex align-items-center pb-3">
                                    <div
                                        className="img-thumbnail rounded-circle position-relative flex-shrink-0"
                                        style={{ width: "6.375rem", height: "6.375rem" }}
                                    >
                                        <img
                                            className="rounded-circle"
                                            src={merchant?.logo}
                                            alt={merchant?.name}
                                        />
                                    </div>
                                    <div className="ps-3">
                                        <h3 className="text-light fs-lg mb-0 text-capitalize">{merchant?.name}</h3>
                                        <span className="d-block text-light fs-ms opacity-60 py-1">
                                            Member since {toDate(merchant?.created_at)}
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="text-sm-end me-5">
                                        <div className="text-light fs-base">Total orders</div>
                                        <h3 className="text-light">{orders}</h3>
                                    </div>
                                    <div className="text-sm-end d-none">
                                        <div className="text-light fs-base">Seller rating</div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                        <div className="text-light opacity-60 fs-xs">Based on 98 reviews</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container mb-5 pb-3">
                            <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                                <div className="row">
                                    {/* Sidebar*/}
                                    <MerchantSidebar />
                                    {/* Content*/}
                                    <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                                        <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                                            <Outlet />
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <Container h={400}>
                        <Center className='h-100'>
                            <Title align='center' weight={400} size={16} color='dimmed'>Your merchant account has not been created. Contact Support</Title>
                        </Center>
                    </Container>
                )
            }
        </>
    )
}

export default MerchantLayout