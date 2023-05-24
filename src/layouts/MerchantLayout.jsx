import React, { useEffect } from 'react'
import MerchantSidebar from '../components/account/MerchantSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLoggedIn, selectUser } from '../providers/app/appSlice'
import { Center, Container, Title } from '@mantine/core'

const MerchantLayout = () => {
    const loggedIn = useSelector(selectLoggedIn)
    const user = useSelector(selectUser)
    console.log(user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedIn) {
            navigate('/account/auth')
        }
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
                                            src="/assets/img/marketplace/account/avatar.png"
                                            alt="Createx Studio"
                                        />
                                    </div>
                                    <div className="ps-3">
                                        <h3 className="text-light fs-lg mb-0">Createx Studio</h3>
                                        <span className="d-block text-light fs-ms opacity-60 py-1">
                                            Member since November 2019
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="text-sm-end me-5">
                                        <div className="text-light fs-base">Total sales</div>
                                        <h3 className="text-light">426</h3>
                                    </div>
                                    <div className="text-sm-end">
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