import React from 'react'
import MerchantSidebar from '../components/account/MerchantSidebar'
import { Outlet } from 'react-router-dom'
import { Rating } from '@mantine/core'
import AdminSidebar from '../components/account/AdminSidebar'

const AdminLayout = () => {
    return (
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
                            <h3 className="text-light fs-lg mb-0">Admin</h3>
                            <span className="d-block text-light fs-ms opacity-60 py-1">
                                Esiolo Admin Dashboard
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="text-sm-end me-5">
                            <div className="text-light fs-base">Total merchants</div>
                            <h3 className="text-light">12</h3>
                        </div>
                        <div className="text-sm-end">
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