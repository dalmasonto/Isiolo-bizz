import React from 'react'
import { Link } from 'react-router-dom'
import { BackgroundImage } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import HomeShopCategory from '../components/shop/HomeShopCategory'
import Social from '../components/home/Social'
import { SHOPS } from '../config/constants'
import Shops from '../components/home/Shops'

const Index = () => {
    return (
        <>
            {/* Hero slider*/}
            <section className="mb-4 mb-lg-5">
                <Carousel controlSize={42} slideSize={"100%"}>
                    <Carousel.Slide>
                        <BackgroundImage src="/assets/images/slider1.png">
                            <div className="px-lg-5">
                                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                    <div
                                        className="position-relative mxauto me-l-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                        style={{
                                            maxWidth: "42rem",
                                            zIndex: 10,
                                            backgroundColor: "rgb(245, 177, 176)",
                                            borderRadius: "1rem",
                                        }}
                                    >
                                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                            <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                                Hurry up! Limited time offer.
                                            </h3>
                                            <h2 className="text-light display-5 from-bottom delay-1">
                                                Best New Deals
                                            </h2>
                                            <p className="fs-lg text-light pb-3 from-bottom delay-2">
                                                Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...
                                            </p>
                                            <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                                <Link className="btn btn-primary" to="/shop">
                                                    Shop Now
                                                    <i className="ci-arrow-right ms-2 me-n1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BackgroundImage>
                    </Carousel.Slide>
                </Carousel>
            </section>

            <Shops />
            <Social />
        </>
    )
}

export default Index