import { Carousel } from '@mantine/carousel'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../pages/shop/Shop'
import { Box, Image, Loader } from '@mantine/core'
import { Link } from 'react-router-dom'
import useSwr from 'swr'
import { URLS } from '../../config/constants'
import { makeRequestOne } from '../../config/config'
import { useMediaQuery } from '@mantine/hooks'
import slugify from 'slugify'

const HomeShopCategory = ({ shop, barnerOrder }) => {

    const productsQuery = useSwr([URLS.PRODUCTS, 'GET', {}, {}, { 'filter[merchant_id]': shop?.id, include: 'merchant' }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const productsQueryData = productsQuery?.data?.data
    const products = productsQueryData?.data

    const matches = useMediaQuery('(max-width: 56.25em)');

    return (
        <>
            <section className="container pt-lg-3 mb-4 mb-sm-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className={`col-md-5 ${barnerOrder}`}>
                        <Box
                            p="xl"
                            className="d-flex flex-column overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            {/* <div>
                                <h3 className="mb-1 text-capitalize">{shop?.name}</h3>
                                <Link className="fs-md" to={`/shop/${shop?.id}/${shop?.slug}`}>
                                    Shop now!
                                    <i className="ci-arrow-right fs-xs align-middle ms-1" />
                                </Link>
                            </div> */}
                            <Link className="d-none d-md-block w-100" to={`/shop/merchants/${shop?.id}/${slugify(shop?.name)}`}>
                                <Image
                                    className=""
                                    radius="md"
                                    mx="auto"
                                    width={'80%'}
                                    src={shop?.logo}
                                    alt={`For ${shop?.name}`}
                                />
                            </Link>
                        </Box>
                    </div>
                    {/* Product grid (carousel)*/}
                    <div className="col-md-7 pt-4 pt-md-0">
                        {productsQuery.isLoading && (
                            <Box py={40}>
                                <Loader variant='dots' size={100} />
                            </Box>
                        )} 
                        {
                            products?.length > 0 &&
                            (
                                <Carousel slideSize={matches ? "50%" : "33.33%"} slideGap={10} align={'start'} controlSize={42} loop={true}>
                                    {
                                        products?.slice(0, 6)?.map((product) => (
                                            <Carousel.Slide key={`_product_ks_${product.id}`} pt={20} pb={100} style={{ overflow: "auto !important" }}>
                                                <ProductCard product={product} />
                                            </Carousel.Slide>
                                        ))
                                    }
                                </Carousel>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeShopCategory