import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { makeRequestOne } from '../../config/config';
import SidebarAndProductsSection from '../../components/shop/SidebarAndProductsSection';
import { useDebouncedState } from '@mantine/hooks';

const SingleMerchant = () => {

  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)

  const { id } = useParams()
  const merchantQuery = useSwr([`${URLS.MERCHANTS}/${id}/`, 'GET', {}, {}, {"page[number]": options?.current_page}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
  const merchant = merchantQuery?.data?.data?.data

  const productsQuery = useSwr([URLS.PRODUCTS, 'GET', {}, {}, { 'filter[merchant_id]': id, include: 'merchant' }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
  const productsQueryData = productsQuery?.data?.data
  const productsData = productsQuery?.data?.data?.data
  const productsQueryMeta = productsQueryData?.meta

  const changePage = (page_number) => {
    setOptions(current => ({ ...current, current_page: page_number }))
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
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to={'/ship'}>
                    <i className="ci-home" />
                    Shop
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap text-capitalize active"
                  aria-current="page"
                >
                  {merchant?.name}
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0 text-capitalize">
              Merchant: {merchant?.name}
            </h1>
          </div>
        </div>
      </div>
      <SidebarAndProductsSection
        products={productsData}
        meta={productsQueryMeta}
        loading={productsQuery?.isLoading}
        onPageChange={changePage} 
        />
    </>

  )
}

export default SingleMerchant