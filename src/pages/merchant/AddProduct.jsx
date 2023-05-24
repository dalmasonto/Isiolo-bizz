import { Grid, Loader, NumberInput, Select, Stack, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import slugify from 'slugify'
import { makeRequestOne } from '../../config/config'
import { URLS } from '../../config/constants'
import useSwr from 'swr';
import { useSelector } from 'react-redux'
import { selectToken, selectUser } from '../../providers/app/appSlice';
import { displayErrors } from '../../config/functions'

const AddProduct = () => {
    const [loading, setLoading] = React.useState(false)
    const user = useSelector(selectUser)
    const token = user?.token
    const merchant = user?.user?.merchant
    const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const categoriesData = categoriesQuery?.data?.data?.data
    
    const productForm = useForm({
        initialValues: {
            "category_id": "",
            "name": "",
            "description": "",
            "allocated_items": "",
            "assigned_items": "",
            "available_items": "",
            "price": "",
            "discount": "",
            "configuration": ""
        }
    })

    const handleCreate = (values) => {
        values['merchant_id'] = merchant?.id
        values['slug'] = slugify(values['name'])
        values['category_id'] = parseInt(values['category_id'])

        setLoading(true)
        makeRequestOne(URLS.PRODUCTS + "/", 'POST', { 'Authorization': `Bearer ${token}` }, values, {})
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
                const errors = err?.response?.data?.errors
                displayErrors(productForm, errors)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {/* Title*/}
            <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                <h2 className="h3 py-2 me-2 text-center text-sm-start">
                    Add New Product
                </h2>
            </div>
            <form onSubmit={productForm.onSubmit((values) => handleCreate(values))}>
                <Stack>
                    <TextInput
                        label={`Product name ${merchant?.id}`}
                        placeholder="Enter product name max 50 characters"
                        required
                        {...productForm.getInputProps('name')}
                    />
                    <Textarea
                        label="Product description"
                        minRows={7}
                        required
                        {...productForm.getInputProps('description')}
                        placeholder='Enter product description max 500 characters'
                    />
                    <Select
                        label="Category"
                        searchable
                        data={categoriesData ? categoriesData.map((category) => ({
                            value: category.id + "",
                            label: category?.name
                        })) : []}
                        required
                        nothingFound="Category not found"
                        {...productForm.getInputProps('category_id')}
                    />
                    <Grid>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Allocated Items"
                                placeholder="4000"
                                required
                                {...productForm.getInputProps('allocated_items')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Assigned Items"
                                placeholder="2000"
                                required
                                {...productForm.getInputProps('assigned_items')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Available Items"
                                placeholder="2000"
                                required
                                {...productForm.getInputProps('available_items')}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col xs={6} md={6}>
                            <NumberInput
                                label="Price"
                                placeholder="4000"
                                required
                                {...productForm.getInputProps('price')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={6}>
                            <NumberInput
                                label="Discount (%)"
                                placeholder="10"
                                {...productForm.getInputProps('discount')}
                            />
                        </Grid.Col>
                    </Grid>
                    <button className="btn btn-primary d-block w-100" type="submit">
                        <i className="ci-cloud-upload fs-lg me-2" />
                        Upload Product
                        {
                            loading ?
                                <Loader color='white' ml="sm" size="sm" />
                                : null
                        }
                    </button>
                </Stack>
            </form>
        </>
    )
}

export default AddProduct