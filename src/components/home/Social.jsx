import { Anchor } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
    return (
        <section className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-4">
                    <Anchor
                        className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary"
                        to="/shop"
                        component={Link}
                    >
                        <div className="card-body text-center">
                            <i className="ci-facebook h3 mt-2 mb-4 text-primary" />
                            <h3 className="h5 mb-1">Facebook</h3>
                            <p className="text-muted fs-sm">
                                Esiolo Marketplace
                            </p>
                        </div>
                    </Anchor>
                </div>
                <div className="col-4">
                    <Anchor
                        className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
                        to="/shop"
                        component={Link}
                    >
                        <div className="card-body text-center">
                            <i className="ci-twitter h3 mt-2 mb-4 text-accent" />
                            <h3 className="h5 mb-1">Twitter</h3>
                            <p className="text-muted fs-sm">
                                @esiolomarketplace
                            </p>
                        </div>
                    </Anchor>
                </div>
                <div className="col-4">
                    <Anchor
                        className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-warning"
                        to="https://www.instagram.com/esiolomarketplace/"
                        component={Link}
                    >
                        <div className="card-body text-center">
                            <i className="ci-instagram h3 mt-2 mb-4 text-warning" />
                            <h3 className="h5 mb-1">Instagram</h3>
                            <p className="text-muted fs-sm">#esiolomarketplace</p>
                        </div>
                    </Anchor>
                </div>
            </div>
        </section>
    )
}

export default Social