import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .max(50, 'Максимум 50 букв')
    .required()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const Login = () => {
    return (
        <>
            <div class="container-fluid h-100">
                <div class="row justify-content-center">
                    <div class="col-4 mt-4">
                        <h1>Sign in</h1>
                        <Formik
                            initialValues={{
                                nickname: '',
                                password: ''
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={({ setSubmitting }) => {
                                console.log("Form is validated! Submitting the form...");
                                setSubmitting(false);
                            }}
                            >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="nickname">Nickname</label>
                                        <Field
                                            type="nickname"
                                            name="nickname"
                                            className="form-control mb-3"
                                        />
                                        {errors.nickname && touched.nickname ? (
                                            <div>{errors.nickname}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="form-control mb-3"
                                        />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};
