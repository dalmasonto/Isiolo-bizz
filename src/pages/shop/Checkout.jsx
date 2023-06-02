import { Button, Image } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { CURRENCY } from '../../config/constants'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../providers/app/appSlice'
import { formatCurrency } from '../../config/config';

const ItemSummary = ({ item }) => {
    const images = JSON.parse(item?.product?.images ? item?.product?.images : "[]")

    return (
        <div className="d-flex align-items-center pb-2 border-bottom">
            <Link
                className="d-block flex-shrink-0 me-2"
                to={`/shop/product/${item.id}`}
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
                    <a href="marketplace-single.html">
                        {item?.product?.name}
                    </a>
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
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        {/* Content*/}
                        <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
                            <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                                {/* Title*/}
                                <h2 className="h6 border-bottom pb-3 mb-3">Billing details</h2>
                                {/* Billing detail*/}
                                <div className="row pb-4 gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="mc-fn">
                                            First name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Jonathan"
                                            id="mc-fn"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="mc-ln">
                                            Last name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Doe"
                                            id="mc-ln"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="mc-email">
                                            Email address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            defaultValue="contact@createx.studio"
                                            id="mc-email"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="mc-company">
                                            Company
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Createx Studio"
                                            id="mc-company"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="mc-country">
                                            Country <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-select" id="mc-country">
                                            <option value="">Select country</option>
                                            <option value="Kenya" selected>Kenya</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Payment methods accordion*/}
                                <div className="accordion mb-2 d-none" id="payment-method" role="tablist">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <a
                                                className="accordion-button"
                                                href="marketplace-checkout.html#card"
                                                data-bs-toggle="collapse"
                                            >
                                                <i className="ci-card fs-lg me-2 mt-n1 align-middle" />
                                                Pay with Credit Card
                                            </a>
                                        </h3>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="card"
                                            data-bs-parent="#payment-method"
                                            role="tabpanel"
                                        >
                                            <div className="accordion-body">
                                                <p className="fs-sm">
                                                    We accept following credit cards:&nbsp;&nbsp;
                                                    <img
                                                        className="d-inline-block align-middle"
                                                        src="img/cards.png"
                                                        style={{ width: 187 }}
                                                        alt="Cerdit Cards"
                                                    />
                                                </p>
                                                <div className="credit-card-wrapper" />
                                                <form className="credit-card-form row g-3">
                                                    <div className="col-sm-6">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="number"
                                                            placeholder="Card Number"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="name"
                                                            placeholder="Full Name"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="expiry"
                                                            placeholder="MM/YY"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="cvc"
                                                            placeholder="CVC"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <button
                                                            className="btn btn-primary d-block w-100"
                                                            type="submit"
                                                        >
                                                            Place order
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <a
                                                className="accordion-button collapsed"
                                                href="marketplace-checkout.html#paypal"
                                                data-bs-toggle="collapse"
                                            >
                                                <i className="ci-paypal me-2 align-middle" />
                                                Pay with PayPal
                                            </a>
                                        </h3>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="paypal"
                                            data-bs-parent="#payment-method"
                                            role="tabpanel"
                                        >
                                            <div className="accordion-body fs-sm">
                                                <p>
                                                    <span className="fw-medium">PayPal</span> - the safer,
                                                    easier way to pay
                                                </p>
                                                <button className="btn btn-primary" type="button">
                                                    Checkout with PayPal
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <a
                                                className="accordion-button collapsed"
                                                href="marketplace-checkout.html#points"
                                                data-bs-toggle="collapse"
                                            >
                                                <i className="ci-money-bag me-2" />
                                                Pay with my account balance
                                            </a>
                                        </h3>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="points"
                                            data-bs-parent="#payment-method"
                                            role="tabpanel"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    You currently have
                                                    <span className="fw-medium">
                                                        &nbsp;$1,375.<small>00</small>
                                                    </span>
                                                    &nbsp;on your account balance.
                                                </p>
                                                <button className="btn btn-primary" type="submit">
                                                    Pay with account balance
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        items.map((item, i) => (
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
                                    <button className='btn btn-primary btn-shadow d-block w-100 mt-4'>Place Order</button>
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