import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Rating } from '@mantine/core'
import AdminSidebar from '../components/account/AdminSidebar'
import { useSelector } from 'react-redux'
import { selectLoggedIn, selectToken, selectUser } from '../providers/app/appSlice'
import { ADMIN_BASE_URL, URLS } from '../config/constants'
import { makeRequestOne } from '../config/config'

const AdminLayout = () => {
    const [merchants, setMerchants] = useState(0)
    const loggedIn = useSelector(selectLoggedIn)
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const loadMerchants = () => {
        makeRequestOne(URLS.MERCHANTS, 'GET', { Authorization: `Bearer ${token}` }, {}, {}).then(res => {
            setMerchants(res?.data?.meta?.total)
        }).catch(() => {
            return { merchants: 0 }
        })
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate(`/account/auth?redirect=/${ADMIN_BASE_URL}/`)
        }
        else {
            if (user?.user?.isAdministrator === false) {
                navigate(`/merchant/`)
            }
        }
        loadMerchants()
    }, [loggedIn])
    return (
        <div>

            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                    <div className="d-flex align-items-center pb-3">
                        <div
                            className="img-thumbnail rounded-circle position-relative flex-shrink-0 d-flex align-items-center justify-content-center"
                            style={{ width: "6.375rem", height: "6.375rem" }}
                        >
                            <img
                                className="rounded-circle"
                                src="/assets/images/esiolo-logo.jpg"
                                alt="Createx Studio"
                            />
                        </div>
                        <div className="ps-3">
                            <h3 className="text-light fs-lg mb-0">Admin</h3>
                            <span className="d-block text-light fs-ms opacity-60 py-1">
                                Esiolo Admin Dashboard
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="text-sm-end me-5">
                            <div className="text-light fs-base">Total merchants</div>
                            <h3 className="text-light">{merchants}</h3>
                        </div>
                        <div className="text-sm-end d-none">
                            <div className="text-light fs-base">System rating</div>
                            <div className="star-rating">
                                <Rating value={4.5} fractions={2} />
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
                        <AdminSidebar />
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
    )
}

export default AdminLayout