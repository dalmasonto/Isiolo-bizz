import React from 'react'

const MerchantDashboard = () => {
    return (
        <div>
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 py-2 text-center text-sm-start">Your sales / earnings</h2>
                <div className="row mx-n2 pt-2">
                    <div className="col-md-4 col-sm-6 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Earnings (before taxes)</h3>
                            <p className="h2 mb-2">
                                $1,690.<small>50</small>
                            </p>
                            <p className="fs-ms text-muted mb-0">Sales 8/1/2021 - 8/15/2021</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Your balance</h3>
                            <p className="h2 mb-2">
                                $1,375.<small>00</small>
                            </p>
                            <p className="fs-ms text-muted mb-0">To be paid on 8/15/2021</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-2 mb-4">
                        <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                            <h3 className="fs-sm text-muted">Lifetime earnings</h3>
                            <p className="h2 mb-2">
                                $9,156.<small>74</small>
                            </p>
                            <p className="fs-ms text-muted mb-0">Based on list price</p>
                        </div>
                    </div>
                </div>
                <div className="row mx-n2">
                    <div className="col-lg-12 px-2">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h3 className="fs-sm pb-3 mb-3 border-bottom">
                                    Sales value, USD{" "}
                                    <span className="fw-normal fs-xs text-muted">(Past 2 weeks)</span>
                                </h3>
                                <div
                                    className="ct-chart ct-perfect-fourth"
                                    data-line-chart='{"labels": ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"], "series": [[0, 100, 200, 150, 50, 0, 0, 50, 0, 50, 50, 50, 0, 100, 0]]}'
                                />
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-2">
                            <div className="card-body">
                                <h3 className="fs-sm pb-3 mb-3 border-bottom">
                                    Order count{" "}
                                    <span className="fw-normal fs-xs text-muted">(Past 2 weeks)</span>
                                </h3>
                                <div
                                    className="ct-chart ct-perfect-fourth"
                                    data-line-chart='{"labels": ["22 Jul", "", "24 Jul", "", "26 Jul", "", "28 Jul", "", "30 Jul", "", "01 Aug", "", "03 Aug", "", "05 Aug"], "series": [[0, 2, 4, 3, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 0]]}'
                                    data-options='{"axisY": {"onlyInteger": true}}'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MerchantDashboard