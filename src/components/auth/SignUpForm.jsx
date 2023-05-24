import { useForm } from '@mantine/form'
import React from 'react'
import { URLS } from '../../config/constants'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { displayErrors } from '../../config/functions'
import { Loader, PasswordInput, TextInput } from '@mantine/core'
import { makeRequestOne } from '../../config/config'

const SignUpForm = () => {

  const [loading, setLoading] = React.useState(false)

  const signUpForm = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      telephone: '',
      password: '',
      password_confirmation: '',
    },
    validate: {
      first_name: value => value === '' ? 'First name is required' : null,
      last_name: value => value === '' ? 'Last name is required' : null,
      email: value => value === '' ? 'Email is required' : null,
      telephone: value => value === '' ? 'Phone number is required' : null,
      password: value => value === '' ? 'Password is required' : null,
      password_confirmation: value => value !== signUpForm.values['password'] ? 'Passwords do not match' : null,
    }
  })

  const handleSignUp = (values) => {
    values['role'] = "merchant"
    setLoading(true)
    makeRequestOne(URLS.SIGNUP + "/", 'POST', {}, { ...values, name: values['first_name'] }, {}).then(res => {
      console.log("singup", res)
      if (res?.status === 200) {
        showNotification({
          title: 'Sign Up Success',
          message: 'You have successfully signed up',
          color: 'green',
          icon: <IconAlertCircle />,
        })
        signUpForm.reset()
      }
      else {
        showNotification({
          title: 'Sign Up Failed!',
          message: 'Sign Up failed. Please try again later!',
          color: 'red',
          icon: <IconAlertCircle />,
        })
      }
    }).catch(err => {
      displayErrors(signUpForm, err?.response?.data?.errors)
      showNotification({
        title: 'Sign Up Failed!',
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
      <h2 className="h4 mb-3">No account? Sign up</h2>
      <p className="fs-sm text-muted mb-4">
        Registration takes less than a minute but gives you full control over
        your orders.
      </p>
      <form onSubmit={signUpForm.onSubmit((values) => handleSignUp(values))} >
        <div className="row gx-4 gy-3">
          <div className="col-sm-6">
            <TextInput
              label="First Name"
              type="text"
              required=""
              id="reg-fn"
              {...signUpForm.getInputProps('first_name')}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Last Name"
              type="text"
              required=""
              {...signUpForm.getInputProps('last_name')}
            />
            <div className="invalid-feedback">Please enter your last name!</div>
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Email"
              type="email"
              required=""
              {...signUpForm.getInputProps('email')}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              label="Phone Number"
              type="text"
              required=""
              {...signUpForm.getInputProps('telephone')}
            />
          </div>
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
          <div className="col-12 text-end">
            <button className="btn btn-primary" type="submit">
              <i className="ci-user me-2 ms-n1" />
              Sign Up
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