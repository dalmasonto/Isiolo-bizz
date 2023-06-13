import React, { useState } from 'react'
import { URLS } from '../../config/constants'
import { useForm } from '@mantine/form'
import { Loader, PasswordInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { makeRequestOne } from '../../config/config'
import { displayErrors } from '../../config/functions'

const ResetPassword = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        initialValues: {
            password: "",
            password_confirmation: "",
            token: "",
            email: "",
        },
        validate: {
            password: value => value === "" ? "Your new password is required" : null,
            password_confirmation: value => {
                if (value === "") {
                    return "Repeat your password"
                }
                else if (value !== form.values['password']) {
                    return "Passwords do not match"
                }
                return null
            },
            token: value => value === "" ? "Token field is required" : null
        }
    })

    const handleResetPassword = () => {
        setLoading(true)
        makeRequestOne(URLS.RESET_PASSWORD, 'POST', {}, { ...form.values }, {}).then(res => {
            console.log(res)
            if (res?.status === 200) {
                showNotification({
                    title: `Password reset initiated successfully.`,
                    message: `You have successfully reset your password.`,
                    color: 'green',
                    icon: <IconAlertCircle />,
                })

                form.reset()
            }
            else {
                showNotification({
                    title: `Resetting Password Failed!`,
                    message: `We could`,
                    color: 'red',
                    icon: <IconAlertCircle />,
                })
            }
        }).catch(err => {
            displayErrors(form, err?.response?.data?.errors)
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
                        <h2 className="h3 mb-4">Reset Your Password</h2>
                        <p className="fs-md">
                            Enter a new password for your account.
                        </p>
                        <div className="card py-2 mt-4">
                            <form className="card-body" onSubmit={form.onSubmit(values => handleResetPassword())}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <PasswordInput
                                                label="Enter password"
                                                {...form.getInputProps("password")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <PasswordInput
                                                label="Confirm password"
                                                {...form.getInputProps("password_confirmation")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="submit">
                                    Reset Password
                                    {
                                        loading ? (
                                            <Loader ml="md" size="sm" color='white' />
                                        ) : null
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword