import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <main className="container-fluid px-0">
                {/* Row: Shop online*/}
                <section className="row g-0">
                    <div
                        className="col-md-6 bg-position-center bg-size-cover bg-secondary"
                        style={{ minHeight: "15rem", backgroundImage: "url(/assets/img/about/01.jpg)" }}
                    />
                    <div className="col-md-6 px-3 px-md-5 py-5">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: "35rem" }}>
                            <h2 className="h3 pb-3">Search, Select, Buy online</h2>
                            <p className="fs-sm pb-3 text-muted">
                            Esiolo was set up in 2021 as part of an E4Impact project to build drought resilience in Isiolo county (DRIC). It consists of 13 groups from various wards in Isiolo namely Bulapesa, Burat, Wabera, Merti, Kina, and Oldonyiro.  The groups each sell a selection of products that range from camel milk, livestock (goat, camel, cows) horticultural products, Nyrinyri, fodder, poultry, and honey.  Collectively the groups in the co-op have over 400 members.

As part of the DRIC project, an online marketplace was created where the Co-op members can now sell their products. They also all have their own individual online shops.

The groups part of the Co-op are Nasole Sacco, Merti, Oldinyiro SACCO, Rural Women’s Access, Tawakwal  Co-operative, Wiyukiririe, Bidii farmers, Kitos, Kambi Ya Juu, Galesa women, Anolei Co-operative, and Jua Kali Nyirnyir
                            </p>
                            <Link className="btn btn-primary btn-shadow" to={'/shop'}>
                                View products
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Row: Delivery*/}
                <section className="row g-0">
                    <div
                        className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2"
                        style={{ minHeight: "15rem", backgroundImage: "url(/assets/img/about/02.jpg)" }}
                    />
                    <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: "35rem" }}>
                            <h2 className="h3 pb-3">Fast delivery worldwide</h2>
                            <p className="fs-sm pb-3 text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
                                purus at risus pellentesque faucibus a quis eros. In eu fermentum leo.
                                Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
                                dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat,
                                at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod
                                sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt
                                hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet
                                enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas
                                ultricies mi eget.
                            </p>
                            <a className="btn btn-accent btn-shadow" href="about.html#">
                                Shipping details
                            </a>
                        </div>
                    </div>
                </section>
                {/* Row: Mobile app*/}
                <section className="row g-0">
                    <div
                        className="col-md-6 bg-position-center bg-size-cover bg-secondary"
                        style={{ minHeight: "15rem", backgroundImage: "url(/assets/img/about/03.jpg)" }}
                    />
                    <div className="col-md-6 px-3 px-md-5 py-5">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: "35rem" }}>
                            <h2 className="h3 pb-3">Great mobile app. Shop on the go</h2>
                            <p className="fs-sm pb-3 text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
                                purus at risus pellentesque faucibus a quis eros. In eu fermentum leo.
                                Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
                                dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat,
                                at euismod. Duis erat lectus, ultrices euismod sagittis at dolor
                                tristique nec. Tristique nulla aliquet enim tortor at auctor urna
                                nunc. Sit amet aliquam id diam maecenas ultricies mi eget.
                            </p>
                            <a
                                className="btn-market btn-apple me-3 mb-3"
                                href="about.html#"
                                role="button"
                            >
                                <span className="btn-market-subtitle">Download on the</span>
                                <span className="btn-market-title">App Store</span>
                            </a>
                            <a
                                className="btn-market btn-google mb-3"
                                href="about.html#"
                                role="button"
                            >
                                <span className="btn-market-subtitle">Download on the</span>
                                <span className="btn-market-title">Google Play</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* Section: Shopping outlets*/}
                <section className="row g-0">
                    <div
                        className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2"
                        style={{ minHeight: "15rem", backgroundImage: "url(/assets/img/about/04.jpg)" }}
                    />
                    <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: "35rem" }}>
                            <h2 className="h3 pb-3">Shop offline. Cozy outlet stores</h2>
                            <p className="fs-sm pb-3 text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
                                purus at risus pellentesque faucibus a quis eros. In eu fermentum leo.
                                Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget
                                dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat,
                                at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod
                                sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt
                                hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet
                                enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas
                                ultricies mi eget.
                            </p>
                            <a className="btn btn-warning btn-shadow" href="contacts.html">
                                See outlet stores
                            </a>
                        </div>
                    </div>
                </section>
                <hr />
                {/* Section: Team*/}
                <section className="container py-3 py-lg-5 mt-4 mb-3">
                    <h2 className="h3 my-2">Our core team</h2>
                    <p className="fs-sm text-muted">
                        People behind your great shopping experience
                    </p>
                    <div className="row pt-3">
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/03.jpg"
                                    width={96}
                                    alt="Jonathan Doe"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">Jonathan Doe</h6>
                                    <p className="fs-ms text-muted mb-0">CEO, Co-founder</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:johndoe@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        johndoe@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/04.jpg"
                                    width={96}
                                    alt="Barbara Palson"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">Barbara Palson</h6>
                                    <p className="fs-ms text-muted mb-0">Chief of Marketing</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:b.palson@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        b.palson@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/06.jpg"
                                    width={96}
                                    alt="William Smith"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">William Smith</h6>
                                    <p className="fs-ms text-muted mb-0">Financial director</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:w.smith@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        w.smith@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/02.jpg"
                                    width={96}
                                    alt="Amanda Gallaher"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">Amanda Gallaher</h6>
                                    <p className="fs-ms text-muted mb-0">Lead UX designer</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:a.gallaher@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        a.gallaher@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/01.jpg"
                                    width={96}
                                    alt="Benjamin Miller"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">Benjamin Miller</h6>
                                    <p className="fs-ms text-muted mb-0">Website development</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:b.miller@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        b.miller@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle"
                                    src="/assets/img/team/07.jpg"
                                    width={96}
                                    alt="Miguel Rodrigez"
                                />
                                <div className="ps-3">
                                    <h6 className="fs-base pt-1 mb-1">Miguel Rodrigez</h6>
                                    <p className="fs-ms text-muted mb-0">Content manager</p>
                                    <a
                                        className="nav-link-style fs-ms text-nowrap"
                                        href="mailto:b.miller@example.com"
                                    >
                                        <i className="ci-mail me-2" />
                                        m.rodrigez@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About