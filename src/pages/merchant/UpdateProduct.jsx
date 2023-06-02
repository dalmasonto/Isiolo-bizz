import React from 'react'
import { URLS } from '../../config/constants'
import useSwr from 'swr';
import { useParams } from 'react-router-dom';
import { makeRequestOne } from '../../config/config';
import AddProductForm from '../../components/shop/AddProductForm';

const UpdateProduct = () => {
    const { id } = useParams()
    const productQuery = useSwr([`${URLS.PRODUCTS}/${id}/`, 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const productData = productQuery?.data?.data?.data

    return (
        <div>
            <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                <h2 className="h3 py-2 me-2 text-center text-sm-start">
                    Updating {productData?.name}
                </h2>
            </div>
            {
                productQuery?.isLoading ? <div className="text-center">Loading...</div> : (
                    <AddProductForm updating={true} product={productData} />
                )
            }
        </div>
    )
}

export default UpdateProduct