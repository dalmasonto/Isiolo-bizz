import { useForm } from '@mantine/form'
import React, { useEffect } from 'react'
import { ADMIN_BASE_URL, URLS } from '../../config/constants'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { displayErrors, getFullName } from '../../config/functions'
import { Loader, PasswordInput, Select, TextInput } from '@mantine/core'
import { makeRequestOne } from '../../config/config'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectLoggedIn, selectToken, selectUser } from '../../providers/app/appSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SignUpForm = ({ fromAdmin, isAdmin, user, updating, onUpdate }) => {

  const [loading, setLoading] = React.useState(false)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()


  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const loggedIn = useSelector(selectLoggedIn)
  const user_ = useSelector(selectUser)

  const signUpForm = useForm({
    initialValues: {
      name: updating ? user?.name : '',
      first_name: '',
      middle_name: '',
      // telephone: '',
      email: updating ? user.email : '',
      password: '',
      password_confirmation: '',
      role: ''
    },
    validate: {
      // name: value => value === '' ? 'Name is required' : null,
      first_name: value => value === '' ? 'First name is required' : null,
      middle_name: value => value === '' ? 'Middle name is required' : null,
      last_name: value => value === '' ? 'Last name is required' : null,
      email: value => value === '' ? 'Email is required' : null,
      // telephone: value => value === '' ? 'Provide phone number' : null,
      password: value => value === '' ? 'Password is required' : null,
      password_confirmation: value => value !== signUpForm.values['password'] ? 'Passwords do not match' : null,
    }
  })

  const handleSignUp = (values) => {
    let data = { ...values, name: getFullName(values) }
    let METHOD = 'POST'
    let URL = `${URLS.SIGNUP}/`
    let HEADERS = {}
    if (!isAdmin) {
      data['role'] = "merchant"
    }
    if (updating) {
      data = {
        name: values['name'],
        email: values['email']
      }
      METHOD = 'PUT'
      URL = `${URLS.SIGNUP}/${user?.id}/`
      HEADERS = {
        'Authorization': `Bearer ${token}`
      }
    }
    setLoading(true)
    makeRequestOne(URL, METHOD, HEADERS, { ...data }, {}).then(res => {
      const data = res?.data?.data
      if(!fromAdmin){
        dispatch(login({ token: data?.accessToken, user: data?.user }))
      }
      if (res?.status === 200) {
        showNotification({
          title: `${updating ? 'Update' : 'Sign Up'} Success`,
          message: `You have successfully ${updating ? 'updated the user' : 'signed up'}`,
          color: 'green',
          icon: <IconAlertCircle />,
        })

        onUpdate && onUpdate()

        signUpForm.reset()
      }
      else {
        showNotification({
          title: `${updating ? 'Update' : 'Sign Up'} Failed!`,
          message: `${updating ? 'Update' : 'Sign Up'} failed. Please try again later!`,
          color: 'red',
          icon: <IconAlertCircle />,
        })
      }
    }).catch(err => {
      displayErrors(signUpForm, err?.response?.data?.errors)
      showNotification({
        title: `${updating ? 'Update' : 'Sign Up'} Failed!`,
        message: 'There has been an error, please try again later!',
        color: 'red',
        icon: <IconAlertCircle />,
      })
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    if (loggedIn && !fromAdmin) {
      const redirectTo = searchParams.get('redirect')
      if (redirectTo) {
        navigate(redirectTo)
      }
      else {
        if (user_?.isAdministrator) {
          navigate(`/${ADMIN_BASE_URL}/`)
        }
        else {
          navigate('/merchant/')
        }
      }
    }
  }, [])


  return (
    <div>
      <h2 className="h4 mb-3">No account? Sign up</h2>
      <p className="fs-sm text-muted mb-4">
        Registration takes less than a minute but gives you full control over
        your orders.
      </p>
      <form onSubmit={signUpForm.onSubmit((values) => handleSignUp(values))} >
        <div className="row gx-4 gy-3">
          <div className="col-sm-6">
            <TextInput
              label="First name"
              type="text"
              placeholder='Enter Your First Name'
              required=""
              id="reg-fn"
              {...signUpForm.getInputProps('first_name')}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Middle name"
              type="text"
              placeholder='Enter Your Middle Name'
              required=""
              id="reg-fn"
              {...signUpForm.getInputProps('middle_name')}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Last name"
              type="text"
              placeholder='Enter Your Last Name'
              required=""
              id="reg-fn"
              {...signUpForm.getInputProps('last_name')}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Email"
              type="email"
              required
              {...signUpForm.getInputProps('email')}
            />
          </div>
          {/* <div className="col-sm-6">
            <TextInput
              label="Phone No."
              type='tel'
              required
              {...signUpForm.getInputProps('telephone')}
            />
          </div> */}
          {
            isAdmin && (
              <div className="col-sm-6">
                <Select
                  label="Role"
                  type="text"
                  required=""
                  {...signUpForm.getInputProps('role')}
                  data={[
                    { value: 'merchant', label: 'Merchant' },
                    { value: 'administrator', label: 'Administrator' },
                  ]}
                />
              </div>)
          }
          {
            !updating && (
              <>
                <div className="col-sm-6">
                  <PasswordInput
                    label="Password"
                    required=""
                    {...signUpForm.getInputProps('password')}
                  />
                </div>
                <div className="col-sm-6">
                  <PasswordInput
                    label="Confirm Password"
                    required=""
                    {...signUpForm.getInputProps('password_confirmation')}
                  />
                </div>
              </>
            )
          }
          <div className="col-12 text-end">
            <button className="btn btn-primary" type="submit">
              <i className="ci-user me-2 ms-n1" />
              {updating ? 'Update' : 'Sign Up'}
              {
                loading ?
                  <Loader color='white' ml="sm" size="sm" />
                  : null
              }
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm