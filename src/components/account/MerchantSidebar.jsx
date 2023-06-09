import { Box } from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const sidebarLinkgs = [
    {
        group: 'Account',
        links: [
            {
                title: 'Profile',
                icon: 'ci-settings',
                to: '/merchant/',
            },
            {
                title: 'Shop Settings',
                icon: 'ci-settings',
                to: '/merchant/settings/',
            },
        ]
    },
    {
        group: 'Merchant Dashboard',
        links: [
            {
                title: 'Dashboard',
                icon: 'ci-bag',
                to: '/merchant/dashboard/',
            },
            {
                title: 'Orders',
                icon: 'ci-cart',
                to: '/merchant/orders/',
            },
            {
                title: 'Statements',
                icon: 'ci-package',
                to: '/merchant/statements/',
            },
            {
                title: 'Products',
                icon: 'ci-package',
                to: '/merchant/products/',
            },
            {
                title: 'Add Product',
                icon: 'ci-add',
                to: '/merchant/add-product/',
            },
        ]
    },
]

const MerchantSidebar = () => {

    const linkClasses = "nav-link-style d-flex align-items-center px-4 py-3"
    return (
        <aside className="col-lg-4 pe-xl-5">
            {/* Account menu toggler (hidden on screens larger 992px)*/}
            <div className="d-block d-lg-none p-4">
                <Box
                    className="btn btn-outline-accent d-block"
                    data-bs-toggle="collapse"
                >
                    <i className="ci-menu me-2" />
                    Account menu
                </Box>
            </div>
            {/* Actual menu*/}
            <div className="h-100 border-end mb-2">
                <div className="d-lg-block collapse" id="account-menu">
                    {
                        sidebarLinkgs?.map((group, j) => (
                            <div key={`group_${group.group}`}>
                                <div className="bg-secondary p-4">
                                    <h3 className="fs-sm mb-0 text-muted">{group.group}</h3>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    {
                                        group.links?.map((link, i) => (
                                            <li key={`${group.group}_${i}`} className="border-bottom mb-0">
                                                <NavLink
                                                    className={({ isActive, isPending }) =>
                                                        isActive
                                                            ? `${linkClasses} active` : linkClasses
                                                    }
                                                    to={link.to}
                                                >
                                                    <i className={`${link.icon} opacity-60 me-2`} />
                                                    {link.title}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>))
                    }
                </div>
            </div>
        </aside >
    )
}

export default MerchantSidebar