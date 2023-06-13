import { Loader, PasswordInput, TextInput } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { displayErrors } from '../../config/functions'
import { showNotification } from '@mantine/notifications'
import { useForm } from '@mantine/form'
import { useDispatch } from 'react-redux'
import { makeRequestOne } from '../../config/config'
import { ADMIN_BASE_URL, URLS } from '../../config/constants'
import { login } from '../../providers/app/appSlice'

const LoginForm = () => {
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Get query params redirect to redirect user after login
    const [searchParams, setSearchParams] = useSearchParams()

    const loginForm = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: value => value === '' ? 'Email is required' : null,
            password: value => value?.length < 3 ? 'Password is required' : null,
        }
    })

    const handleLogin = (values) => {
        setLoading(true)
        makeRequestOne(URLS.LOGIN + "/", 'POST', {}, values, {}).then(res => {
            const data = res?.data?.data
            if (data && data !== "") {
                dispatch(login({ token: data?.accessToken, user: data?.user }))
                showNotification({
                    title: 'Login Success',
                    message: 'You have successfully logged in',
                    color: 'green',
                    icon: <IconAlertCircle />,
                })
                const redirectTo = searchParams.get('redirect')
                if (redirectTo) {
                    navigate(redirectTo)
                }
                else {
                    if(data?.user?.isAdministrator){
                        navigate(`/${ADMIN_BASE_URL}/`)
                    }
                    else{
                        navigate('/merchant/')
                    }
                }
            }
            else {
                showNotification({
                    title: 'Login Failed!',
                    message: 'Invalid email or password',
                    color: 'red',
                    icon: <IconAlertCircle />,
                })
            }
        }).catch(err => {
            displayErrors(loginForm, err?.response?.data?.errors)
            showNotification({
                title: 'Login Failed!',
                message: 'There has been an error, please try again later!',
                color: 'red',
                icon: <IconAlertCircle />,
            })
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-body">
                <h2 className="h4 mb-1">Sign in</h2>
                <h3 className="fs-base pt-4 pb-2">Or using form below</h3>
                <form onSubmit={loginForm.onSubmit((values) => handleLogin(values))}>
                    <div className="form-group mb-3">
                        <TextInput
                            type="email"
                            placeholder="Email"
                            size='sm'
                            icon={<i className="ci-mail" />}
                            required=""
                            {...loginForm.getInputProps('email')}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <PasswordInput
                            size='sm'
                            icon={<i className="ci-locked" />}
                            placeholder="Password"
                            required=""
                            {...loginForm.getInputProps('password')}
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked=""
                                id="remember_me"
                            />
                            <label className="form-check-label" htmlFor="remember_me">
                                Remember me
                            </label>
                        </div>
                        <Link
                            className="nav-link-inline fs-sm"
                            to={'/account/auth/password-recovery'}
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <hr className="mt-4" />
                    <div className="text-end pt-4">
                        <button className="btn btn-primary" type="submit">
                            <i className="ci-sign-in me-2 ms-n21" />
                            Sign In
                            {
                                loading ?
                                    <Loader color='white' ml="sm" size="sm" />
                                    : null
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm