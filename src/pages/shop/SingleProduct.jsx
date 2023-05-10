import { Group, NumberInput, Rating } from '@mantine/core'
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
                                </div>
                            </div>
                            {/* Product details*/}
                            <div className="col-lg-5 pt-4 pt-lg-0">
                                <div className="product-details ms-auto pb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <a href="shop-single-v1.html#reviews" data-scroll="">
                                            <div className="star-rating">
                                                <Rating value={4.5} readOnly size='sm' fractions={2} />
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
                                    <div className="position-relative me-n4 mb-3" style={{
                                        height: "20px"
                                    }}>
                                        <div className="product-badge product-available mt-n1">
                                            <i className="ci-security-check" />
                                            Product available
                                        </div>
                                    </div>
                                    <form className="mb-grid-gutter" method="post">
                                        
                                        <Group mb={"md"}>
                                            <NumberInput
                                                style={{ width: "5rem" }}
                                                min={1}
                                                value={1}
                                            />
                                            <button
                                                className="btn btn-primary btn-shadow d-block flex-1"
                                                type="submit"
                                            >
                                                <i className="ci-cart fs-lg me-2" />
                                                Add to Cart
                                            </button>
                                        </Group>
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