import { Carousel } from '@mantine/carousel'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../pages/shop/Shop'
import { Box, Image } from '@mantine/core'
import { Link } from 'react-router-dom'

const HomeShopCategory = ({ shop, barnerOrder }) => {
    return (
        <>
            <section className="container pt-lg-3 mb-4 mb-sm-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className={`col-md-5 ${barnerOrder}`}>
                        <Box
                            p="xl"
                            className="d-flex flex-column h-100 overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            <div>
                                <h3 className="mb-1">{shop?.name}</h3>
                                <Link className="fs-md" to={`/shop/${shop?.id}`}>
                                    Shop now!
                                    <i className="ci-arrow-right fs-xs align-middle ms-1" />
                                </Link>
                            </div>
                            <Link className="d-none d-md-block mt-auto w-100" to={`/shop/${shop?.id}`}>
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
                        <Carousel slideSize={"33.33%"} slideGap={10} align={'start'} controlSize={42}>
                            {
                                products.map((product) => (
                                    <Carousel.Slide key={`_product_ks_${product.id}`} pt={20} pb={100} style={{ overflow: "auto !important" }}>
                                        <ProductCard product={product} />
                                    </Carousel.Slide>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeShopCategory