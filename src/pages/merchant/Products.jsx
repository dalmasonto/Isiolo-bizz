import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../providers/app/appSlice'
import useSwr from 'swr';
import { CURRENCY, URLS } from '../../config/constants';
import { formatCurrency, makeRequestOne } from '../../config/config';
import { modals } from '@mantine/modals';
import { Box, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle, IconAlertTriangle } from '@tabler/icons';
import { Link } from 'react-router-dom';

const Products = () => {

  const user = useSelector(selectUser)
  const token = user?.token
  const merchant = user?.user?.merchant
  const merchantQuery = useSwr([`${URLS.MERCHANTS}/${merchant?.id}?include=products`, 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
  const products = merchantQuery?.data?.data?.data?.products

  const deleteProduct = (id) => {

    makeRequestOne(`${URLS.PRODUCTS}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Product Deleted',
        message: 'Product has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      merchantQuery.mutate()
    }).catch(err => {
      showNotification({
        title: 'Product Delete Failed',
        message: 'Product could not be deleted. Please try again later',
        color: 'red',
        icon: <IconAlertTriangle />,
      })
    })

  }

  const handleDelete = (product) => modals.openConfirmModal({
    title: `You are about to delete ${product?.name}!`,
    centered: true,
    radius: "lg",
    children: (
      <Text size="sm">
        Are you sure you want to delete {product?.name}?
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => { },
    onConfirm: () => deleteProduct(product?.id),
  });

  return (
    <div>
      <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
        {/* Title*/}
        <div className="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
          <h2 className="h3 py-2 me-2 text-center text-sm-start">
            Your products
            <span className="badge bg-faded-accent fs-sm text-body align-middle ms-2">
              {products?.length ? products?.length : 0}
            </span>
          </h2>
        </div>
      </div>
      {/* Product*/}
      {
        products?.map((product, i) => {
          const images = JSON.parse(product?.images ? product?.images : "[]")
          return (
          <div key={`product_${product?.id}_${i}`} className="d-block d-sm-flex align-items-center py-4 border-bottom">
            <Box
              className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
              style={{ width: "12.5rem" }}
            >
              <img
                className="rounded-3"
                src={`${images?.length > 0 ? images[0] : '/assets/images/products/Fresh-Camel-Milk.jpg'}`}
                alt="Product"
              />
            </Box>
            <div className="text-center text-sm-start">
              <h3 className="h6 product-title mb-2">
                <Text>{product?.name}</Text>
              </h3>
              <div className="d-inline-block text-accent">
                {CURRENCY} {formatCurrency(product?.price)}
              </div>
              <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                <Link
                  to={`/merchant/products/${product?.id}/edit/`}
                  className="btn bg-faded-info btn-icon me-2"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Edit"
                >
                  <i className="ci-edit text-info" />
                </Link>
                <button
                  className="btn bg-faded-danger btn-icon"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Delete"
                  onClick={() => handleDelete(product)}
                >
                  <i className="ci-trash text-danger" />
                </button>
              </div>
            </div>
          </div>
        )})
      }
    </div>
  )
}

export default Products