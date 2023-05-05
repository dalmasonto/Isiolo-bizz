import React from 'react'
import { Link } from 'react-router-dom'

const SignInregister = () => {
    return (
        <>
            <div className="container py-4 py-lg-5 my-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h2 className="h4 mb-1">Sign in</h2>
                                <h3 className="fs-base pt-4 pb-2">Or using form below</h3>
                                <form className="needs-validation" noValidate="">
                                    <div className="input-group mb-3">
                                        <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                                        <input
                                            className="form-control rounded-start"
                                            type="email"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <i className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                                        <div className="password-toggle w-100">
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password"
                                                required=""
                                            />
                                            <label
                                                className="password-toggle-btn"
                                                aria-label="Show/hide password"
                                            >
                                                <input className="password-toggle-check" type="checkbox" />
                                                <span className="password-toggle-indicator" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultChecked=""
                                                id="remember_me"
                                            />
                                            <label className="form-check-label" htmlFor="remember_me">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link
                                            className="nav-link-inline fs-sm"
                                            to={'/account/auth/password-recovery'}
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <hr className="mt-4" />
                                    <div className="text-end pt-4">
                                        <button className="btn btn-primary" type="submit">
                                            <i className="ci-sign-in me-2 ms-n21" />
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-4 mt-3 mt-md-0">
                        <h2 className="h4 mb-3">No account? Sign up</h2>
                        <p className="fs-sm text-muted mb-4">
                            Registration takes less than a minute but gives you full control over
                            your orders.
                        </p>
                        <form className="needs-validation" noValidate="">
                            <div className="row gx-4 gy-3">
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-fn">
                                        First Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        id="reg-fn"
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your first name!
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-ln">
                                        Last Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        id="reg-ln"
                                    />
                                    <div className="invalid-feedback">Please enter your last name!</div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-email">
                                        E-mail Address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        required=""
                                        id="reg-email"
                                    />
                                    <div className="invalid-feedback">
                                        Please enter valid email address!
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-phone">
                                        Phone Number
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        id="reg-phone"
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your phone number!
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-password">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required=""
                                        id="reg-password"
                                    />
                                    <div className="invalid-feedback">Please enter password!</div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" htmlFor="reg-password-confirm">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required=""
                                        id="reg-password-confirm"
                                    />
                                    <div className="invalid-feedback">Passwords do not match!</div>
                                </div>
                                <div className="col-12 text-end">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="ci-user me-2 ms-n1" />
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SignInregister