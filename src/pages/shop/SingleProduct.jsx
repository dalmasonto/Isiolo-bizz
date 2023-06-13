import { Center, Group, Image, NumberInput, Rating, Stack, Text } from '@mantine/core'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { CURRENCY, URLS } from '../../config/constants'
import useSwr from 'swr';
import { formatCurrency, makeRequestOne } from '../../config/config';
import { Carousel } from '@mantine/carousel';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import { addToCart } from '../../providers/app/appSlice';
import ProductCard from '../../components/shop/ProductCard';
import { useMediaQuery } from '@mantine/hooks';

const SingleProduct = () => {
    const { id, slug } = useParams()

    const dispatch = useDispatch()
    const matches = useMediaQuery('(max-width: 56.25em)'); 

    const productQuery = useSwr([`${URLS.PRODUCTS}/${id}/`, 'GET', {}, {}, { include: 'category,merchant' }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const product = productQuery?.data?.data?.data
    const images = JSON.parse(product?.images ? product?.images : "[]")
    
    const similarProductsQuery = useSwr([`${URLS.PRODUCTS}`, 'GET', {}, {}, { 'filter[category_id]': product?.category_id, 'exclude[id]': id }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const products = similarProductsQuery?.data?.data?.data

    const productForm = useForm({
        initialValues: {
            qty: 1
        }
    })

    const addProductToCart = () => {
        const qty = productForm.values['qty']
        dispatch(addToCart({ product, qty }))
        showNotification({
            title: 'Added to cart',
            message: `${product?.name} added to cart`,
            color: 'green',
            icon: <IconCheck stroke={1.5} />
        })
    }



    return (
        <>
            {/* Page Title*/}
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <Link className="text-nowrap" to={'/'}>
                                        <i className="ci-home" />
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap">
                                    <Link to={'/shop'}>Shop</Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    {product?.name}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">{product?.name}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Gallery + details*/}
                <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                    <div className="px-lg-3">
                        <div className="row">
                            {/* Product gallery*/}
                            <div className="col-lg-7 pe-lg-0 pt-lg-4">
                                <div>
                                    <Carousel mx="auto" withIndicators align="center" loop color='red'>
                                        {
                                            images?.map((image, i) => (
                                                <Carousel.Slide key={`product_${product?.id}_image_${i}`} >
                                                    <Image src={image ? image : "/assets/img/shop/single/gallery/01.jpg"} mx="auto" width={"70%"} radius="lg" />
                                                </Carousel.Slide>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                            </div>
                            {/* Product details*/}
                            <div className="col-lg-5 pt-4 pt-lg-0">
                                <div className="product-details ms-auto pb-3">
                                    {/* <div className="d-flex justify-content-between align-items-center mb-2">
                                        <a href="shop-single-v1.html#reviews" data-scroll="">
                                            <div className="star-rating">
                                                <Rating value={4.5} readOnly size='sm' fractions={2} />
                                            </div>
                                            <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
                                                74 Reviews
                                            </span>
                                        </a>
                                        <button
                                            className="btn-wishlist me-0 me-lg-n3"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            title="Add to wishlist"
                                        >
                                            <i className="ci-heart" />
                                        </button>
                                    </div> */}
                                    <div className="mb-3">
                                        <span className="h3 fw-normal text-accent me-1">
                                            {CURRENCY} {formatCurrency(product?.price)}
                                        </span>
                                        <span className="badge bg-danger badge-shadow align-middle mt-n2">
                                            Sale
                                        </span>
                                    </div>
                                    <div className="position-relative me-n4 mb-3" style={{
                                        height: "20px"
                                    }}>
                                       {/*  <div className="product-badge product-available mt-n1">
                                            <i className="ci-security-check" />
                                            Product available
                                        </div> */}
                                    </div>
                                    <form className="mb-grid-gutter" onSubmit={productForm.onSubmit((values) => addProductToCart())}>

                                        <Group mb={"md"}>
                                            <NumberInput
                                                style={{ width: "5rem" }}
                                                min={1}
                                                {...productForm.getInputProps('qty')}
                                            />
                                            <button
                                                className="btn btn-primary btn-shadow d-block flex-1"
                                                type="submit"
                                            >
                                                <i className="ci-cart fs-lg me-2" />
                                                Add to Cart
                                            </button>
                                        </Group>
                                    </form>
                                    {/* Product panels*/}
                                    <div className="accordion mb-4" id="productPanels">
                                        <div className="accordion-item">
                                            <h3 className="accordion-header">
                                                <a
                                                    className="accordion-button"
                                                    href="#productInfo"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="true"
                                                    aria-controls="productInfo"
                                                >
                                                    <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2" />
                                                    Product info
                                                </a>
                                            </h3>
                                            <div
                                                className="accordion-collapse collapse show"
                                                id="productInfo"
                                                data-bs-parent="#productPanels"
                                            >
                                                <div className="accordion-body">
                                                    <Stack>
                                                        <div>
                                                            <h6 className="fs-sm mb-2"><strong>Name</strong></h6>
                                                            <Text className="text-capitalize">
                                                                {product?.name}
                                                            </Text>
                                                        </div>
                                                        <div>
                                                            <h6 className="fs-sm mb-2"><strong>Seller</strong></h6>
                                                            <Text className="text-capitalize">
                                                                {product?.merchant?.name}
                                                            </Text>
                                                        </div>
                                                        <div>
                                                            <h6 className="fs-sm mb-2"><strong>Product Category</strong></h6>
                                                            <Text className="text-capitalize">
                                                                {product?.category?.name}
                                                            </Text>
                                                        </div>
                                                        <div>
                                                            <h6 className="fs-sm mb-2"><strong>Description</strong></h6>
                                                            <Text className="text-capitalize">
                                                                {product?.description}
                                                            </Text>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sharing*/}
                                    {/* <label className="form-label d-inline-block align-middle my-2 me-3">
                                        Share:
                                    </label>
                                    <a
                                        className="btn-share btn-twitter me-2 my-2"
                                        href="#"
                                    >
                                        <i className="ci-twitter" />
                                        Twitter
                                    </a>
                                    <a
                                        className="btn-share btn-instagram me-2 my-2"
                                        href="#"
                                    >
                                        <i className="ci-instagram" />
                                        Instagram
                                    </a>
                                    <a
                                        className="btn-share btn-facebook my-2"
                                        href="#"
                                    >
                                        <i className="ci-facebook" />
                                        Facebook
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product carousel (You may also like)*/}
            <div className="container py-5 my-md-3">
                <h2 className="h3 text-center pb-4">You may also like</h2>
                <div className="">
                    <Carousel slideSize={matches ? "50%" : "33.33%"} align={"start"} slideGap={10} loop>
                        {
                            products?.map((product) => (
                                <Carousel.Slide key={`_product_${product.id}`} pt={20} pb={100}>
                                    <ProductCard product={product} />
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default SingleProduct