import React from 'react'
import QuickView from '../../components/shop/QuickView'
import ProductCard from '../../components/shop/ProductCard';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/shop/Sidebar';
import Toolbar from '../../components/shop/Toolbar';
import CustomPagination from '../../components/shop/CustomPagination';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { makeRequestOne } from '../../config/config';
import SidebarAndProductsSection from '../../components/shop/SidebarAndProductsSection';
import { useDebouncedState } from '@mantine/hooks';


export const products = [
  {
    id: 1,
    title: 'Cotton Lace Blouse',
    price: 235,
    image: '/assets/images/products/Camel-chocolate.jpg',
    category: {
      id: 1,
      title: 'Women\'s Clothing',
    },
    rating: 4,
    reviews: 12,
    availability: 'in-stock',
    brand: 'Brandix',
    color: 'White',
    size: 'L',
  },
  {
    id: 2,
    title: 'Mom\'s Favorite Gift Basket',
    price: 129,
    image: '/assets/images/products/chilli-pepper.jpg',
    category: {
      id: 2,
      title: 'Gift Baskets',
    },
    rating: 5,
    reviews: 9,
    availability: 'in-stock',
    brand: 'Elegante',
    color: 'Red',
    size: 'XL',
  },
  {
    id: 3,
    title: 'Water Resistant Backpack',
    price: 19,
    image: '/assets/images/products/dried-camel-meat.jpg',
    category: {
      id: 3,
      title: 'Bags &amp; Accessories',
    },
    rating: 4,
    reviews: 23,
    availability: 'in-stock',
    brand: 'Aamra',
    color: 'Green',
    size: 'M',
  },
  {
    id: 4,
    title: 'Cotton Polo Regular Fit',
    price: 32,
    image: '/assets/images/products/Fresh-Camel-Milk.jpg',
    category: {
      id: 1,
      title: 'Women\'s Clothing',
    },
    rating: 3,
    reviews: 15,
    availability: 'in-stock',
    brand: 'Binimoi',
    color: 'Blue',
    size: 'S',
  },
  {
    id: 5,
    title: 'Men\'s Sports Jacket',
    price: 128,
    image: '/assets/images/products/Honey-1kg2.jpg',
    category: {
      id: 1,
      title: 'Women\'s Clothing',
    },
    rating: 5,
    reviews: 8,
    availability: 'in-stock',
    brand: 'Binimoi',
    color: 'Black',
    size: 'XL',
  },
]
 

const Shop = () => {
  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)
  const token = useSelector(selectToken)
  const productsQuery = useSwr([URLS.PRODUCTS + "/", 'GET', {}, {}, { "page[number]": options?.current_page, include: 'merchant' }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
  const productsQueryData = productsQuery?.data?.data
  const productsData = productsQuery?.data?.data?.data
  const productsQueryMeta = productsQueryData?.meta

  const changePage = (page_number) => {
    setOptions(current => ({ ...current, current_page: page_number }))
  }

  return (
    <>
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
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Shop
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Shop</h1>
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

export default Shop