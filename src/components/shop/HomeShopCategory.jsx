import { Carousel } from '@mantine/carousel'
import React from 'react'
import ProductCard from './ProductCard'
import { Box, Button, Group, Image, Loader, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import useSwr from 'swr'
import { URLS } from '../../config/constants'
import { makeRequestOne } from '../../config/config'
import { useMediaQuery } from '@mantine/hooks'
import slugify from 'slugify'
import { modals } from '@mantine/modals'

const HomeShopCategory = ({ shop, barnerOrder }) => {

    const productsQuery = useSwr([URLS.PRODUCTS, 'GET', {}, {}, { 'filter[merchant_id]': shop?.id, include: 'merchant' }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const productsQueryData = productsQuery?.data?.data
    const products = productsQueryData?.data

    const matches = useMediaQuery('(max-width: 56.25em)');

    const openMoreInfo = () => modals.open({
        title: "",
        size: "lg",
        centered: true,
        radius: "lg",
        children: (
            <Box>
                <Stack mb="md" spacing={10}>
                    <Image mx="auto" src={shop?.logo} width={142} />
                    <Stack spacing={6} align='center'>
                        <Title className='text-capitalize' align='center' order={3} weight={400} size={24}>{shop?.name}</Title>
                        <Text align='center' size="xs" color='dimmed'>{shop?.slogan}</Text>
                    </Stack>
                </Stack>
                <Text color='dimmed' size="sm" align='justify' className='capitalize-after-dot'>
                    {shop?.description}
                </Text>
            </Box>
        )
    })

    return (
        <>
            <section className="container pt-lg-3 mb-4 mb-sm-5">
                <div className="row">
                    {/* Banner with controls*/}
                    <div className={`col-md-5 ${barnerOrder}`}>
                        <Box
                            p="xl"
                            className="d-flex flex-column justify-content-center overflow-hidden rounded-3"
                            style={{ backgroundColor: "#f6f8fb" }}
                        >
                            <Link className="d-md-block w-100" to={`/shop/merchants/${shop?.id}/${slugify(shop?.name)}`}>
                                <Image
                                    className=""
                                    radius="md"
                                    mx="auto"
                                    width={'80%'}
                                    src={shop?.logo}
                                    alt={`For ${shop?.name}`}
                                />
                            </Link>
                            <Group mt="md" position='center' className='w-100'>
                                <Button radius={'md'} onClick={openMoreInfo}>Learn More</Button>
                            </Group>
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