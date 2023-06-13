import React, { useState } from 'react'
import { URLS } from '../../config/constants';
import { NavLink } from 'react-router-dom';
import { Stack, Text, TextInput } from '@mantine/core';
import useSwr from 'swr';
import { makeRequestOne } from '../../config/config';
import slugify from 'slugify';

const Sidebar = () => {

    const [merchantSearch, setMerchantSearch] = useState("")

    const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const categoriesData = categoriesQuery?.data?.data?.data

    const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const merchantsData = merchantsQuery?.data?.data?.data

    const filteredMerchants = () => {
        const res = merchantsData?.filter(merchant => {
            const searchTerm = merchantSearch
            const regex = new RegExp(searchTerm, "gi")
            return merchant?.name?.match(regex)
        })
        return res
    }

    const linkClasses = "widget-list-link d-flex justify-content-between align-items-center"

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
                        <Stack spacing={8}>
                            {
                                categoriesData?.sort((a, b) => a?.name?.localeCompare(b?.name))?.map((category) => (
                                    <NavLink

                                        key={`_category_${category?.id}`}
                                        to={`/shop/categories/${category?.id}/${category?.slug}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? `${linkClasses} sidebar-active-link` : linkClasses
                                        }
                                    >
                                        <Text className="widget-filter-item-text text-capitalize" size="sm">
                                            {category?.name}
                                        </Text>
                                        <span className="fs-xs text-muted ms-3">
                                            
                                        </span>
                                    </NavLink>
                                ))
                            }
                        </Stack>
                    </div>

                    {/* Filter by Brand*/}
                    <div className="widget  mb-4 pb-4 border-bottom">
                        <h3 className="widget-title">Brand</h3>
                        <div className=" mb-2">
                            <TextInput
                                type="text"
                                radius="md"
                                placeholder="Search"
                                value={merchantSearch}
                                onChange={e => setMerchantSearch(e.currentTarget.value)}
                                rightSection={<i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3" />}
                            />
                        </div>
                        <div className="widge widget-categorie mb-4 pb-4 border-bottom">
                            <Stack spacing={8}>
                                {
                                    filteredMerchants()?.sort((a, b) => a?.name?.localeCompare(b?.name))?.map((merchant) => (
                                        <NavLink
                                            key={`_merchant_${merchant?.id}`}
                                            to={`/shop/merchants/${merchant?.id}/${slugify(merchant?.name)}`}
                                            className={({ isActive, isPending }) =>
                                                isActive
                                                    ? `${linkClasses} sidebar-active-link` : linkClasses
                                            }
                                        >
                                            <Text className="widget-filter-item-text text-capitalize" size="sm">
                                                {merchant?.name ? merchant?.name : "Another merchant"}
                                            </Text>
                                            <span className="fs-xs text-muted ms-3">
                                                
                                            </span>
                                        </NavLink>
                                    ))
                                }
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar