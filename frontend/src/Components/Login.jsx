import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{ nickname: "", password: "" }}
                onSubmit={({ setSubmitting }) => {
                    console.log("Form is validated! Submitting the form...");
                    setSubmitting(false);
                }}
                >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nickname">nickname</label>
                            <Field
                            type="nickname"
                            name="nickname"
                            className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                            type="password"
                            name="password"
                            className="form-control"
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};
