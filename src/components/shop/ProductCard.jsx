import { Rating, Box, useMantineTheme } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../providers/app/appSlice'
import { formatCurrency, limitChars } from '../../config/config'
import slugify from 'slugify'

const ProductCard = ({ product }) => {

    const theme = useMantineTheme()
    const dispatch = useDispatch()
    const images = JSON.parse(product?.images ? product?.images : "[]")

    const addProductToCart = (product, qty) => {
        dispatch(addToCart({ product, qty }))
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
                overflow: "hidden",
                background: theme.colors.gray[1]
            }}>
                <Link
                    className="card-img-top d-block overflow-hidden"
                    to={`/shop/products/${product?.id}/${slugify(product?.name)}/`}
                >
                    <img src={images?.length > 0 ? images[0] : "/assets/images/products/Fresh-Camel-Milk.jpg"} alt="Product" />
                </Link>
            </Box>
            <div className="card-body py-2">
                <Link
                    className="product-meta d-block fs-xs pb-1 d-none"
                    to={`/shop/merchants/${product?.merchant?.id}/${product?.merchant?.slug}/`}
                >
                    Seller: {limitChars(product?.merchant?.name ?? "Not provided", 16)}
                </Link>
                <h3 className="product-title fs-sm">
                    <Link to={`/shop/products/${product?.id}/${slugify(product?.name)}`}>{product?.name}</Link>
                </h3>
                <div className="d-flex justify-content-between">
                    <div className="product-price">
                        <span className="text-accent">
                            KES {formatCurrency(product?.price)}
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