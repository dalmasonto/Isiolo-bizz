import React from 'react'
import { URLS } from '../../config/constants';
import { Link } from 'react-router-dom';
import { Checkbox, Text } from '@mantine/core';
import useSwr from 'swr';
import { makeRequestOne } from '../../config/config';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';

const Sidebar = () => {
    const [selectedMerchants, setSelectedMerchants] = React.useState([])
    const token = useSelector(selectToken)
    const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', { Authorization: `Bearer ${token}` }, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const categoriesData = categoriesQuery?.data?.data?.data

    const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', { Authorization: `Bearer ${token}` }, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const merchantsData = merchantsQuery?.data?.data?.data

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
                            categoriesData?.map((category) => (
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
                            <Checkbox.Group value={selectedMerchants} onChange={setSelectedMerchants}>
                                {
                                    merchantsData?.map((merchant) => (
                                        <li key={`shop_brand_${merchant?.id}`} className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                            <div >
                                                <Checkbox
                                                    value={merchant?.id + ""}
                                                    label={merchant?.name}
                                                    labelPosition='right'
                                                    ml={0}
                                                />
                                            </div>
                                            <span className="fs-xs text-muted">
                                                {Math.ceil(Math.random() * 600)}
                                            </span>
                                        </li>
                                    ))
                                }
                            </Checkbox.Group>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar