import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BackgroundImage, Container } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Social from '../components/home/Social'
import Shops from '../components/home/Shops'
import Partners from '../components/home/Partners'
import Autoplay from 'embla-carousel-autoplay';

const Index = () => {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <>
            {/* Hero slider*/}
            <section className="mb-4 mb-lg-5">
                <Carousel controlSize={42}
                    loop
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}>
                    <Carousel.Slide>
                        <BackgroundImage src="/assets/images/slider1.png">
                            <div className="px-lg-5">
                                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                    <div
                                        className="position-relative mxauto me-l-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                        style={{
                                            maxWidth: "42rem",
                                            zIndex: 10,
                                            // backgroundColor: "rgba(16, 115, 60, 0.6)",
                                            backgroundColor: "rgba(247, 153, 61, 0.8)",
                                            borderRadius: "0px",
                                        }}
                                    >
                                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                            <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                                Hurry up! Limited time offer.
                                            </h3>
                                            <h2 className="text-light display-5 from-bottom delay-1">
                                                Best New Deals
                                            </h2>
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
                    <Carousel.Slide>
                        <BackgroundImage src="/assets/images/gettyimages-1036371008-2048x2048.jpg">
                            <div className="px-lg-5">
                                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                    <div
                                        className="position-relative mxauto me-l-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                        style={{
                                            maxWidth: "42rem",
                                            zIndex: 10,
                                            // backgroundColor: "rgba(16, 115, 60, 0.6)",
                                            backgroundColor: "rgba(247, 153, 61, 0.8)",
                                            borderRadius: "0px",
                                        }}
                                    >
                                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                            <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                                Hurry up! Limited time offer.
                                            </h3>
                                            <h2 className="text-light display-5 from-bottom delay-1">
                                                Best New Deals
                                            </h2>
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
                    <Carousel.Slide>
                        <BackgroundImage src="/assets/images/gettyimages-1042273016-2048x2048.jpg">
                            <div className="px-lg-5">
                                <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                    <div
                                        className="position-relative mxauto me-l-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                        style={{
                                            maxWidth: "42rem",
                                            zIndex: 10,
                                            // backgroundColor: "rgba(16, 115, 60, 0.6)",
                                            backgroundColor: "rgba(247, 153, 61, 0.8)",
                                            borderRadius: "0px",
                                        }}
                                    >
                                        <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                            <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                                Hurry up! Limited time offer.
                                            </h3>
                                            <h2 className="text-light display-5 from-bottom delay-1">
                                                Best New Deals
                                            </h2>
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
            <Container size={'xl'}>
                <Shops />
            </Container>
            <Partners />
            <Social />
        </>
    )
}

export default Index