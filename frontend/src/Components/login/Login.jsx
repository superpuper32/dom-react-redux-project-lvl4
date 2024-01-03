/* eslint-disable jsx-a11y/label-has-associated-control */
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

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <div className="row d-flex justify-content-center align-content-center flex-wrap h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body row p-5">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div className="bg-info w-50 h-50 rounded-circle" />
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={({ setSubmitting }) => {
                console.log('Form is validated! Submitting the form...');
                setSubmitting(false);
              }}
            >
              {({ errors, touched }) => (
                <Form className="col-12 col-md-6 mt-3 mt-mb-0">
                  <h1 className="text-center mb-4">Войти</h1>

                  <div className="form-floating mb-3">
                    <Field
                      type="username"
                      name="username"
                      className="form-control mb-3"
                    />
                    {errors.username && touched.username ? (
                      <div className="text-danger">{errors.username}</div>
                    ) : null}
                    <label htmlFor="username">Ваш ник</label>
                  </div>

                  <div className="form-floating mb-4">
                    <Field
                      type="password"
                      name="password"
                      className="form-control mb-3"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                    <label className="form-label" htmlFor="password">Пароль</label>
                  </div>

                  <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
