import React, { useState } from 'react'
import { useForm } from '@mantine/form'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken, updateMerchantAccount } from '../../providers/app/appSlice';
import { ActionIcon, FileInput, Group, Loader, TextInput, Textarea } from '@mantine/core';
import { makeRequestOne } from '../../config/config';
import { URLS } from '../../config/constants';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle, IconUpload } from '@tabler/icons';
import { displayErrors } from '../../config/functions';
import slugify from 'slugify';
const MerchantUpdateForm = ({ merchant, onUpdate, isAdmin }) => {

    const [loading, setLoading] = useState(false)

    const token = useSelector(selectToken)

    const dispatch = useDispatch()

    const logoForm = useForm({
        initialValues: {
            logo: null
        },
        validate: {
            logo: value => value === null ? "Logo is required" : null
        }
    })

    const merchantForm = useForm({
        initialValues: {
            "name": merchant?.name,
            "slogan": merchant?.slogan,
            "slug": "",
            "telephone": merchant?.telephone,
            "email": merchant?.email,
            "bank_code": merchant?.bank_code,
            "bank_account_name": merchant?.bank_account_name,
            "bank_account_number": merchant?.bank_account_number,
            "bank_account_branch": merchant?.bank_account_branch,
            "incorporation_number": merchant?.incorporation_number,
            "kra_pin": merchant?.kra_pin,
            "logo": merchant?.logo,
            "address_line_1": merchant?.address_line_1,
            "address_line_2": merchant?.address_line_2,
            "city": merchant?.city,
            "state": merchant?.state,
            "country": merchant?.country,
            description: "",
        }
    })

    const handleUploadLogo = () => {
        const files = logoForm.values['logo']
        setLoading(true)
        makeRequestOne(URLS.MEDIA, 'POST', { 'CONTENT-TYPE': 'multipart/form-data' }, { 'files[]': files }, {})
            .then((res) => {
                const images_ = res?.data?.data
                const logo = images_[0].path
                merchantForm.setFieldValue('logo', logo)
                handleUpdate({ logo: logo })
            }).catch((err) => {
            })
    }

    const handleUpdate = (values) => {
        if (values['name']) {
            values['slug'] = slugify(values['name'])
        }
        setLoading(true)
        makeRequestOne(URLS.MERCHANTS + `/${merchant?.id}`, 'PUT', {
            Authorization: `Bearer ${token}`
        }, values, {}).then(res => {
            if (!isAdmin) {
                const merchantData = res?.data?.data
                dispatch(updateMerchantAccount(merchantData))
            }
            showNotification({
                title: 'Update Success',
                message: 'You have successfully updated the shop profile.',
                color: 'green',
                icon: <IconAlertCircle />,
            })
            if (onUpdate) {
                onUpdate()
            }
        }).catch(err => {
            displayErrors(merchantForm, err?.response?.data?.errors)
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
            <div className="bg-secondary rounded-3 p-4 mb-4">
                <div className="d-flex align-items-center">
                    <img
                        className="rounded"
                        src={merchant?.logo}
                        width={90}
                        alt={merchant?.name}
                    />
                    <div className="ps-3">
                        <form onSubmit={logoForm.onSubmit((values) => handleUploadLogo())}>
                            <Group>
                                <FileInput
                                    radius="xl"
                                    color='red'
                                    label=''
                                    placeholder='Select Logo'
                                    type="text"
                                    {...logoForm.getInputProps('logo')}
                                    style={{
                                        width: "150px"
                                    }}
                                />
                                <ActionIcon type='submit' size={32} color='red' radius={"xl"} variant='filled'>
                                    <IconUpload size={18} />
                                </ActionIcon>
                            </Group>
                        </form>
                        <div className="p mb-0 fs-ms text-muted">
                            Upload JPG, GIF or PNG image. 300 x 300 required.
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={merchantForm.onSubmit((values) => handleUpdate(values))}>
                <div className="row gx-4 gy-3">
                    <div className="col-sm-4">
                        <TextInput
                            label='Shop Name'
                            placeholder='Shop Name'
                            type="text"
                            {...merchantForm.getInputProps('name')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Slogan'
                            placeholder='Slogan'
                            type="text"
                            {...merchantForm.getInputProps('slogan')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Email'
                            placeholder="example@gmail.com"
                            type="text"
                            {...merchantForm.getInputProps('email')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Telephone'
                            placeholder='08012345678'
                            type="text"
                            {...merchantForm.getInputProps('telephone')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Bank Code'
                            placeholder='08012345678'
                            type="text"
                            {...merchantForm.getInputProps('bank_code')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Bank Account Name'
                            placeholder='Account Name'
                            type="text"
                            {...merchantForm.getInputProps('bank_account_name')}
                        />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            label='Account Number'
                            placeholder='08012345678'
                            type="text"
                            {...merchantForm.getInputProps('bank_account_number')}
                        />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            label='Bank Account Branch'
                            placeholder='Branch Name'
                            type="text"
                            {...merchantForm.getInputProps('bank_account_branch')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='Incorporation Number'
                            placeholder='08012345678'
                            type="text"
                            {...merchantForm.getInputProps('incorporation_number')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='KRA Pin'
                            placeholder='08012345678'
                            type="text"
                            {...merchantForm.getInputProps('kra_pin')}
                        />
                    </div>
                    {/* <div className="col-sm-4">
                                <TextInput
                                    label='Logo'
                                    placeholder='Enter logo URL'
                                    type="text"
                                    {...merchantForm.getInputProps('logo')}
                                />
                            </div> */}
                    <div className="col-sm-4">
                        <TextInput
                            label='Country'
                            placeholder='Kenya'
                            type="text"
                            {...merchantForm.getInputProps('country')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='State'
                            placeholder='Nairobi'
                            type="text"
                            {...merchantForm.getInputProps('state')}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextInput
                            label='City'
                            placeholder='Nairobi'
                            type="text"
                            {...merchantForm.getInputProps('city')}
                        />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            label='Address Line 1'
                            placeholder='1234 Main St'
                            type="text"
                            {...merchantForm.getInputProps('address_line_1')}
                        />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            label='Address Line 2'
                            placeholder='Apartment, studio, or floor'
                            {...merchantForm.getInputProps('address_line_2')}
                        />
                    </div>
                    <div className="col-sm-12">
                        <Textarea
                            label="Group Description"
                            placeholder='Describe your Group/Merchant here'
                            minRows={10}
                            {...merchantForm.getInputProps('description')}
                        />
                    </div>
                    <div className="col-12">
                        <hr className="mt-2 mb-4" />
                        <div className="d-sm-flex justify-content-end align-items-center">
                            <button className="btn btn-primary mt-3 mt-sm-0" type="submit">
                                Save changes
                                {
                                    loading ?
                                        <Loader color='white' ml="sm" size="sm" />
                                        : null
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MerchantUpdateForm