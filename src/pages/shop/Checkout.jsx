import React from 'react'

const Checkout = () => {
    return (
        <>
            {/* Page Title*/}
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <a className="text-nowrap" href="index.html">
                                        <i className="ci-home" />
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item text-nowrap">
                                    <a href="marketplace-category.html">Market</a>
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
                                            <option value="Argentina">Argentina</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Madagascar" selected="">
                                                Madagascar
                                            </option>
                                            <option value="Spain">Spain</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Order preview on mobile (screens small than 991px)*/}
                                <div className="widget mb-3 d-lg-none">
                                    <h2 className="widget-title">Order summary</h2>
                                    <div className="d-flex align-items-center pb-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/01.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    UI Isometric Devices Pack
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $23.<small>99</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/02.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    Project Devices Showcase
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $18.<small>99</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/03.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    Gravity Devices UI Mockup
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $15.<small>99</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled fs-sm py-3">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Subtotal:</span>
                                            <span className="text-end">
                                                $58.<small>97</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Taxes:</span>
                                            <span className="text-end">
                                                $10.<small>45</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center fs-base">
                                            <span className="me-2">Total:</span>
                                            <span className="text-end">
                                                $69.<small>42</small>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Payment methods accordion*/}
                                <div className="accordion mb-2" id="payment-method" role="tablist">
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
                                    <div className="d-flex align-items-center pb-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/01.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    UI Isometric Devices Pack
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $23.<small>00</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/02.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    Project Devices Showcase
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $18.<small>00</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <a
                                            className="d-block flex-shrink-0 me-2"
                                            href="marketplace-single.html"
                                        >
                                            <img
                                                className="rounded-1"
                                                src="img/marketplace/products/widget/03.jpg"
                                                width={64}
                                                alt="Product"
                                            />
                                        </a>
                                        <div className="ps-1">
                                            <h6 className="widget-product-title">
                                                <a href="marketplace-single.html">
                                                    Gravity Devices UI Mockup
                                                </a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent border-end pe-2 me-2">
                                                    $15.<small>00</small>
                                                </span>
                                                <span className="fs-xs text-muted">Standard license</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled fs-sm pt-3 pb-2 border-bottom">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Subtotal:</span>
                                            <span className="text-end">
                                                $56.<small>00</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Taxes:</span>
                                            <span className="text-end">
                                                $9.<small>30</small>
                                            </span>
                                        </li>
                                    </ul>
                                    <h3 className="fw-normal text-center my-4">
                                        $65.<small>30</small>
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