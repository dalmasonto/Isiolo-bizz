import React from 'react'

const SingleProduct = () => {
    return (
        <>
            {/* Page Title*/}
            <div className="page-title-overlap bg-dark pt-4">
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
                                    <a href="shop-single-v1.html#">Shop</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Product Page v.1
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Sports Hooded Sweatshirt</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Gallery + details*/}
                <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                    <div className="px-lg-3">
                        <div className="row">
                            {/* Product gallery*/}
                            <div className="col-lg-7 pe-lg-0 pt-lg-4">
                                <div className="product-gallery">
                                    <div className="product-gallery-preview order-sm-2">
                                        <div className="product-gallery-preview-item active" id="first">
                                            <img
                                                className="image-zoom"
                                                src="/assets/img/shop/single/gallery/01.jpg"
                                                data-zoom="/assets/img/shop/single/gallery/01.jpg"
                                                alt="Product image"
                                            />
                                            <div className="image-zoom-pane" />
                                        </div>
                                        <div className="product-gallery-preview-item" id="second">
                                            <img
                                                className="image-zoom"
                                                src="/assets/img/shop/single/gallery/02.jpg"
                                                data-zoom="/assets/img/shop/single/gallery/02.jpg"
                                                alt="Product image"
                                            />
                                            <div className="image-zoom-pane" />
                                        </div>
                                        <div className="product-gallery-preview-item" id="third">
                                            <img
                                                className="image-zoom"
                                                src="/assets/img/shop/single/gallery/03.jpg"
                                                data-zoom="/assets/img/shop/single/gallery/03.jpg"
                                                alt="Product image"
                                            />
                                            <div className="image-zoom-pane" />
                                        </div>
                                        <div className="product-gallery-preview-item" id="fourth">
                                            <img
                                                className="image-zoom"
                                                src="/assets/img/shop/single/gallery/04.jpg"
                                                data-zoom="/assets/img/shop/single/gallery/04.jpg"
                                                alt="Product image"
                                            />
                                            <div className="image-zoom-pane" />
                                        </div>
                                    </div>
                                    <div className="product-gallery-thumblist order-sm-1">
                                        <a
                                            className="product-gallery-thumblist-item active"
                                            href="shop-single-v1.html#first"
                                        >
                                            <img
                                                src="/assets/img/shop/single/gallery/th01.jpg"
                                                alt="Product thumb"
                                            />
                                        </a>
                                        <a
                                            className="product-gallery-thumblist-item"
                                            href="shop-single-v1.html#second"
                                        >
                                            <img
                                                src="/assets/img/shop/single/gallery/th02.jpg"
                                                alt="Product thumb"
                                            />
                                        </a>
                                        <a
                                            className="product-gallery-thumblist-item"
                                            href="shop-single-v1.html#third"
                                        >
                                            <img
                                                src="/assets/img/shop/single/gallery/th03.jpg"
                                                alt="Product thumb"
                                            />
                                        </a>
                                        <a
                                            className="product-gallery-thumblist-item"
                                            href="shop-single-v1.html#fourth"
                                        >
                                            <img
                                                src="/assets/img/shop/single/gallery/th04.jpg"
                                                alt="Product thumb"
                                            />
                                        </a>
                                        <a
                                            className="product-gallery-thumblist-item video-item"
                                            href="https://www.youtube.com/watch?v=1vrXpMLLK14"
                                        >
                                            <div className="product-gallery-thumblist-item-text">
                                                <i className="ci-video" />
                                                Video
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Product details*/}
                            <div className="col-lg-5 pt-4 pt-lg-0">
                                <div className="product-details ms-auto pb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <a href="shop-single-v1.html#reviews" data-scroll="">
                                            <div className="star-rating">
                                                <i className="star-rating-icon ci-star-filled active" />
                                                <i className="star-rating-icon ci-star-filled active" />
                                                <i className="star-rating-icon ci-star-filled active" />
                                                <i className="star-rating-icon ci-star-filled active" />
                                                <i className="star-rating-icon ci-star" />
                                            </div>
                                            <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
                                                74 Reviews
                                            </span>
                                        </a>
                                        <button
                                            className="btn-wishlist me-0 me-lg-n3"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart" />
                                        </button>
                                    </div>
                                    <div className="mb-3">
                                        <span className="h3 fw-normal text-accent me-1">
                                            $18.<small>99</small>
                                        </span>
                                        <del className="text-muted fs-lg me-3">
                                            $25.<small>00</small>
                                        </del>
                                        <span className="badge bg-danger badge-shadow align-middle mt-n2">
                                            Sale
                                        </span>
                                    </div>
                                    <div className="fs-sm mb-4">
                                        <span className="text-heading fw-medium me-1">Color:</span>
                                        <span className="text-muted" id="colorOption">
                                            Red/Dark blue/White
                                        </span>
                                    </div>
                                    <div className="position-relative me-n4 mb-3">
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="color1"
                                                data-bs-label="colorOption"
                                                defaultValue="Red/Dark blue/White"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-option-label rounded-circle"
                                                htmlFor="color1"
                                            >
                                                <span
                                                    className="form-option-color rounded-circle"
                                                    style={{
                                                        backgroundImage: "url(/assets/img/shop/single/color-opt-1.png)"
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="color2"
                                                data-bs-label="colorOption"
                                                defaultValue="Beige/White/Dark grey"
                                            />
                                            <label
                                                className="form-option-label rounded-circle"
                                                htmlFor="color2"
                                            >
                                                <span
                                                    className="form-option-color rounded-circle"
                                                    style={{
                                                        backgroundImage: "url(/assets/img/shop/single/color-opt-2.png)"
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="color3"
                                                data-bs-label="colorOption"
                                                defaultValue="Dark grey/White/Orange"
                                            />
                                            <label
                                                className="form-option-label rounded-circle"
                                                htmlFor="color3"
                                            >
                                                <span
                                                    className="form-option-color rounded-circle"
                                                    style={{
                                                        backgroundImage: "url(/assets/img/shop/single/color-opt-3.png)"
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <div className="product-badge product-available mt-n1">
                                            <i className="ci-security-check" />
                                            Product available
                                        </div>
                                    </div>
                                    <form className="mb-grid-gutter" method="post">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center pb-1">
                                                <label className="form-label" htmlFor="product-size">
                                                    Size:
                                                </label>
                                                <a
                                                    className="nav-link-style fs-sm"
                                                    href="shop-single-v1.html#size-chart"
                                                    data-bs-toggle="modal"
                                                >
                                                    <i className="ci-ruler lead align-middle me-1 mt-n1" />
                                                    Size guide
                                                </a>
                                            </div>
                                            <select className="form-select" required="" id="product-size">
                                                <option value="">Select size</option>
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 d-flex align-items-center">
                                            <select
                                                className="form-select me-3"
                                                style={{ width: "5rem" }}
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                            <button
                                                className="btn btn-primary btn-shadow d-block w-100"
                                                type="submit"
                                            >
                                                <i className="ci-cart fs-lg me-2" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </form>
                                    {/* Product panels*/}
                                    <div className="accordion mb-4" id="productPanels">
                                        <div className="accordion-item">
                                            <h3 className="accordion-header">
                                                <a
                                                    className="accordion-button"
                                                    href="shop-single-v1.html#productInfo"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="true"
                                                    aria-controls="productInfo"
                                                >
                                                    <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2" />
                                                    Product info
                                                </a>
                                            </h3>
                                            <div
                                                className="accordion-collapse collapse show"
                                                id="productInfo"
                                                data-bs-parent="#productPanels"
                                            >
                                                <div className="accordion-body">
                                                    <h6 className="fs-sm mb-2">Composition</h6>
                                                    <ul className="fs-sm ps-4">
                                                        <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                                                        <li>Lining: Cotton 100%</li>
                                                        <li>Cotton 80%, Polyester 20%</li>
                                                    </ul>
                                                    <h6 className="fs-sm mb-2">Art. No.</h6>
                                                    <ul className="fs-sm ps-4 mb-0">
                                                        <li>183260098</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h3 className="accordion-header">
                                                <a
                                                    className="accordion-button collapsed"
                                                    href="shop-single-v1.html#shippingOptions"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="true"
                                                    aria-controls="shippingOptions"
                                                >
                                                    <i className="ci-delivery text-muted lead align-middle mt-n1 me-2" />
                                                    Shipping options
                                                </a>
                                            </h3>
                                            <div
                                                className="accordion-collapse collapse"
                                                id="shippingOptions"
                                                data-bs-parent="#productPanels"
                                            >
                                                <div className="accordion-body fs-sm">
                                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                                        <div>
                                                            <div className="fw-semibold text-dark">Courier</div>
                                                            <div className="fs-sm text-muted">2 - 4 days</div>
                                                        </div>
                                                        <div>$26.50</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div className="fw-semibold text-dark">
                                                                Local shipping
                                                            </div>
                                                            <div className="fs-sm text-muted">up to one week</div>
                                                        </div>
                                                        <div>$10.00</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div className="fw-semibold text-dark">Flat rate</div>
                                                            <div className="fs-sm text-muted">5 - 7 days</div>
                                                        </div>
                                                        <div>$33.85</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between border-bottom py-2">
                                                        <div>
                                                            <div className="fw-semibold text-dark">
                                                                UPS ground shipping
                                                            </div>
                                                            <div className="fs-sm text-muted">4 - 6 days</div>
                                                        </div>
                                                        <div>$18.00</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between pt-2">
                                                        <div>
                                                            <div className="fw-semibold text-dark">
                                                                Local pickup from store
                                                            </div>
                                                            <div className="fs-sm text-muted">—</div>
                                                        </div>
                                                        <div>$0.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h3 className="accordion-header">
                                                <a
                                                    className="accordion-button collapsed"
                                                    href="shop-single-v1.html#localStore"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="true"
                                                    aria-controls="localStore"
                                                >
                                                    <i className="ci-location text-muted fs-lg align-middle mt-n1 me-2" />
                                                    Find in local store
                                                </a>
                                            </h3>
                                            <div
                                                className="accordion-collapse collapse"
                                                id="localStore"
                                                data-bs-parent="#productPanels"
                                            >
                                                <div className="accordion-body">
                                                    <select className="form-select">
                                                        <option value="">Select your country</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="France">France</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="UK">United Kingdom</option>
                                                        <option value="USA">USA</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sharing*/}
                                    <label className="form-label d-inline-block align-middle my-2 me-3">
                                        Share:
                                    </label>
                                    <a
                                        className="btn-share btn-twitter me-2 my-2"
                                        href="shop-single-v1.html#"
                                    >
                                        <i className="ci-twitter" />
                                        Twitter
                                    </a>
                                    <a
                                        className="btn-share btn-instagram me-2 my-2"
                                        href="shop-single-v1.html#"
                                    >
                                        <i className="ci-instagram" />
                                        Instagram
                                    </a>
                                    <a
                                        className="btn-share btn-facebook my-2"
                                        href="shop-single-v1.html#"
                                    >
                                        <i className="ci-facebook" />
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product description section 1*/}
                <div className="row align-items-center py-md-3">
                    <div className="col-lg-5 col-md-6 offset-lg-1 order-md-2">
                        <img
                            className="d-block rounded-3"
                            src="/assets/img/shop/single/prod-img.jpg"
                            alt="Image"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 offset-lg-1 py-4 order-md-1">
                        <h2 className="h3 mb-4 pb-2">High quality materials</h2>
                        <h6 className="fs-base mb-3">Soft cotton blend</h6>
                        <p className="fs-sm text-muted pb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
                            irure dolor in reprehenderit.
                        </p>
                        <h6 className="fs-base mb-3">Washing instructions</h6>
                        <ul className="nav nav-tabs mb-3" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="shop-single-v1.html#wash"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <i className="ci-wash fs-xl" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="shop-single-v1.html#bleach"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <i className="ci-bleach fs-xl" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="shop-single-v1.html#hand-wash"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <i className="ci-hand-wash fs-xl" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="shop-single-v1.html#ironing"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <i className="ci-ironing fs-xl" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="shop-single-v1.html#dry-clean"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <i className="ci-dry-clean fs-xl" />
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content text-muted fs-sm">
                            <div className="tab-pane fade show active" id="wash" role="tabpanel">
                                30° mild machine washing
                            </div>
                            <div className="tab-pane fade" id="bleach" role="tabpanel">
                                Do not use any bleach
                            </div>
                            <div className="tab-pane fade" id="hand-wash" role="tabpanel">
                                Hand wash normal (30°)
                            </div>
                            <div className="tab-pane fade" id="ironing" role="tabpanel">
                                Low temperature ironing
                            </div>
                            <div className="tab-pane fade" id="dry-clean" role="tabpanel">
                                Do not dry clean
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product description section 2*/}
                <div className="row align-items-center py-4 py-lg-5">
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <img
                            className="d-block rounded-3"
                            src="/assets/img/shop/single/prod-map.png"
                            alt="Map"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 offset-lg-1 py-4">
                        <h2 className="h3 mb-4 pb-2">Where is it made?</h2>
                        <h6 className="fs-base mb-3">Apparel Manufacturer, Ltd.</h6>
                        <p className="fs-sm text-muted pb-2">
                            Sam Tower, 6 Road No 32, Dhaka 1875, Bangladesh
                        </p>
                        <div className="d-flex mb-2">
                            <div className="me-4 pe-2 text-center">
                                <h4 className="h2 text-accent mb-1">3258</h4>
                                <p>Workers</p>
                            </div>
                            <div className="me-4 pe-2 text-center">
                                <h4 className="h2 text-accent mb-1">43%</h4>
                                <p>Female</p>
                            </div>
                            <div className="text-center">
                                <h4 className="h2 text-accent mb-1">57%</h4>
                                <p>Male</p>
                            </div>
                        </div>
                        <h6 className="fs-base mb-3">Factory information</h6>
                        <p className="fs-sm text-muted pb-md-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    </div>
                </div>
            </div>
            {/* Reviews*/}
            <div className="border-top border-bottom my-lg-3 py-5">
                <div className="container pt-md-2" id="reviews">
                    <div className="row pb-3">
                        <div className="col-lg-4 col-md-5">
                            <h2 className="h3 mb-4">74 Reviews</h2>
                            <div className="star-rating me-2">
                                <i className="ci-star-filled fs-sm text-accent me-1" />
                                <i className="ci-star-filled fs-sm text-accent me-1" />
                                <i className="ci-star-filled fs-sm text-accent me-1" />
                                <i className="ci-star-filled fs-sm text-accent me-1" />
                                <i className="ci-star fs-sm text-muted me-1" />
                            </div>
                            <span className="d-inline-block align-middle">
                                4.1 Overall rating
                            </span>
                            <p className="pt-3 fs-sm text-muted">
                                58 out of 74 (77%)
                                <br />
                                Customers recommended this product
                            </p>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="d-flex align-items-center mb-2">
                                <div className="text-nowrap me-3">
                                    <span className="d-inline-block align-middle text-muted">5</span>
                                    <i className="ci-star-filled fs-xs ms-1" />
                                </div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow={60}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted ms-3">43</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="text-nowrap me-3">
                                    <span className="d-inline-block align-middle text-muted">4</span>
                                    <i className="ci-star-filled fs-xs ms-1" />
                                </div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "27%", backgroundColor: "#a7e453" }}
                                            aria-valuenow={27}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted ms-3">16</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="text-nowrap me-3">
                                    <span className="d-inline-block align-middle text-muted">3</span>
                                    <i className="ci-star-filled fs-xs ms-1" />
                                </div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "17%", backgroundColor: "#ffda75" }}
                                            aria-valuenow={17}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted ms-3">9</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="text-nowrap me-3">
                                    <span className="d-inline-block align-middle text-muted">2</span>
                                    <i className="ci-star-filled fs-xs ms-1" />
                                </div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "9%", backgroundColor: "#fea569" }}
                                            aria-valuenow={9}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted ms-3">4</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="text-nowrap me-3">
                                    <span className="d-inline-block align-middle text-muted">1</span>
                                    <i className="ci-star-filled fs-xs ms-1" />
                                </div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "4%" }}
                                            aria-valuenow={4}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted ms-3">2</span>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 mb-3" />
                    <div className="row pt-4">
                        {/* Reviews list*/}
                        <div className="col-md-7">
                            <div className="d-flex justify-content-end pb-4">
                                <div className="d-flex align-items-center flex-nowrap">
                                    <label
                                        className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
                                        htmlFor="sort-reviews"
                                    >
                                        Sort by:
                                    </label>
                                    <select className="form-select form-select-sm" id="sort-reviews">
                                        <option>Newest</option>
                                        <option>Oldest</option>
                                        <option>Popular</option>
                                        <option>High rating</option>
                                        <option>Low rating</option>
                                    </select>
                                </div>
                            </div>
                            {/* Review*/}
                            <div className="product-review pb-4 mb-4 border-bottom">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center me-4 pe-2">
                                        <img
                                            className="rounded-circle"
                                            src="/assets/img/shop/reviews/01.jpg"
                                            width={50}
                                            alt="Rafael Marquez"
                                        />
                                        <div className="ps-3">
                                            <h6 className="fs-sm mb-0">Rafael Marquez</h6>
                                            <span className="fs-ms text-muted">June 28, 2019</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                        <div className="fs-ms text-muted">
                                            83% of users found this review helpful
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-md mb-2">
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus,
                                    omnis voluptas assumenda est...
                                </p>
                                <ul className="list-unstyled fs-ms pt-1">
                                    <li className="mb-1">
                                        <span className="fw-medium">Pros:&nbsp;</span>Consequuntur
                                        magni, voluptatem sequi, tempora
                                    </li>
                                    <li className="mb-1">
                                        <span className="fw-medium">Cons:&nbsp;</span>Architecto beatae,
                                        quis autem
                                    </li>
                                </ul>
                                <div className="text-nowrap">
                                    <button className="btn-like" type="button">
                                        15
                                    </button>
                                    <button className="btn-dislike" type="button">
                                        3
                                    </button>
                                </div>
                            </div>
                            {/* Review*/}
                            <div className="product-review pb-4 mb-4 border-bottom">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center me-4 pe-2">
                                        <img
                                            className="rounded-circle"
                                            src="/assets/img/shop/reviews/02.jpg"
                                            width={50}
                                            alt="Barbara Palson"
                                        />
                                        <div className="ps-3">
                                            <h6 className="fs-sm mb-0">Barbara Palson</h6>
                                            <span className="fs-ms text-muted">May 17, 2019</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                        </div>
                                        <div className="fs-ms text-muted">
                                            99% of users found this review helpful
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-md mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ul className="list-unstyled fs-ms pt-1">
                                    <li className="mb-1">
                                        <span className="fw-medium">Pros:&nbsp;</span>Consequuntur
                                        magni, voluptatem sequi, tempora
                                    </li>
                                    <li className="mb-1">
                                        <span className="fw-medium">Cons:&nbsp;</span>Architecto beatae,
                                        quis autem
                                    </li>
                                </ul>
                                <div className="text-nowrap">
                                    <button className="btn-like" type="button">
                                        34
                                    </button>
                                    <button className="btn-dislike" type="button">
                                        1
                                    </button>
                                </div>
                            </div>
                            {/* Review*/}
                            <div className="product-review pb-4 mb-4 border-bottom">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center me-4 pe-2">
                                        <img
                                            className="rounded-circle"
                                            src="/assets/img/shop/reviews/03.jpg"
                                            width={50}
                                            alt="Daniel Adams"
                                        />
                                        <div className="ps-3">
                                            <h6 className="fs-sm mb-0">Daniel Adams</h6>
                                            <span className="fs-ms text-muted">May 8, 2019</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                        <div className="fs-ms text-muted">
                                            75% of users found this review helpful
                                        </div>
                                    </div>
                                </div>
                                <p className="fs-md mb-2">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem.
                                </p>
                                <ul className="list-unstyled fs-ms pt-1">
                                    <li className="mb-1">
                                        <span className="fw-medium">Pros:&nbsp;</span>Consequuntur
                                        magni, voluptatem sequi
                                    </li>
                                    <li className="mb-1">
                                        <span className="fw-medium">Cons:&nbsp;</span>Architecto beatae,
                                        quis autem, voluptatem sequ
                                    </li>
                                </ul>
                                <div className="text-nowrap">
                                    <button className="btn-like" type="button">
                                        26
                                    </button>
                                    <button className="btn-dislike" type="button">
                                        9
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-accent" type="button">
                                    <i className="ci-reload me-2" />
                                    Load more reviews
                                </button>
                            </div>
                        </div>
                        {/* Leave review form*/}
                        <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
                            <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
                                <h3 className="h4 pb-2">Write a review</h3>
                                <form className="needs-validation" method="post" noValidate="">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="review-name">
                                            Your name<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required=""
                                            id="review-name"
                                        />
                                        <div className="invalid-feedback">Please enter your name!</div>
                                        <small className="form-text text-muted">
                                            Will be displayed on the comment.
                                        </small>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="review-email">
                                            Your email<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            required=""
                                            id="review-email"
                                        />
                                        <div className="invalid-feedback">
                                            Please provide valid email address!
                                        </div>
                                        <small className="form-text text-muted">
                                            Authentication only - we won't spam you.
                                        </small>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="review-rating">
                                            Rating<span className="text-danger">*</span>
                                        </label>
                                        <select className="form-select" required="" id="review-rating">
                                            <option value="">Choose rating</option>
                                            <option value={5}>5 stars</option>
                                            <option value={4}>4 stars</option>
                                            <option value={3}>3 stars</option>
                                            <option value={2}>2 stars</option>
                                            <option value={1}>1 star</option>
                                        </select>
                                        <div className="invalid-feedback">Please choose rating!</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="review-text">
                                            Review<span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={6}
                                            required=""
                                            id="review-text"
                                            defaultValue={""}
                                        />
                                        <div className="invalid-feedback">Please write a review!</div>
                                        <small className="form-text text-muted">
                                            Your review must be at least 50 characters.
                                        </small>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="review-pros">
                                            Pros
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={2}
                                            placeholder="Separated by commas"
                                            id="review-pros"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="mb-3 mb-4">
                                        <label className="form-label" htmlFor="review-cons">
                                            Cons
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={2}
                                            placeholder="Separated by commas"
                                            id="review-cons"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary btn-shadow d-block w-100"
                                        type="submit"
                                    >
                                        Submit a Review
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product carousel (Style with)*/}
            <div className="container pt-5">
                <h2 className="h3 text-center pb-4">Style with</h2>
                <div className="tns-carousel tns-controls-static tns-controls-outside">
                    <div
                        className="tns-carousel-inner"
                        data-carousel-options='{"items": 2, "controls": true, "nav": false, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":3, "gutter": 20}, "1100":{"items":4, "gutter": 30}}}'
                    >
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/14.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Jeans
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Slim Taper Fit Jeans</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $58.<small>99</small>
                                            </span>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <span className="badge bg-danger badge-shadow">Sale</span>
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/17.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s T-shirts
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Cotton T-shirt Regular Fit</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $9.<small>50</small>
                                            </span>
                                            <del className="fs-sm text-muted">
                                                $11.<small>50</small>
                                            </del>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-half active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/18.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Shoes
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Men’s Leather Keds</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $64.<small>99</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/19.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s T-shirts
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">
                                            3 Color Collection of T-shirts
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $27.<small>99</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-half active" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/13.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s T-shirts
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Cotton Polo Regular Fit</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $13.<small>50</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product carousel (You may also like)*/}
            <div className="container py-5 my-md-3">
                <h2 className="h3 text-center pb-4">You may also like</h2>
                <div className="tns-carousel tns-controls-static tns-controls-outside">
                    <div
                        className="tns-carousel-inner"
                        data-carousel-options='{"items": 2, "controls": true, "nav": false, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":3, "gutter": 20}, "1100":{"items":4, "gutter": 30}}}'
                    >
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/20.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Hoodie
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Block-colored Hooded Top</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $24.<small>99</small>
                                            </span>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-half active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/21.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Hoodie
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Block-colored Hooded Top</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $26.<small>99</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/22.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Hoodie
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Block-colored Hooded Top</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $24.<small>99</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-half active" />
                                            <i className="star-rating-icon ci-star" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/23.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Hoodie
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Block-colored Hooded Top</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $24.<small>99</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product*/}
                        <div>
                            <div className="card product-card card-static">
                                <button
                                    className="btn-wishlist btn-sm"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist"
                                >
                                    <i className="ci-heart" />
                                </button>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v1.html#"
                                >
                                    <img src="/assets/img/shop/catalog/24.jpg" alt="Product" />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="shop-single-v1.html#"
                                    >
                                        Men’s Hoodie
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v1.html#">Block-colored Hooded Top</a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price text-accent">
                                            $25.<small>00</small>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star-filled active" />
                                            <i className="star-rating-icon ci-star" />
                                            <i className="star-rating-icon ci-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct