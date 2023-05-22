import { Box } from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ADMIN_BASE_URL } from '../../config/constants'

const sidebarLinkgs = [
    {
        group: 'Account',
        links: [
            {
                title: 'Settings',
                icon: 'ci-settings',
                to: `/${ADMIN_BASE_URL}/`,
            },
        ]
    },
    {
        group: 'Admin Dashboard',
        links: [
            {
                title: 'Dashboard',
                icon: 'ci-bag',
                to: `/${ADMIN_BASE_URL}/dashboard/`,
            },
            {
                title: 'Users',
                icon: 'ci-user',
                to: `/${ADMIN_BASE_URL}/users/`,
            },
            {
                title: 'Merchants',
                icon: 'ci-store',
                to: `/${ADMIN_BASE_URL}/merchants/`,
            },
            {
                title: 'Categories',
                icon: 'ci-package',
                to: `/${ADMIN_BASE_URL}/categories/`,
            },
            {
                title: 'Contact Form Entries',
                icon: 'ci-message',
                to: `/${ADMIN_BASE_URL}/contact-form-entries/`,
            },
            {
                title: 'Reviews',
                icon: 'ci-star',
                to: `/${ADMIN_BASE_URL}/reviews/`,
            }
        ]
    },
]

const AdminSidebar = () => {

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
                        sidebarLinkgs.map((group, j) => (
                            <div key={`group_${group.group}`}>
                                <div className="bg-secondary p-4">
                                    <h3 className="fs-sm mb-0 text-muted">{group.group}</h3>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    {
                                        group.links.map((link, i) => (
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

export default AdminSidebar