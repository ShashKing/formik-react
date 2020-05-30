import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YouTubeForm() {
    const initialValues = {
        name:'',
        email:'',
        channel:''
    }
    const onSubmit = values => {
        console.log("Form Data", values)
    }

    const validate = values => {
        // values.name values.email, values.channel
        // errors.name errors.email errors.channel
        // errors.name = 'This field is required'
        let errors = {}
        if(!values.name) {
            errors.name = 'Required'
        }
        if(!values.email) {
            errors.email = 'Required'
        }
        else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(values.email)) {
            errors.email = "Invalid Email Format"
        }
        if(!values.channel) {
            errors.channel = 'Required'
        }

        return errors
    }

    // or validationSchema 

    const validationSchema = Yup.object({
        name: Yup.string().required("Required !"),
        email: Yup.string().email("Invalid Email Format").required("Required"),
        channel: Yup.string().required("Required")
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate
        validationSchema
    })
    console.log('Form Values', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className = "form-control">
                    <label htmlFor="name">User Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange } value={formik.values.name} onBlur={formik.handleBlur}></input>
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className = "form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className = "form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}></input>
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default YouTubeForm
