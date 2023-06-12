import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout, removeCartItem, selectCartItems, selectCartTotal, selectLoggedIn, selectUser } from '../providers/app/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Anchor, Avatar, Box, Grid, Group, HoverCard, Image, ScrollArea, Stack, Text, Title } from '@mantine/core'
import { ADMIN_BASE_URL, CURRENCY, SHOPS, URLS } from '../config/constants'
import { formatCurrency, limitChars, makeRequestOne } from '../config/config';
import { modals } from '@mantine/modals'
import useSwr from 'swr';
import { IconAlertCircle } from '@tabler/icons'


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
    // {
    //     id: 'e',
    //     label: 'Sign In/ Sign Up',
    //     to: '/account/auth/',
    //     icon: '',
    //     children: [],
    //     logInRequired: true
    // },
    {
        id: 'f',
        label: 'Merchant',
        to: '/merchant',
        icon: '',
        children: [],
        logInRequired: true
    },
    {
        id: 'f',
        label: 'Admin',
        to: ADMIN_BASE_URL,
        icon: '',
        children: [],
        logInRequired: true
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
                        <small>My Cart</small>Kes {formatCurrency(cartTotal)}
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
                                cartItems?.map((item, i) => (
                                    <CartItem key={`nav_cart_item_${i}`} item={item} />
                                ))
                            }
                            {
                                cartItems?.length === 0 ? (
                                    <Alert icon={<IconAlertCircle size="1rem" />} my={20} title="Cart Empty!">
                                        Your cart is empty. <Link to={"/shop"}>Click here to continue shopping</Link>
                                    </Alert>
                                ) : null
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
    const images = JSON.parse(item?.product?.images ? item?.product?.images : "[]")

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
                        src={images?.length > 0 ? images[0] : ''}
                        width={64}
                        alt={item?.product?.name}
                    />
                </a>
                <div className="ps-2">
                    <h6 className="widget-product-title">
                        <a href={`/shop/products/${item?.product.id}`}>
                            {item?.product?.name}
                        </a>
                    </h6>
                    <div className="widget-product-meta">
                        <span className="text-accent me-2">
                            {CURRENCY} {item?.product?.price}
                        </span>
                        <span className="text-muted">x {item?.qty}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavItem = ({ id, label, to, icon, children, click }) => {
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
                        children?.map((child, index) => (
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
                onClick={click}
            >
                {label}
            </NavLink>
        </li>
    )
}

const Header = () => {
    const [navbarOpen, setNavbarOPen] = React.useState(false)
    const loggedIn = useSelector(selectLoggedIn)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const merchantsData = merchantsQuery?.data?.data?.data

    const otherLinkClasses = "nav-item"

    const openCloseNavbar = () => {
        setNavbarOPen(!navbarOpen)
    }

    const handleLogout = () => modals.openConfirmModal({
        title: 'You are about to Logout!',
        centered: true,
        radius: "lg",
        children: (
            <Text size="sm">
                Please confirm that you want to logout.
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => { },
        onConfirm: () => dispatch(logout()),
    });

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
                        <NavLink
                            className="navbar-brand d-sm-none d-none flex-shrink-0 me-2"
                            to={'/'}
                        >
                            <img src="/assets/images/esiolo-logo.jpg" width={74} alt="Esiolo" />
                        </NavLink>
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
                                // data-bs-toggle="collapse"
                                // data-bs-target="#navbarCollapse"
                                onClick={openCloseNavbar}
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" style={{ cursor: "pointer" }}>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-user" />
                                </div>
                                {
                                    loggedIn ? (
                                        <div className="navbar-tool-text ms-n3" onClick={handleLogout}>
                                            <small>Hello {limitChars(user?.user?.name, 6)}, Sign out </small>My Account
                                        </div>
                                    ) : (
                                        <Link to='/account/auth'>
                                            <div className="navbar-tool-text ms-n3">
                                                <small>Hello, Sign in</small>Account
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                            <div className="navbar-tool dropdown ms-3">

                                {/* Cart dropdown*/}
                                <HeaderCart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                    <div className="container">
                        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarCollapse">
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
                                        Shops
                                    </a>
                                    <div className="dropdown-menu px-2 pb-4" style={{ width: "800px", maxWidth: '90vw' }}>
                                        <Grid>
                                            {
                                                merchantsData?.map((shop, index) => (
                                                    <Grid.Col key={`shop_${shop?.id}`} span={4} sm={2}>
                                                        <Stack onClick={() => setNavbarOPen(false)} spacing={0} align='center'>
                                                            <Link
                                                                className="d-block overflow-hidden rounded-3"
                                                                to={`/shop/merchants/${shop?.id}/${shop?.slug}/`}
                                                            >
                                                                <Avatar src={shop?.logo ? shop?.logo : "/logos/Bidii-farmers-self--help-group-Reviewed-Logo.jpg"} alt={shop?.name} radius="md" size={72} />
                                                            </Link>
                                                            <Title order={6} weight={400} size={14} className="mb-2 text-center" mx={4}>{shop?.name}</Title>
                                                        </Stack>
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
                                    navlinks?.filter(item => !item?.logInRequired)?.map((link, index) => (
                                        <NavItem key={index} {...link} click={() => setNavbarOPen(false)} loggedIn={loggedIn} />
                                    ))
                                }
                                {
                                    loggedIn && user?.user?.isMerchant && (
                                        <NavItem {...{
                                            id: 'f',
                                            label: 'Merchant',
                                            to: '/merchant',
                                            icon: '',
                                            children: [],
                                            logInRequired: true
                                        }} click={() => setNavbarOPen(false)} loggedIn={loggedIn} />
                                    )
                                }
                                {
                                    loggedIn && (user?.user?.isAdministrator || user?.user?.isManager) && (
                                        <NavItem {...{
                                            id: 'f',
                                            label: 'Admin',
                                            to: ADMIN_BASE_URL,
                                            icon: '',
                                            children: [],
                                            logInRequired: true
                                        }} click={() => setNavbarOPen(false)} loggedIn={loggedIn} />
                                    )
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