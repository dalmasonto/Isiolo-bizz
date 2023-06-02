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
                merchantsData?.map((shop, i) => (
                    <HomeShopCategory key={`home_shop_${i}`} shop={shop} barnerOrder={i % 2 === 0 ? '' : 'order-md-2'} />
                ))
            }
        </div>
    )
}

export default Shops