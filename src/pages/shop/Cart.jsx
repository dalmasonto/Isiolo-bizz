import { ActionIcon, Alert, Avatar, Box, Button, Group, Image, Text } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemQuantity, clearCart, removeCartItem, removeItemQuantity, selectCartItems, selectCartTotal } from '../../providers/app/appSlice'
import { showNotification } from '@mantine/notifications'
import { CURRENCY } from '../../config/constants'
import { IconAlertCircle, IconMinus, IconPlus } from '@tabler/icons'
import { formatCurrency } from '../../config/config'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const images = JSON.parse(item?.product?.images ? item?.product?.images : "[]")

    const handleDeleteItemFromCart = () => {
        dispatch(removeCartItem({ id: item?.product?.id }))
    }

    const handleUpdateQty = (prodID, add = true, qty) => {
        if (add) {
            dispatch(addItemQuantity({ id: prodID }))
            return
        }
        else {
            if(qty < 2){
                dispatch(removeCartItem({ id: prodID }))
            }
            else{
                dispatch(removeItemQuantity({ id: prodID }))
            }
            return
        }
    }

    return (
        <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
            <Box
                className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                style={{ width: "12.5rem" }}
            >
                <Image
                    width={100}
                    mx={'auto'}
                    radius="md"
                    src={images?.length > 0 ? images[0] : ''}
                    alt={item?.product?.name}
                />
                <span
                    className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                    data-bs-toggle="tooltip"
                    title="Remove from Cart"
                    onClick={handleDeleteItemFromCart}
                >
                    <i className="ci-trash" />
                </span>
            </Box>
            <div className="text-center text-sm-start">
                <h3 className="h6 product-title mb-2">
                    <Link to={`/shop`}>
                        {item?.product?.name}
                    </Link>
                </h3>
                <div className="d-inline-block text-accent">
                    {CURRENCY} {formatCurrency(item?.product?.price)}
                </div>
                <Group align='center'>
                    <ActionIcon onClick={() => handleUpdateQty(item?.product?.id, false, item?.qty)} color='red' size="md" variant='light'>
                        <IconMinus />
                    </ActionIcon>
                    <Text size="sm"
                        className="d-inline-block text-accent"
                    >
                        qty: {item?.qty}
                    </Text>
                    <ActionIcon onClick={() => handleUpdateQty(item?.product?.id, true, item?.qty)} color='blue' size="md" variant='light'>
                        <IconPlus />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    )
}

const Cart = () => {

    const dispatch = useDispatch()
    const items = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const handleClearCart = () => {
        dispatch(clearCart())
        showNotification({
            title: 'Cart cleared',
            message: 'Your cart has been cleared',
            color: 'red',
            autoClose: 5000,
            icon: <i className="ci-cart" />,
        })
    }

    return (
        <>
            {/* Page Title*/}
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <Link className="text-nowrap" to="/">
                                        <i className="ci-home" />
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap">
                                    <Link to={"/shop"}>Shop</Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Cart
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Your cart</h1>
                    </div>
                </div>
            </div>
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        {/* Content*/}
                        <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
                            <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                                {/* Header*/}
                                <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3">
                                    <div className="py-1">
                                        <Link
                                            className="btn btn-outline-accent btn-sm"
                                            to={"/shop"}
                                        >
                                            <i className="ci-arrow-left me-1 ms-n1" />
                                            Back to shopping
                                        </Link>
                                    </div>
                                    <div className="d-none d-sm-block py-1 fs-sm">
                                        You have {items?.length} products in your cart
                                    </div>
                                    <div className="py-1">
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            disabled={items?.length === 0}
                                            onClick={handleClearCart}
                                        >
                                            <i className="ci-close fs-xs me-1 ms-n1" />
                                            Clear cart
                                        </button>
                                    </div>
                                </div>
                                {/* Product*/}
                                {
                                    items?.map((item, i) => (
                                        <CartItem key={`cart_item_${i}`} item={item} />
                                    ))
                                }
                                {
                                    items?.length === 0 ? (
                                        <Alert icon={<IconAlertCircle size="1rem" />} my={20} title="Cart Empty!">
                                            Your cart is empty. <Link to={"/shop"}>Click here to continue shopping</Link>
                                        </Alert>
                                    ) : null
                                }
                            </div>
                        </section>
                        {/* Sidebar*/}
                        <aside className="col-lg-4 ps-xl-5">
                            <hr className="d-lg-none" />
                            <div className="p-4 h-100 ms-auto border-start">
                                <div className="px-lg-2">
                                    <div className="text-center mb-4 py-3 border-bottom">
                                        <h2 className="h6 mb-3 pb-1">Cart total</h2>
                                        <h3 className="fw-normal">
                                            {CURRENCY} {formatCurrency(cartTotal)}
                                        </h3>
                                    </div>
                                    <div className="text-center mb-4 pb-3 border-bottom d-none">
                                        <h2 className="h6 mb-3 pb-1">Promo code</h2>
                                        <form
                                            className="needs-validation pb-2"
                                            method="post"
                                            noValidate=""
                                        >
                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Promo code"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide promo code.
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-secondary d-block w-100"
                                                type="submit"
                                            >
                                                Apply promo code
                                            </button>
                                        </form>
                                    </div>
                                    <Link
                                        className="btn btn-primary btn-shadow d-block w-100 mt-4"
                                        to={"/checkout"}
                                    >
                                        <i className="ci-locked fs-lg me-2" />
                                        Secure Checkout
                                    </Link>
                                    <div className="text-center pt-2 pb-3">
                                        <small className="text-form text-muted">
                                            100% money back guarantee
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart