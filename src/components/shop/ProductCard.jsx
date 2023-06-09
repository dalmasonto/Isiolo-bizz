import { Box, useMantineTheme, Text, Anchor, Stack, Image } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../providers/app/appSlice'
import { formatCurrency, limitChars } from '../../config/config'
import slugify from 'slugify'
import { modals } from '@mantine/modals'
import { CURRENCY } from '../../config/constants'

const ProductCard = ({ product }) => {

    const theme = useMantineTheme()
    const dispatch = useDispatch()
    const images = JSON.parse(product?.images ? product?.images : "[]")

    const shopNowModal = () => modals.open({
        title: "Shop Now!",
        radius: "md",
        size: "sm",
        centered: true,
        children: (
            <Box>
                <Text></Text>
                <Stack spacing={0}>
                    <button
                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                        onClick={modals.closeAll}>
                        Continue Shopping
                    </button>
                    <Anchor onClick={modals.closeAll} component={Link} className='btn d-block w-100 btn-primary btn-sm' to={'/checkout'}>Checkout</Anchor>
                </Stack>
            </Box>
        )
    })

    const addProductToCart = (product, qty) => {
        dispatch(addToCart({ product, qty }))
        shopNowModal()
        showNotification({
            title: 'Added to cart',
            message: `${product?.name} added to cart`,
            color: 'green',
            icon: <IconCheck stroke={1.5} />
        })
    }

    return (
        <div className="card product-card">
            <button
                className="btn-wishlist btn-sm d-none"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
            >
                <i className="ci-heart" />
            </button>
            <Box style={{
                height: "200px",
                overflow: "hidden"
            }}>
                <Link
                    className="card-img-top d-block overflow-hidden"
                    to={`/shop/products/${product?.id}/${slugify(product?.name)}/`}
                >
                    <Image width="96%" radius="md" mx="auto" src={images?.length > 0 ? images[0] : "/assets/images/products/Fresh-Camel-Milk.jpg"} alt="Product" />
                </Link>
            </Box>
            <div className="card-body py-2">
                <h3 className="product-title fs-sm text-capitalize">
                    <Link to={`/shop/products/${product?.id}/${slugify(product?.name)}`}>{product?.name}</Link>
                </h3>
                <div className="d-flex justify-content-between">
                    <div className="product-price">
                        <span className="text-accent">
                            {CURRENCY} {formatCurrency(product?.price)}
                        </span>
                    </div>
                    {/* <Rating value={product?.rating ?? 4.5} readOnly size='sm' fractions={2} /> */}
                </div>
            </div>
            <div className="card-body card-body-hidden">
                <button
                    className="btn btn-primary btn-sm d-block w-100 mb-2"
                    type="button"
                    onClick={() => addProductToCart(product, 1)}
                >
                    <i className="ci-cart fs-sm me-1" />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard