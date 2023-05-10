import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { removeCartItem, selectCartItems, selectCartTotal } from '../providers/app/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Group, HoverCard, Image, ScrollArea } from '@mantine/core'
import { SHOPS } from '../config/constants'


const navlinks = [
    {
        id: 'a',
        label: 'Home',
        to: '/',
        icon: '',
        children: []
    },
    {
        id: 'b',
        label: 'Shop',
        to: '/shop',
        icon: '',
        children: []
    },
    {
        id: 'e',
        label: 'Cart',
        to: '/cart',
        icon: '',
        children: []
    },
    {
        id: 'c',
        label: 'Contact Us',
        to: '/contact-us',
        icon: '',
        children: []
    },
    {
        id: 'd',
        label: 'About Us',
        to: '/about-us',
        icon: '',
        children: []
    },
    {
        id: 'd',
        label: 'Sign In/ Sign Up',
        to: '/account/auth/',
        icon: '',
        children: []
    },
]

const HeaderCart = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    return (
        <HoverCard width={280} shadow="md" position='bottom-end'>
            <HoverCard.Target>
                <Group spacing={0}>
                    <a
                        className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                        href="javascript:void(0)"
                    >
                        <span className="navbar-tool-label">
                            {cartItems?.length}
                        </span>
                        <i className="navbar-tool-icon ci-cart" />
                    </a>
                    <a className="navbar-tool-text" href="javascript:void(0)">
                        <small>My Cart</small>Kes {cartTotal}
                    </a>
                </Group>
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Box sx={{
                    height: '400px',
                }}>
                    <ScrollArea style={{
                        height: 'calc(100% - 140px)'
                    }} scrollbarSize={4}>
                        <Box p="sm">
                            {
                                cartItems.map((item, i) => (
                                    <CartItem key={`nav_cart_item_${i}`} item={item} />
                                ))
                            }
                        </Box>
                    </ScrollArea>
                    <Box sx={{
                        height: '140px',
                    }}>
                        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                            <div className="fs-sm me-2 py-2">
                                <span className="text-muted">Subtotal:</span>
                                <span className="text-accent fs-base ms-1">
                                    KES {cartTotal}.<small>00</small>
                                </span>
                            </div>
                            <Link
                                className="btn btn-outline-secondary btn-sm"
                                to={'/cart'}
                            >
                                Expand cart
                                <i className="ci-arrow-right ms-1 me-n1" />
                            </Link>
                        </div>
                        <Link
                            className="btn btn-primary btn-sm d-block w-100"
                            to={`/checkout`}
                        >
                            <i className="ci-card me-2 fs-base align-middle" />
                            Checkout
                        </Link>
                    </Box>
                </Box>
            </HoverCard.Dropdown>
        </HoverCard>
    )
}

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeItemFromCart = () => {
        dispatch(removeCartItem({ id: item.product.id }))
    }

    return (
        <div className="widget-cart-item pb-2 border-bottom">
            <button
                className="btn-close text-danger"
                type="button"
                aria-label="Remove"
                onClick={removeItemFromCart}
            >
                <span aria-hidden="true">×</span>
            </button>
            <div className="d-flex align-items-center">
                <a className="flex-shrink-0" href="shop-single-v1.html">
                    <img
                        src={item?.product?.image}
                        width={64}
                        alt="Product"
                    />
                </a>
                <div className="ps-2">
                    <h6 className="widget-product-title">
                        <a href={`/shop/products/${item?.product.id}`}>
                            {item?.product?.title}
                        </a>
                    </h6>
                    <div className="widget-product-meta">
                        <span className="text-accent me-2">
                            Kes {item.product.price}.<small>00</small>
                        </span>
                        <span className="text-muted">x {item.qty}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavItem = ({ id, label, to, icon, children }) => {
    if (children?.length > 0) {
        return (
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                >
                    {label}
                </a>
                <ul className="dropdown-menu">
                    {
                        children.map((child, index) => (
                            <NavItem key={`${id}_${child?.id}`} {...child} />
                        ))
                    }
                </ul>
            </li>
        )
    }
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                className={({ isActive, isPending }) =>
                    isActive
                        ? `nav-link active` : 'nav-link'
                }
            >
                {label}
            </NavLink>
        </li>
    )
}

