import { Loader, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import slugify from 'slugify'
import { makeRequestOne } from '../../config/config'
import { URLS } from '../../config/constants';
import { useSelector } from 'react-redux'
import { selectToken } from '../../providers/app/appSlice'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { displayErrors } from '../../config/functions'

const ProductCategoryForm = ({ category, onUpdate, updating }) => {

    const [loading, setLoading] = useState(false)
    const token = useSelector(selectToken)

    const categoryForm = useForm({
        initialValues: {
            name: updating ? category?.name : ""
        },
        validate: {
            name: value => (value === "" || value === null) ? "Category name is required" : null
        }
    })

    const handleUpdate = (values) => {
        let URL = URLS.CATEGORIES
        let METHOD = 'POST'

        if (values['name']) {
            values['slug'] = slugify(values['name'])
        }
        if (updating) {
            URL = `${URLS.CATEGORIES}/${category.id}/`
            METHOD = 'PUT'
        }
        setLoading(true)
        makeRequestOne(URL, METHOD, {
            Authorization: `Bearer ${token}`
        }, values, {}).then(res => {
            showNotification({
                title: 'Update Success',
                message: `You have successfully ${updating ? 'updated' : 'created'} the category.`,
                color: 'green',
                icon: <IconAlertCircle />,
            })
            if (onUpdate) {
                onUpdate()
            }
        }).catch(err => {
            displayErrors(categoryForm, err?.response?.data?.errors)
            showNotification({
                title: 'Update Failed!',
                message: 'There has been an error, please try again later!',
                color: 'red',
                icon: <IconAlertCircle />,
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div>
            <form onSubmit={categoryForm.onSubmit((values) => handleUpdate(values))}>
                <Stack>
                    <TextInput
                        label="Category Name"
                        radius="md"
                        placeholder='Camel Milk'
                        {...categoryForm.getInputProps('name')}
                    />
                    <button className="btn btn-primary mt-3 mt-sm-0" type="submit">
                        Save
                        {
                            loading ?
                                <Loader color='white' ml="sm" size="sm" />
                                : null
                        }
                    </button>
                </Stack>
            </form>
        </div>
    )
}

export default ProductCategoryForm