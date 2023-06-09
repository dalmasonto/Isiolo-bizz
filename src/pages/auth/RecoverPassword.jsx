import React, { useState } from 'react'
import { URLS } from '../../config/constants'
import { useForm } from '@mantine/form'
import { Loader, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { makeRequestOne } from '../../config/config'
import { displayErrors } from '../../config/functions'

const RecoverPassword = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        initialValues: {
            email: ""
        },
        validate: {
            email: value => value === "" ? "Your email is required" : null
        }
    })

    const handleForgotPassword = () => {
        setLoading(true)
        makeRequestOne(URLS.FORGOT_PASSWORD, 'POST', {}, { ...form.values }, {}).then(res => {
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
                        <h2 className="h3 mb-4">Forgot your password?</h2>
                        <p className="fs-md">
                            Change your password in three easy steps. This helps to keep your new
                            password secure.
                        </p>
                        <ol className="list-unstyled fs-md">
                            <li>
                                <span className="text-primary me-2">1.</span>Fill in your email
                                address below.
                            </li>
                            <li>
                                <span className="text-primary me-2">2.</span>We'll email you a
                                temporary code.
                            </li>
                            <li>
                                <span className="text-primary me-2">3.</span>Use the code to change
                                your password on our secure website.
                            </li>
                        </ol>
                        <div className="card py-2 mt-4">
                            <form className="card-body needs-validation" onSubmit={form.onSubmit(values => handleForgotPassword())}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="recover-email">
                                        Enter your email address
                                    </label>
                                    <TextInput
                                        type="email"
                                        id="recover-email"
                                        {...form.getInputProps("email")}
                                    />
                                </div>
                                <button className="btn btn-primary" type="submit">
                                    Get new password
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

export default RecoverPassword