const Header = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const otherLinkClasses = "nav-item"

    return (
        <header className="shadow-sm">
            {/* Topbar*/}
            <div className="topbar topbar-dark bg-dark">
                <div className="container">
                    <div className="topbar-text dropdown d-md-none">
                        <a
                            className="topbar-link dropdown-toggle"
                            href="home-fashion-store-v2.html#"
                            data-bs-toggle="dropdown"
                        >
                            Useful links
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="tel:00331697720">
                                    <i className="ci-support text-muted me-2" />
                                    (00) 33 169 7720
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="order-tracking.html">
                                    <i className="ci-location text-muted me-2" />
                                    Order tracking
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="topbar-text text-nowrap d-none d-md-inline-block">
                        <i className="ci-support" />
                        <span className="text-muted me-1">Support</span>
                        <a className="topbar-link" href="tel:00331697720">
                            (00) 33 169 7720
                        </a>
                    </div>
                    {/* <div className="tns-carousel tns-controls-static d-none d-md-block">
                        <div
                            className="tns-carousel-inner"
                            data-carousel-options='{"mode": "gallery", "nav": false}'
                        >
                            <div className="topbar-text">Free shipping for order over $200</div>
                            <div className="topbar-text">We return money within 30 days</div>
                            <div className="topbar-text">Friendly 24/7 customer support</div>
                        </div>
                    </div> */}
                    <div className="ms-3 text-nowrap">
                        <a
                            className="topbar-link me-4 d-none d-md-inline-block"
                            href="order-tracking.html"
                        >
                            <i className="ci-location" />
                            Order tracking
                        </a>
                        <div className="topbar-text dropdown disable-autohide">

                        </div>
                    </div>
                </div>
            </div>
            {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
            <div className="navbar-sticky bg-light">
                <div className="navbar navbar-expand-lg navbar-light navbar-sticky-top">
                    <div className="container">
                        <NavLink
                            to={'/'}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? `${otherLinkClasses} active` : otherLinkClasses
                            }
                        >
                            <img src="/assets/images/esiolo-logo.jpg" width={142} alt="Esiolo" />
                        </NavLink>
                        <a
                            className="navbar-brand d-sm-none flex-shrink-0 me-2"
                            href="/"
                        >
                            <img src="/assets/images/esiolo-logo.jpg" width={74} alt="Esiolo" />
                        </a>
                        <div className="input-group d-none d-lg-flex mx-4">
                            <input
                                className="form-control rounded-end pe-5"
                                type="text"
                                placeholder="Search for products"
                            />
                            <i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3" />
                        </div>
                        <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            {/* <a
                                className="navbar-tool navbar-stuck-toggler"
                                href="home-fashion-store-v2.html#"
                            >
                                <span className="navbar-tool-tooltip">Expand menu</span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-menu" />
                                </div>
                            </a> */}
                            {/* <a
                                className="navbar-tool d-none d-lg-flex"
                                href="account-wishlist.html"
                            >
                                <span className="navbar-tool-tooltip">Wishlist</span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-heart" />
                                </div>
                            </a> */}
                            <Link
                                className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                                to={`/account`}
                            >
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-user" />
                                </div>
                                <div className="navbar-tool-text ms-n3">
                                    <small>Hello, Sign in</small>My Account
                                </div>
                            </Link>
                            <div className="navbar-tool dropdown ms-3">

                                {/* Cart dropdown*/}
                                <HeaderCart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            {/* Search*/}
                            <div className="input-group d-lg-none my-3">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3" />
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="Search for products"
                                />
                            </div>
                            {/* Departments menu*/}
                            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle ps-lg-0"
                                        href=""
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ci-view-grid me-2" />
                                        Departments
                                    </a>
                                    <div className="dropdown-menu px-2 pb-4" style={{width: "800px", maxWidth: '90vw'}}>
                                        <Grid>
                                            {
                                                SHOPS?.map((shop, index) => (
                                                    <Grid.Col key={`shop_${shop?.id}`} span={4} sm={2}>
                                                        <div className="widget widget-links">
                                                            <Link
                                                                className="d-block overflow-hidden rounded-3 mb-3"
                                                                to={`/shop/${shop?.id}`}
                                                            >
                                                                <Image src={shop?.logo} alt="Clothing" height={100} />
                                                            </Link>
                                                            <h6 className="fs-base mb-2">{shop?.name}</h6>
                                                        </div>
                                                    </Grid.Col>
                                                ))
                                            }
                                        </Grid>
                                    </div>
                                </li>
                            </ul>
                            {/* Primary menu*/}
                            <ul className="navbar-nav">
                                {
                                    navlinks.map((link, index) => (
                                        <NavItem key={index} {...link} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header