import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="container-fluid px-0">
                {/* Row: Shop online*/}
                <section className="row g-0">
                    <div
                        className="col-md-6 bg-position-center bg-size-cover bg-secondary"
                        style={{
                            minHeight: "15rem",
                            // backgroundImage: "url(/assets/img/about/01.jpg)",
                            backgroundImage: "url(/assets/images/slider1.png)",
                        }}
                    />
                    <div className="col-md-6 px-3 px-md-5 py-5">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: "35rem" }}>
                            <h2 className="h3 pb-3">About Us</h2>
                            <p className="fs-sm text-muted">
                                Esiolo was set up in 2021 as part of an E4Impact project to build drought resilience in Isiolo county (DRIC).
                            </p>
                            <p className="fs-sm text-muted">
                                It consists of 13 groups from various wards in Isiolo namely Bulapesa, Burat, Wabera, Merti, Kina, and Oldonyiro.
                            </p>
                            <p className="fs-sm text-muted">
                                The groups each sell a selection of products that range from camel milk, livestock (goat, camel, cows) horticultural products, Nyrinyri, fodder, poultry, and honey.
                                Collectively the groups in the co-op have over 400 members.
                            </p>
                            <p className="fs-sm text-muted">
                                As part of the DRIC project, an online marketplace was created where the Co-op members can now sell their products.
                                They also all have their own individual online shops.
                            </p>
                            <p className="fs-sm text-muted">
                                The groups part of the Co-op are Nasole Sacco, Merti, Oldinyiro SACCO, Rural Women’s Access, Tawakwal  Co-operative, Wiyukiririe, Bidii farmers, Kitos, Kambi Ya Juu, Galesa women, Anolei Co-operative, and Jua Kali Nyirnyir
                            </p>
                            <Link className="btn btn-primary btn-shadow" to={'/shop'}>
                                View products
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About