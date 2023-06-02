import React from 'react'
import Toolbar from './Toolbar'
import Sidebar from './Sidebar'
import ProductCard from './ProductCard'
import CustomPagination from './CustomPagination'
import LoadingProducts from '../common/LoadingProducts';

const SidebarAndProductsSection = ({products, meta, loading, onPageChange}) => {
    console.log(meta)
    return (
        <div className="container pb-5 mb-2 mb-md-4">
            <div className="row">
                <Sidebar />
                <section className="col-lg-8">
                    <Toolbar {...meta} onPageChange={onPageChange} />
                    <LoadingProducts loading={loading} productsLen={products ? products?.length : 0} />
                    <div className="row mx-n2">
                        {
                            products?.map((product) => (
                                <div key={`_product_${product.id}`} className="col-md-4 col-sm-6 px-2 mb-4">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        }
                    </div>
                    <hr className="my-3" />
                    <CustomPagination {...meta} onPageChange={onPageChange} />
                </section>
            </div>
        </div>
    )
}

export default SidebarAndProductsSection