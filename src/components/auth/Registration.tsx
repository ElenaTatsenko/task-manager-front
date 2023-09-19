import { Formik } from 'formik'
import './Registration.css'
import {RegisterModel} from '../../types/RegisterModel'

const Registration = () => {
return (
    <Formik<RegisterModel>
    initialValues={{
        email: '',
        password: '',
        role: 'User'


    }}
    onSubmit={(values)=> {
        console.log(values)
    }}
    >
        {({handleSubmit, values, handleChange}) => (
            <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" value={values.password} onChange={handleChange}></input>
            <button type="submit">Registration</button>
        </form>
        )}
        
    </Formik>

)}

export default Registration