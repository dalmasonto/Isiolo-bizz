import React from 'react'
import { products } from './shop/Shop'
import ProductCard from '../components/shop/ProductCard'

const Index = () => {
    return (
        <>
            {/* Hero slider*/}
            <section className="tns-carousel tns-controls-lg mb-4 mb-lg-5">
                <div
                    className="tns-carousel-inner"
                    data-carousel-options='{"mode": "gallery", "responsive": {"0":{"nav":true, "controls": false},"992":{"nav":false, "controls": true}}}'
                >
                    {/* Item*/}
                    <div className="px-lg-5" style={{ backgroundColor: "#f5b1b0" }}>
                        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                            <img
                                className="d-block order-lg-2 me-lg-n5 flex-shrink-0 w-100"
                                src="/assets/images/slider1.png"
                                alt="Women Sportswear"
                            />
                            <div
                                className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                style={{ maxWidth: "42rem", zIndex: 10 }}
                            >
                                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                    <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                        Hurry up! Limited time offer.
                                    </h3>
                                    <h2 className="text-light display-5 from-bottom delay-1">
                                        Women Sportswear Sale
                                    </h2>
                                    <p className="fs-lg text-light pb-3 from-bottom delay-2">
                                        Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...
                                    </p>
                                    <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                        <a className="btn btn-primary" href="shop-grid-ls.html">
                                            Shop Now
                                            <i className="ci-arrow-right ms-2 me-n1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item*/}
                    <div className="px-lg-5" style={{ backgroundColor: "#3aafd2" }}>
                        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                            <img
                                className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                                src="/assets/images/slider1.png"
                                alt="Summer Collection"
                            />
                            <div
                                className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                style={{ maxWidth: "42rem", zIndex: 10 }}
                            >
                                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                    <h3 className="h2 text-light fw-light pb-1 from-start">
                                        Has just arrived!
                                    </h3>
                                    <h2 className="text-light display-5 from-start delay-1">
                                        Huge Summer Collection
                                    </h2>
                                    <p className="fs-lg text-light pb-3 from-start delay-2">
                                        Swimwear, Tops, Shorts, Sunglasses &amp; much more...
                                    </p>
                                    <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                        <a className="btn btn-primary" href="shop-grid-ls.html">
                                            Shop Now
                                            <i className="ci-arrow-right ms-2 me-n1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item*/}
                    <div className="px-lg-5" style={{ backgroundColor: "#eba170" }}>
                        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                            <img
                                className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                                src="/assets/images/slider1.png"
                                alt="Men Accessories"
                            />
                            <div
                                className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                style={{ maxWidth: "42rem", zIndex: 10 }}
                            >
                                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                    <h3 className="h2 text-light fw-light pb-1 from-top">
                                        Complete your look with
                                    </h3>
                                    <h2 className="text-light display-5 from-top delay-1">
                                        New Men's Accessories
                                    </h2>
                                    <p className="fs-lg text-light pb-3 from-top delay-2">
                                        Hats &amp; Caps, Sunglasses, Bags &amp; much more...
                                    </p>
                                    <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                        <a className="btn btn-primary" href="shop-grid-ls.html">
                                            Shop Now
                                            <i className="ci-arrow-right ms-2 me-n1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category (Women)*/}
            <section className="container pt-lg-3 mb-4 mb-sm-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className="col-md-5">
                        <div
                            className="d-flex flex-column h-100 overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                <div>
                                    <h3 className="mb-1">For Women</h3>
                                    <a className="fs-md" href="shop-grid-ls.html">
                                        Shop for women
                                        <i className="ci-arrow-right fs-xs align-middle ms-1" />
                                    </a>
                                </div>
                                <div className="tns-carousel-controls" id="for-women">
                                    <button type="button">
                                        <i className="ci-arrow-left" />
                                    </button>
                                    <button type="button">
                                        <i className="ci-arrow-right" />
                                    </button>
                                </div>
                            </div>
                            <a className="d-none d-md-block mt-auto" href="shop-grid-ls.html">
                                <img
                                    className="d-block w-100"
                                    src="/assets/img/home/categories/cat-lg02.jpg"
                                    alt="For Women"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Product grid (carousel)*/}
                    <div className="col-md-7 pt-4 pt-md-0">
                        <div className="tns-carousel">
                            <div
                                className="tns-carousel-inner"
                                data-carousel-options='{"nav": false, "controlsContainer": "#for-women"}'
                            >
                                {/* Carousel item*/}
                                <div>
                                <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_product_ks_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Carousel item*/}
                                <div>
                                <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_produc_womes_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category (Men)*/}
            <section className="container pt-lg-4 mb-4 mb-sm-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className="col-md-5 order-md-2">
                        <div
                            className="d-flex flex-column h-100 overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                <div className="order-md-2">
                                    <h3 className="mb-1">For Men</h3>
                                    <a className="fs-md" href="shop-grid-ls.html">
                                        Shop for men
                                        <i className="ci-arrow-right fs-xs align-middle ms-1" />
                                    </a>
                                </div>
                                <div className="tns-carousel-controls order-md-1" id="for-men">
                                    <button type="button">
                                        <i className="ci-arrow-left" />
                                    </button>
                                    <button type="button">
                                        <i className="ci-arrow-right" />
                                    </button>
                                </div>
                            </div>
                            <a className="d-none d-md-block mt-auto" href="shop-grid-ls.html">
                                <img
                                    className="d-block w-100"
                                    src="/assets/img/home/categories/cat-lg01.jpg"
                                    alt="For Men"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Product grid (carousel)*/}
                    <div className="col-md-7 pt-4 pt-md-0 order-md-1">
                        <div className="tns-carousel">
                            <div
                                className="tns-carousel-inner"
                                data-carousel-options='{"nav": false, "controlsContainer": "#for-men"}'
                            >
                                {/* Carousel item*/}
                                <div>
                                <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_product_meds_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Carousel item*/}
                                <div>
                                <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_product_men_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category (Kids)*/}
            <section className="container pt-lg-4 mb-4 mb-md-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className="col-md-5">
                        <div
                            className="d-flex flex-column h-100 overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                <div>
                                    <h3 className="mb-1">For Kids</h3>
                                    <a className="fs-md" href="shop-grid-ls.html">
                                        Shop for kids
                                        <i className="ci-arrow-right fs-xs align-middle ms-1" />
                                    </a>
                                </div>
                                <div className="tns-carousel-controls" id="for-kids">
                                    <button type="button">
                                        <i className="ci-arrow-left" />
                                    </button>
                                    <button type="button">
                                        <i className="ci-arrow-right" />
                                    </button>
                                </div>
                            </div>
                            <a className="d-none d-md-block mt-auto" href="shop-grid-ls.html">
                                <img
                                    className="d-block w-100"
                                    src="/assets/img/home/categories/cat-lg03.jpg"
                                    alt="For Kids"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Product grid (carousel)*/}
                    <div className="col-md-7 pt-4 pt-md-0">
                        <div className="tns-carousel">
                            <div
                                className="tns-carousel-inner"
                                data-carousel-options='{"nav": false, "controlsContainer": "#for-kids"}'
                            >
                                {/* Carousel item*/}
                                <div>
                                    <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_product_kids_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Carousel item*/}
                                <div>
                                <div className="row mx-n2">
                                        {
                                            products.map((product) => (
                                                <div key={`_product_kids${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product widgets*/}
            <section className="container pt-md-3 pb-4 pb-md-5 mb-lg-2">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-2 py-3">
                        <div className="widget">
                            <h3 className="widget-title">Bestsellers</h3>
                            <div className="d-flex align-items-center pb-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/cart/widget/01.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $150.<small>00</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/cart/widget/02.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">TH Jeans City Backpack</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $79.<small>50</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/cart/widget/03.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $22.<small>50</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/cart/widget/04.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $9.<small>00</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-0">...</p>
                            <a className="fs-sm" href="shop-grid-ls.html">
                                View more
                                <i className="ci-arrow-right fs-xs ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2 py-3">
                        <div className="widget">
                            <h3 className="widget-title">New arrivals</h3>
                            <div className="d-flex align-items-center pb-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/widget/02.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Cap with Appliqué</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $15.<small>99</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/widget/01.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Girl's T-shirt with Motif</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $14.<small>50</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/widget/03.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Leather Platform Sandals</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $78.<small>00</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <a className="d-block" href="shop-single-v1.html">
                                    <img src="/assets/img/shop/widget/04.jpg" width={64} alt="Product" />
                                </a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title">
                                        <a href="shop-single-v1.html">Regular Fit Cotton Shirt</a>
                                    </h6>
                                    <div className="widget-product-meta">
                                        <span className="text-accent me-2">
                                            $17.<small>99</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-0">...</p>
                            <a className="fs-sm" href="shop-grid-ls.html">
                                View more
                                <i className="ci-arrow-right fs-xs ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-none d-lg-block">
                        <a className="d-block" href="shop-grid-ls.html">
                            <img
                                className="d-block rounded-3"
                                src="/assets/img/home/banners/v-banner.jpg"
                                alt="Promo banner"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* Blog + Instagram info cards*/}
            <section className="container-fluid px-0">
                <div className="row g-0">
                    <div className="col-md-6">
                        <a
                            className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary"
                            href="blog-list-sidebar.html"
                        >
                            <div className="card-body text-center">
                                <i className="ci-edit h3 mt-2 mb-4 text-primary" />
                                <h3 className="h5 mb-1">Read the blog</h3>
                                <p className="text-muted fs-sm">
                                    Latest store, fashion news and trends
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a
                            className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
                            href="home-fashion-store-v2.html#"
                        >
                            <div className="card-body text-center">
                                <i className="ci-instagram h3 mt-2 mb-4 text-accent" />
                                <h3 className="h5 mb-1">Follow on Instagram</h3>
                                <p className="text-muted fs-sm">#ShopWithCartzilla</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index