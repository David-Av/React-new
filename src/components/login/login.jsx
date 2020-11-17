import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props)=>{

    return(
        <>
            
            <form onSubmit = {props.handleSubmit} >
                <div>
                    <Field type="text" placeholder={"Login"}
                        component = {"input"}
                        name = {"Username"}
                    />
                </div>
                <div>
                <Field type="password" placeholder={"Password"}
                component = {"input"}
                name = {"Password"}
                />
                </div>
                <div>
                <Field type={"checkbox"}
                    name={"remember me"}
                    component={"input"}
                /> remeber me
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </>
    )
}
const LoginReduxForm = reduxForm(
    {
        form:"Login"
    }
)(LoginForm)


const Login = (props)=>{
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </>
    )
}



export default Login