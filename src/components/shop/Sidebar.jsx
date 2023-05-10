import React from 'react'
import Categories from '../../pages/admin/products/Categories';
import { CATEOGORIES, SHOPS } from '../../config/constants';
import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

const Sidebar = () => {
    return (
        <aside className="col-lg-4">
            {/* Sidebar*/}
            <div
                className="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
                id="shop-sidebar"
                style={{ maxWidth: "22rem" }}
            >
                <div className="offcanvas-header align-items-center shadow-sm">
                    <h2 className="h5 mb-0">Filters</h2>
                    <button
                        className="btn-close ms-auto"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
                    {/* Categories*/}
                    <div className="widget widget-categories mb-4 pb-4 border-bottom">
                        <h3 className="widget-title">Categories</h3>
                        {
                            CATEOGORIES.map((category) => (
                                <Link
                                    key={`_category_${category?.id}`}
                                    className="widget-list-link d-flex justify-content-between align-items-center"
                                    to={`/shop/categories/${category?.id}`}
                                >
                                    <Text className="widget-filter-item-text" size="md">
                                        {category?.name}
                                    </Text>
                                    <span className="fs-xs text-muted ms-3">{Math.ceil(Math.random() * 300)}</span>
                                </Link>
                            ))
                        }
                    </div>

                    {/* Filter by Brand*/}
                    <div className="widget widget-filter mb-4 pb-4 border-bottom">
                        <h3 className="widget-title">Brand</h3>
                        <div className="input-group input-group-sm mb-2">
                            <input
                                className="widget-filter-search form-control rounded-end pe-5"
                                type="text"
                                placeholder="Search"
                            />
                            <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3" />
                        </div>
                        <ul
                            className="widget-list widget-filter-list list-unstyled pt-1"
                            style={{ maxHeight: "25rem" }}
                            data-simplebar=""
                            data-simplebar-auto-hide="false"
                        >
                            {
                                SHOPS.map((shop) => (
                                    <li key={`shop_brand_${shop?.id}`} className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={shop?.id}
                                            />
                                            <label
                                                className="form-check-label widget-filter-item-text"
                                                htmlFor={shop?.id}
                                            >
                                                {shop?.name}
                                            </label>
                                        </div>
                                        <span className="fs-xs text-muted">
                                            {Math.ceil(Math.random() * 600)}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar