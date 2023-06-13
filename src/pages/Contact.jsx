import React from 'react'

const Contact = () => {
    return (
        <>
            <div>
                {/* Page Title (Light)*/}
                <div className="bg-secondary py-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <a className="text-nowrap" href="index.html">
                                            <i className="ci-home" />
                                            Home
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Contacts
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Contacts</h1>
                        </div>
                    </div>
                </div>
                {/* Split section: Map + Contact form*/}
                <div className="container-fluid px-0" id="map">
                    <div className="row g-0">
                        <div className="col-lg-6 iframe-full-height-wrap">
                            <iframe
                                className="iframe-full-height"
                                width={600}
                                height={250}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9064.699095808513!2d37.571675720706835!3d0.34536108262035947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1788689133feb26f%3A0x18574783a3b2319d!2sIsiolo%20Market!5e0!3m2!1sen!2ske!4v1686641631573!5m2!1sen!2ske"
                            />
                        </div>
                        <div className="col-lg-6 px-4 px-xl-5 py-5 border-top">
                            <h2 className="h4 mb-4">Drop us a line</h2>
                            <form className="needs-validation mb-3" noValidate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="cf-name">
                                            Your name:&nbsp;<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="cf-name"
                                            placeholder="John Doe"
                                            required=""
                                        />
                                        <div className="invalid-feedback">Please fill in you name!</div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="cf-email">
                                            Email address:&nbsp;<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="cf-email"
                                            placeholder="johndoe@email.com"
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Please provide valid email address!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="cf-phone">
                                            Your phone:&nbsp;<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="cf-phone"
                                            placeholder="+1 (212) 00 000 000"
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Please provide valid phone number!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="cf-subject">
                                            Subject:
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="cf-subject"
                                            placeholder="Provide short title of your request"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="cf-message">
                                            Message:&nbsp;<span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="cf-message"
                                            rows={6}
                                            placeholder="Please describe in detail your request"
                                            required=""
                                            defaultValue={""}
                                        />
                                        <div className="invalid-feedback">Please write a message!</div>
                                        <button className="btn btn-primary mt-4" type="submit">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact