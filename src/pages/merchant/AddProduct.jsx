import React from 'react'

const AddProduct = () => {
    return (
        <>
            {/* Title*/}
            <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                <h2 className="h3 py-2 me-2 text-center text-sm-start">
                    Add New Product
                </h2>
            </div>
            <form>
                <div className="mb-3 pb-2">
                    <label className="form-label" htmlFor="unp-product-name">
                        Product name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="unp-product-name"
                    />
                    <div className="form-text">
                        Maximum 100 characters. No HTML or emoji allowed.
                    </div>
                </div>
                <div className="file-drop-area mb-3">
                    <div className="file-drop-icon ci-cloud-upload" />
                    <span className="file-drop-message">
                        Drag and drop here to upload product screenshot
                    </span>
                    <input className="file-drop-input" type="file" />
                    <button
                        className="file-drop-btn btn btn-primary btn-sm mb-2"
                        type="button"
                    >
                        Or select file
                    </button>
                    <div className="form-text">
                        1000 x 800px ideal size for hi-res displays
                    </div>
                </div>
                <div className="mb-3 py-2">
                    <label className="form-label" htmlFor="unp-product-description">
                        Product description
                    </label>
                    <textarea
                        className="form-control"
                        rows={6}
                        id="unp-product-description"
                        defaultValue={""}
                    />
                    <div className="bg-secondary p-3 fs-ms rounded-bottom">
                        <span className="d-inline-block fw-medium me-2 my-1">
                            Markdown supported:
                        </span>
                        <em className="d-inline-block border-end pe-2 me-2 my-1">
                            *Italic*
                        </em>
                        <strong className="d-inline-block border-end pe-2 me-2 my-1">
                            **Bold**
                        </strong>
                        <span className="d-inline-block border-end pe-2 me-2 my-1">
                            - List item
                        </span>
                        <span className="d-inline-block border-end pe-2 me-2 my-1">
                            ##Heading##
                        </span>
                        <span className="d-inline-block">--- Horizontal rule</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="unp-standard-price">
                            Standard license price
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="ci-dollar" />
                            </span>
                            <input
                                className="form-control"
                                type="text"
                                id="unp-standard-price"
                            />
                        </div>
                        <div className="form-text">
                            Average marketplace price for this category is $15.
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="unp-extended-price">
                            Extended license price
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="ci-dollar" />
                            </span>
                            <input
                                className="form-control"
                                type="text"
                                id="unp-extended-price"
                            />
                        </div>
                        <div className="form-text">
                            Typically 10x of the Standard license price.
                        </div>
                    </div>
                </div>
                <div className="mb-3 py-2">
                    <label className="form-label" htmlFor="unp-product-tags">
                        Product tags
                    </label>
                    <textarea
                        className="form-control"
                        rows={4}
                        id="unp-product-tags"
                        defaultValue={""}
                    />
                    <div className="form-text">
                        Up to 10 keywords that describe your item. Tags should all be in
                        lowercase and separated by commas.
                    </div>
                </div>
                <div className="mb-3 pb-2">
                    <label className="form-label" htmlFor="unp-product-files">
                        Product files for sale
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id="unp-product-files"
                    />
                    <div className="form-text">Maximum file size is 1GB</div>
                </div>
                <button className="btn btn-primary d-block w-100" type="submit">
                    <i className="ci-cloud-upload fs-lg me-2" />
                    Upload Product
                </button>
            </form>
        </>
    )
}

export default AddProduct