import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

function NewYouTubeForm() {
    const initialValues = {
        name:'',
        email:'',
        channel:'',
        comments:'',
        social: {
            facebook:'',
            twitter:''
        }
    }
    const onSubmit = values => {
        console.log("Form Data", values)
    }


    const validationSchema = Yup.object({
        name: Yup.string().required("Required !"),
        email: Yup.string().email("Invalid Email Format").required("Required"),
        channel: Yup.string().required("Required"),
        comments: Yup.string().required("Required").min(2,"Must be 2 words"),
        facebook: Yup.string().required("Required !"),
        twitter: Yup.string().required("Required !")
    })


    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })
    // console.log('Form Values', formik.touched)

    return (
        <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
         >
            <Form>
                <div className = "form-control">
                    <label htmlFor="name">User Name</label>
                    <Field type="text" id="name" name="name"></Field>
                    <ErrorMessage name = "name" component ={TextError}/>
                </div>

                <div className = "form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"></Field>
                    <ErrorMessage name = "email" component ={TextError} />
                </div>

                <div className = "form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" placeholder = "Your Channel Name"></Field>
                    <ErrorMessage name = "channel" component ={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor = "comments">Comments</label>
                    <Field as = 'textarea' name="comments" id="comments"></Field>
                    <ErrorMessage name="comments" component ={TextError} />
                </div>
                <div className = "form-control">
                    <label htmlFor = "facebook">Facebook Name</label>
                    <Field type = 'text' name="facebook" id="facebook"></Field>
                    <ErrorMessage name="facebook" component= {TextError}/> 
                </div>
                <div className = "form-control">
                    <label htmlFor = "twitter">Twitter Name</label>
                    <Field type = 'text' name="twitter" id="twitter"></Field>
                    <ErrorMessage name="twitter" component= {TextError}/> 
                </div>
                <button type="submit">Submit</button>
                
            </Form>
        </Formik>
    )
}

export default NewYouTubeForm
