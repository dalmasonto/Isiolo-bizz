import React, { useState } from 'react'
import { URLS } from '../../config/constants'
import { useForm } from '@mantine/form'
import { Box, Loader, PasswordInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { makeRequestOne } from '../../config/config'
import { displayErrors } from '../../config/functions'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from '../../providers/app/appSlice'

const EmailVerification = () => {

    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id')
    const hash = searchParams.get('hash')
    const expires = searchParams.get('expires')
    const token = useSelector(selectToken)

    const verificationData = {
        id,
        hash,
        expires
    }

    const handleEmailVerification = () => {
        setLoading(true)
        makeRequestOne(URLS.EMAIL_VERIFICATION, 'POST', {Authorization: `Bearer ${token}`}, { ...verificationData }, {}).then(res => {
            if (res?.status === 200) {
                showNotification({
                    title: `Account verified.`,
                    message: `Your account has been verified.`,
                    color: 'green',
                    icon: <IconAlertCircle />,
                })

            }
            else {
                showNotification({
                    title: `Account verification failed!`,
                    message: `We could not verify your account`,
                    color: 'red',
                    icon: <IconAlertCircle />,
                })
            }
        }).catch(err => {
            showNotification({
                title: `Resetting password Failed!`,
                message: err?.response?.data?.message,
                color: 'red',
                icon: <IconAlertCircle />,
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <div className="container py-4 py-lg-5 my-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <h2 className="h3 mb-4">Verify your Email Address</h2>
                        <p className="fs-md">
                            Click on the button below to verify your email.
                        </p>
                        <Box>
                            <button className="btn btn-primary" onClick={handleEmailVerification} type="submit">
                                Verify Email
                                {
                                    loading ? (
                                        <Loader ml="md" size="sm" color='white' />
                                    ) : null
                                }
                            </button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerification