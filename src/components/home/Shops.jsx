import React, { useEffect, useState } from 'react'
import useSwr from 'swr';
import { makeRequestOne } from '../../config/config';
import HomeShopCategory from '../shop/HomeShopCategory';
import { URLS } from '../../config/constants';
import { Loader, Stack, Text, Title } from '@mantine/core';

function groupByCategory({ category_id }) {
    return category_id ? category_id : "general"
}

const ShopCategory = ({ category_id, shops }) => {
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState(null)

    const fetchCategoryInfo = () => {
        setLoading(true)
        makeRequestOne(`${URLS.MERCHANT_CATEGORIES}/${category_id}`, 'GET', {}, {}, {}).then(res => {

        }).catch(e => {

        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchCategoryInfo()
    }, [])

    return (
        <Stack>
            <Title tt={'capitalize'} order={2} fw={500} size={'42px'}>
                {
                    category_id === 'general' ? 'General' : loading ? <Loader variant='dots' size={'sm'} /> : category ? category?.name : null
                }
            </Title>
            <Text size='sm' color='dimmed'>
                {
                    category_id === 'general' ? '' : loading ? <Loader variant='dots' size={'sm'} /> : category ? category?.description : null
                }
            </Text>
            {
                shops?.sort((a, b) => a?.name?.localeCompare(b?.name)).map((shop, i) => (
                    <HomeShopCategory key={`home_shop_${i}`} shop={shop} barnerOrder={''} />
                ))
            }
        </Stack>
    )
}

const Shops = () => {
    const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const merchantsData = merchantsQuery?.data?.data?.data

    const grouped = Object.groupBy(merchantsData, groupByCategory)

    return (
        <div>
            {
                Object.keys(grouped).map((group, i) => (
                    <div key={`group_${group}_${i}`}>
                        <ShopCategory category_id={group} shops={grouped[group]} />
                    </div>
                ))
            }
        </div>
    )
}

export default Shops