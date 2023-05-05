import React from 'react'

const AddProduct = () => {
    return (
        <>
            {/* Dashboard header*/}
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                    <div className="d-flex align-items-center pb-3">
                        <div
                            className="img-thumbnail rounded-circle position-relative flex-shrink-0"
                            style={{ width: "6.375rem" }}
                        >
                            <img
                                className="rounded-circle"
                                src="img/marketplace/account/avatar.png"
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
                        <aside className="col-lg-4 pe-xl-5">
                            {/* Account menu toggler (hidden on screens larger 992px)*/}
                            <div className="d-block d-lg-none p-4">
                                <a
                                    className="btn btn-outline-accent d-block"
                                    href="dashboard-add-new-product.html#account-menu"
                                    data-bs-toggle="collapse"
                                >
                                    <i className="ci-menu me-2" />
                                    Account menu
                                </a>
                            </div>
                            {/* Actual menu*/}
                            <div className="h-100 border-end mb-2">
                                <div className="d-lg-block collapse" id="account-menu">
                                    <div className="bg-secondary p-4">
                                        <h3 className="fs-sm mb-0 text-muted">Account</h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-settings.html"
                                            >
                                                <i className="ci-settings opacity-60 me-2" />
                                                Settings
                                            </a>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-purchases.html"
                                            >
                                                <i className="ci-basket opacity-60 me-2" />
                                                Purchases
                                            </a>
                                        </li>
                                        <li className="mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-favorites.html"
                                            >
                                                <i className="ci-heart opacity-60 me-2" />
                                                Favorites<span className="fs-sm text-muted ms-auto">4</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="bg-secondary p-4">
                                        <h3 className="fs-sm mb-0 text-muted">Seller Dashboard</h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-sales.html"
                                            >
                                                <i className="ci-dollar opacity-60 me-2" />
                                                Sales
                                                <span className="fs-sm text-muted ms-auto">$1,375.00</span>
                                            </a>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-products.html"
                                            >
                                                <i className="ci-package opacity-60 me-2" />
                                                Products<span className="fs-sm text-muted ms-auto">5</span>
                                            </a>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3 active"
                                                href="dashboard-add-new-product.html"
                                            >
                                                <i className="ci-cloud-upload opacity-60 me-2" />
                                                Add New Product
                                            </a>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="dashboard-payouts.html"
                                            >
                                                <i className="ci-currency-exchange opacity-60 me-2" />
                                                Payouts
                                            </a>
                                        </li>
                                        <li className="mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="account-signin.html"
                                            >
                                                <i className="ci-sign-out opacity-60 me-2" />
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </aside>
                        {/* Content*/}
                        <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                                {/* Title*/}
                                <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                                    <h2 className="h3 py-2 me-2 text-center text-sm-start">
                                        Add New Product
                                    </h2>
                                    <div className="py-2">
                                        <select className="form-select me-2" id="unp-category">
                                            <option>Select category</option>
                                            <option>Photos</option>
                                            <option>Graphics</option>
                                            <option>UI Design</option>
                                            <option>Web Themes</option>
                                            <option>Fonts</option>
                                            <option>Add-Ons</option>
                                        </select>
                                    </div>
                                </div>
                                <form>
                                    <div className="mb-3 pb-2">
                                        <label className="form-label" htmlFor="unp-product-name">
                                            Product name
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="unp-product-name"
                                        />
                                        <div className="form-text">
                                            Maximum 100 characters. No HTML or emoji allowed.
                                        </div>
                                    </div>
                                    <div className="file-drop-area mb-3">
                                        <div className="file-drop-icon ci-cloud-upload" />
                                        <span className="file-drop-message">
                                            Drag and drop here to upload product screenshot
                                        </span>
                                        <input className="file-drop-input" type="file" />
                                        <button
                                            className="file-drop-btn btn btn-primary btn-sm mb-2"
                                            type="button"
                                        >
                                            Or select file
                                        </button>
                                        <div className="form-text">
                                            1000 x 800px ideal size for hi-res displays
                                        </div>
                                    </div>
                                    <div className="mb-3 py-2">
                                        <label className="form-label" htmlFor="unp-product-description">
                                            Product description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={6}
                                            id="unp-product-description"
                                            defaultValue={""}
                                        />
                                        <div className="bg-secondary p-3 fs-ms rounded-bottom">
                                            <span className="d-inline-block fw-medium me-2 my-1">
                                                Markdown supported:
                                            </span>
                                            <em className="d-inline-block border-end pe-2 me-2 my-1">
                                                *Italic*
                                            </em>
                                            <strong className="d-inline-block border-end pe-2 me-2 my-1">
                                                **Bold**
                                            </strong>
                                            <span className="d-inline-block border-end pe-2 me-2 my-1">
                                                - List item
                                            </span>
                                            <span className="d-inline-block border-end pe-2 me-2 my-1">
                                                ##Heading##
                                            </span>
                                            <span className="d-inline-block">--- Horizontal rule</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <label className="form-label" htmlFor="unp-standard-price">
                                                Standard license price
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="ci-dollar" />
                                                </span>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="unp-standard-price"
                                                />
                                            </div>
                                            <div className="form-text">
                                                Average marketplace price for this category is $15.
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <label className="form-label" htmlFor="unp-extended-price">
                                                Extended license price
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="ci-dollar" />
                                                </span>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="unp-extended-price"
                                                />
                                            </div>
                                            <div className="form-text">
                                                Typically 10x of the Standard license price.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 py-2">
                                        <label className="form-label" htmlFor="unp-product-tags">
                                            Product tags
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            id="unp-product-tags"
                                            defaultValue={""}
                                        />
                                        <div className="form-text">
                                            Up to 10 keywords that describe your item. Tags should all be
                                            in lowercase and separated by commas.
                                        </div>
                                    </div>
                                    <div className="mb-3 pb-2">
                                        <label className="form-label" htmlFor="unp-product-files">
                                            Product files for sale
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="unp-product-files"
                                        />
                                        <div className="form-text">Maximum file size is 1GB</div>
                                    </div>
                                    <button className="btn btn-primary d-block w-100" type="submit">
                                        <i className="ci-cloud-upload fs-lg me-2" />
                                        Upload Product
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct