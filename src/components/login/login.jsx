import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login, logout } from '../../Redux/auth-reducer'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormControls/FormContols'
import s from '../common/FormControls/FormContols.module.css'
const LoginForm = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field type="text" placeholder={"Login"}
                        component={Input}
                        validate={[required]}
                        name={"email"}
                    />
                </div>
                <div>
                    <Field type="password" placeholder={"Password"}
                        component={Input}
                        validate={[required]}
                        name={"password"}
                    />
                </div>
                <div>
                    <Field type={"checkbox"}
                        name={"rememberMe"}
                        component={Input}
                    /> remeber me
                </div>
                {props.error &&
                    <div className={s.formSummaryError}>
                        {props.error}
                    </div>}
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </>
    )
}
const LoginReduxForm = reduxForm(
    {
        form: "Login"
    }
)(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login, logout })(Login)