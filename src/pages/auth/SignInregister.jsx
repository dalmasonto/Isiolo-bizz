import React, { useEffect } from 'react'
import LoginForm from '../../components/auth/LoginForm'
import SignUpForm from '../../components/auth/SignUpForm'
import { selectLoggedIn } from '../../providers/app/appSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignInregister = () => {
    const loggedIn = useSelector(selectLoggedIn)
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    }, [])
 
    return (
        <>
            <div className="container py-4 py-lg-5 my-4">
                <div className="row">
                    <div className="col-md-6">
                        <LoginForm />
                    </div>
                    <div className="col-md-6 pt-4 mt-3 mt-md-0">
                        <SignUpForm isAdmin={false} updating={false} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default SignInregister