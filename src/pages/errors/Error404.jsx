import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <main className="page-wrapper">
                <Header />
                <div className="container py-5 mb-lg-3">
                    <div className="row justify-content-center pt-lg-4 text-center">
                        <div className="col-lg-5 col-md-7 col-sm-9">
                            <img
                                className="d-block mx-auto mb-5"
                                src="/assets/img/pages/404.png"
                                width={340}
                                alt="404 Error"
                            />
                            {/* <Text>
                                {JSON.stringify(user)}
                            </Text> */}
                            <h1 className="h3">404 error</h1>
                            <h3 className="h5 fw-normal mb-4">
                                We can't seem to find the page you are looking for.
                            </h3>
                            <p className="fs-md mb-4">
                                <u>Here are some helpful links instead:</u>
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="row">
                                <div className="col-sm-4 mb-3">
                                    <Link className="card h-100 border-0 shadow-sm" to={'/'}>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <i className="ci-home text-primary h4 mb-0" />
                                                <div className="ps-3">
                                                    <h5 className="fs-sm mb-0">Homepage</h5>
                                                    <span className="text-muted fs-ms">Return to homepage</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <Link
                                        className="card h-100 border-0 shadow-sm"
                                        to={'/search'}
                                    >
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <i className="ci-search text-success h4 mb-0" />
                                                <div className="ps-3">
                                                    <h5 className="fs-sm mb-0">Search</h5>
                                                    <span className="text-muted fs-ms">
                                                        Find with advanced search
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <Link className="card h-100 border-0 shadow-sm" to={'/help-center'}>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <i className="ci-help text-info h4 mb-0" />
                                                <div className="ps-3">
                                                    <h5 className="fs-sm mb-0">Help &amp; Support</h5>
                                                    <span className="text-muted fs-ms">
                                                        Visit our help center
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Error404