import React from 'react'

const StatCard = ({title, value, tagline}) => {
    return (
        <div className="col-md-4 col-sm-6 px-2 mb-4">
            <div className="bg-secondary h-100 rounded-3 p-4 text-center">
                <h3 className="fs-sm text-muted">{title}</h3>
                <p className="h2 mb-2">
                    {value ?? 0}
                </p>
                <p className="fs-ms text-muted mb-0">{tagline}</p>
            </div>
        </div>
    )
}

export default StatCard