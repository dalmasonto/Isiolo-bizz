import { Image } from '@mantine/core'
import React from 'react'
import { CATEOGORIES, URLS } from '../config/constants'
import { Link } from 'react-router-dom'
import useSwr from 'swr';
import { makeRequestOne } from '../config/config';

const Footer = () => {
    const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const categoriesData = categoriesQuery?.data?.data?.data
    return (
        <footer className="footer bg-dark pt-5">
            <div className="container">
                <div className="row pb-2">
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Shop departments</h3>
                            <ul className="widget-list">
                                {
                                    categoriesData.map((category, index) => (
                                        <li key={`category_${category.id}`} className="widget-list-item">
                                            <Link
                                                className="widget-list-link"
                                                to={`/shop/categories/${category?.id}/${category?.slug}`}
                                            >
                                                {category?.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">About us</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item">
                                    <Link
                                        className="widget-list-link"
                                        to="/"
                                    >
                                        About company
                                    </Link>
                                </li>
                                <li className="widget-list-item">
                                <Link
                                        className="widget-list-link"
                                        to="/"
                                    >
                                        Our Team
                                    </Link>
                                </li>
                                <li className="widget-list-item">
                                <Link
                                        className="widget-list-link"
                                        to="/"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li className="widget-list-item">
                                <Link
                                        className="widget-list-link"
                                        to="/"
                                    >
                                        News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget pb-2 mb-4">
                            <h3 className="widget-title text-light pb-1">Stay informed</h3>
                            <form
                                className="subscription-form validate"
                                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                                method="post"
                                name="mc-embedded-subscribe-form"
                                target="_blank"
                                noValidate=""
                            >
                                <div className="input-group flex-nowrap">
                                    <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                                    <input
                                        className="form-control rounded-start"
                                        type="email"
                                        name="EMAIL"
                                        placeholder="Your email"
                                        required=""
                                    />
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        name="subscribe"
                                    >
                                        Subscribe*
                                    </button>
                                </div>
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div
                                    style={{ position: "absolute", left: "-5000px" }}
                                    aria-hidden="true"
                                >
                                    <input
                                        className="subscription-form-antispam"
                                        type="text"
                                        name="b_c7103e2c981361a6639545bd5_29ca296126"
                                        tabIndex={-1}
                                    />
                                </div>
                                <div className="form-text text-light opacity-50">
                                    *Subscribe to our newsletter to receive early discount offers,
                                    updates and new products info.
                                </div>
                                <div className="subscription-status" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 bg-darker">
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex">
                                <i
                                    className="ci-rocket text-primary"
                                    style={{ fontSize: "2.25rem" }}
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">
                                        Fast and free delivery
                                    </h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">
                                        Free delivery for all orders over $200
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex">
                                <i
                                    className="ci-currency-exchange text-primary"
                                    style={{ fontSize: "2.25rem" }}
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">
                                        We return money within 30 days
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex">
                                <i
                                    className="ci-support text-primary"
                                    style={{ fontSize: "2.25rem" }}
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">
                                        Friendly 24/7 customer support
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex">
                                <i
                                    className="ci-card text-primary"
                                    style={{ fontSize: "2.25rem" }}
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">
                                        We possess SSL / Secure сertificate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-light mb-5" />
                    <div className="row pb-2">
                        <div className="col-md-6 text-center text-md-start mb-4">
                            <div className="text-nowrap mb-4">
                                <a
                                    className="d-inline-block align-middle mt-n1 me-3"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <Image
                                        className="d-block"
                                        src="/assets/images/esiolo-logo.jpg"
                                        width={117}
                                        alt="Esiolo"
                                        radius={"md"}
                                    />
                                </a>
                            </div>
                            <div className="widget widget-links widget-light">
                                <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                                    <li className="widget-list-item me-4">
                                        <a
                                            className="widget-list-link"
                                            href="home-fashion-store-v2.html#"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="widget-list-item me-4">
                                        <a
                                            className="widget-list-link"
                                            href="home-fashion-store-v2.html#"
                                        >
                                            Privacy
                                        </a>
                                    </li>
                                    <li className="widget-list-item me-4">
                                        <a
                                            className="widget-list-link"
                                            href="home-fashion-store-v2.html#"
                                        >
                                            Terms of use
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-md-end mb-4">
                            <div className="mb-3">
                                <a
                                    className="btn-social bs-light bs-twitter ms-2 mb-2"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <i className="ci-twitter" />
                                </a>
                                <a
                                    className="btn-social bs-light bs-facebook ms-2 mb-2"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <i className="ci-facebook" />
                                </a>
                                <a
                                    className="btn-social bs-light bs-instagram ms-2 mb-2"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <i className="ci-instagram" />
                                </a>
                                <a
                                    className="btn-social bs-light bs-pinterest ms-2 mb-2"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <i className="ci-pinterest" />
                                </a>
                                <a
                                    className="btn-social bs-light bs-youtube ms-2 mb-2"
                                    href="home-fashion-store-v2.html#"
                                >
                                    <i className="ci-youtube" />
                                </a>
                            </div>
                            <img
                                className="d-inline-block"
                                src="/assets/img/cards-alt.png"
                                width={187}
                                alt="Payment methods"
                            />
                        </div>
                    </div>
                    <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
                        © All rights reserved. Made by{" "}
                        <a
                            className="text-light"
                            href="https://livesoftwaredeveloper.com/"
                            target="_blank"
                            rel="noopener"
                        >
                            Live Software Developer
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer