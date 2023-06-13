import React from 'react'
import useSwr from 'swr';
import { makeRequestOne } from '../../config/config';
import HomeShopCategory from '../shop/HomeShopCategory';
import { URLS } from '../../config/constants';

const Shops = () => {
    const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const merchantsData = merchantsQuery?.data?.data?.data
    return (
        <div>
            {
                merchantsData?.sort((a, b) => a?.name?.localeCompare(b?.name)).map((shop, i) => (
                    <HomeShopCategory key={`home_shop_${i}`} shop={shop} barnerOrder={''} />
                ))
            }
        </div>
    )
}

export default Shops