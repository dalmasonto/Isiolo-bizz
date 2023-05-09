import { Rating } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../providers/app/appSlice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const addProductToCart = (product, qty) => {
        dispatch(addToCart({ product, qty }))
        showNotification({
            title: 'Added to cart',
            message: `${product.title} added to cart`,
            color: 'green',
            icon: <IconCheck stroke={1.5} />
        })
    }

    return (
        <div className="card product-card">
            <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
            >
                <i className="ci-heart" />
            </button>
            <Link
                className="card-img-top d-block overflow-hidden"
                to={`/shop/products/${product.id}`}
            >
                <img src={product?.image} alt="Product" />
            </Link>
            <div className="card-body py-2">
                <Link
                    className="product-meta d-block fs-xs pb-1"
                    to={`/shop/categories/${product?.category?.id}`}
                >
                    {product?.category?.title}
                </Link>
                <h3 className="product-title fs-sm">
                    <Link to={`/shop/products/${product?.id}`}>{product?.title}</Link>
                </h3>
                <div className="d-flex justify-content-between">
                    <div className="product-price">
                        <span className="text-accent">
                            KES {product?.price}  <small>00</small>
                        </span>
                    </div>
                    <Rating value={product.rating} readOnly size='sm' />
                </div>
            </div>
            <div className="card-body card-body-hidden">
                <div className="text-center pb-2">
                    <div className="form-check form-option form-check-inline mb-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="size1"
                            id="s-75"
                        />
                        <label className="form-option-label" htmlFor="s-75">
                            7.5
                        </label>
                    </div>
                    <div className="form-check form-option form-check-inline mb-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="size1"
                            id="s-80"
                            checked
                        />
                        <label className="form-option-label" htmlFor="s-80">
                            8
                        </label>
                    </div>
                    <div className="form-check form-option form-check-inline mb-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="size1"
                            id="s-85"
                        />
                        <label className="form-option-label" htmlFor="s-85">
                            8.5
                        </label>
                    </div>
                    <div className="form-check form-option form-check-inline mb-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="size1"
                            id="s-90"
                        />
                        <label className="form-option-label" htmlFor="s-90">
                            9
                        </label>
                    </div>
                </div>
                <button
                    className="btn btn-primary btn-sm d-block w-100 mb-2"
                    type="button"
                    onClick={() => addProductToCart(product, 1)}
                >
                    <i className="ci-cart fs-sm me-1" />
                    Add to Cart
                </button>
                <div className="text-center">
                    <a
                        className="nav-link-style fs-ms"
                        href="javascript:void(0)"
                    >
                        <i className="ci-eye align-middle me-1" />
                        Quick view
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard