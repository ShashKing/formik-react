import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function OldYouTubeForm() {
    const initialValues = {
        name:'',
        email:'',
        channel:'',
    }
    const onSubmit = values => {
        console.log("Form Data", values)
    }


    const validationSchema = Yup.object({
        name: Yup.string().required("Required !"),
        email: Yup.string().email("Invalid Email Format").required("Required"),
        channel: Yup.string().required("Required")
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log('Form Values', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className = "form-control">
                    <label htmlFor="name">User Name</label>
                    <input type="text" id="name" name="name" {... formik.getFieldProps('name')}></input>
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className = "form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" {... formik.getFieldProps('email')}></input>
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className = "form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" {... formik.getFieldProps('channel')}></input>
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>

                
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default OldYouTubeForm
