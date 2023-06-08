import { Image } from '@mantine/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CURRENCY } from '../../config/constants'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../providers/app/appSlice'
import { formatCurrency } from '../../config/config';
import ClientForm from '../../components/clients/ClientForm'

export const ItemSummary = ({ item }) => {
    const images = JSON.parse(item?.product?.images ? item?.product?.images : "[]")

    return (
        <div className="d-flex align-items-center pb-2 border-bottom">
            <Link
                className="d-block flex-shrink-0 me-2"
                to={`/shop/product/${item?.product?.id}/${item?.product?.slug}`}
            >
                <Image
                    radius="md"
                    src={images?.length > 0 ? images[0] : ''}
                    width={64}
                    alt={item.product?.name}
                />
            </Link>
            <div className="ps-1">
                <h6 className="widget-product-title">
                    <Link to={`/shop/product/${item?.product?.id}/${item?.product?.slug}`}>
                        {item?.product?.name}
                    </Link>
                </h6>
                <div className="widget-product-meta">
                    <span className="text-accent border-end pe-2 me-2">
                        {CURRENCY} {formatCurrency(item?.product?.price)}
                    </span>
                    <span className="fs-xs text-muted border-end pe-2 me-2">
                        qty: {item?.qty}
                    </span>
                    <span className='fs-xs text-muted' >
                        {CURRENCY} {formatCurrency(item?.qty * item?.product?.price)}
                    </span>
                </div>
            </div>
        </div>
    )
}

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const items = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    

    return (
        <>
            {/* Page Title*/}
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <Link className="text-nowrap" to={"/"}>
                                        <i className="ci-home" />
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap">
                                    <Link to={'/shop'}>Shop</Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Checkout
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Checkout</h1>
                    </div>
                </div>
            </div>
            <div className="container mb-5 pb-3 position-relative">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        {/* Content*/}
                        <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
                            <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                                {/* Title*/}
                                <h2 className="h6 border-bottom pb-3 mb-3">Billing details</h2>
                                {/* Billing detail*/}
                                <ClientForm />
                            </div>
                        </section>
                        {/* Sidebar*/}
                        {/* Order preview on desktop (screens larger than 991px)*/}
                        <aside className="col-lg-4 d-none d-lg-block ps-xl-5">
                            <hr className="d-lg-none" />
                            <div className="p-4 h-100 ms-auto border-start">
                                <div className="widget px-lg-2 py-2 mb-3">
                                    <h2 className="widget-title text-center">Order summary</h2>

                                    {
                                        items?.map((item, i) => (
                                            <ItemSummary key={`summary_item_${i}`} item={item} />
                                        ))
                                    }

                                    <ul className="list-unstyled fs-sm pt-3 pb-2 border-bottom">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Subtotal:</span>
                                            <span className="text-end">
                                                {CURRENCY} {formatCurrency(cartTotal)}
                                            </span>
                                        </li>
                                    </ul>
                                    <h3 className="fw-normal text-center my-4">
                                        {CURRENCY} {formatCurrency(cartTotal)}
                                    </h3>

                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout