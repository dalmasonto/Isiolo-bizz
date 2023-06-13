import React from 'react'
import AddProductForm from '../../components/shop/AddProductForm'

const AddProduct = () => {
    return (
        <>
            <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                <h2 className="h3 py-2 me-2 text-center text-sm-start">
                    Add New Product
                </h2>
            </div>
            <AddProductForm />
        </>
    )
}

export default AddProduct