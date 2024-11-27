import { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, FloatingLabel } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth.tsx';
import routes from '../../utils/routes.ts';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  password: Yup.string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = () => {
  const auth = useAuth();
  const [submited, setSubmited] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null!);
  const inputPasswordRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, [submited]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(routes.loginPath(), values);
        auth.logIn(response.data);
        const { from } = location.state;
        navigate(from);
      } catch (err) {
        formik.setSubmitting(false);
        const error = err as Error | AxiosError;
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          setSubmited(false);
          inputRef.current.focus();
          return;
        }
        throw error;
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row d-flex justify-content-center align-content-center flex-wrap h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div className="bg-info w-50 h-50 rounded-circle" />
              </div>

              <Form noValidate onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">Войти</h1>

                <FloatingLabel
                  label="Ваш ник"
                  className="mb-3"
                >
                  <Form.Control
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    ref={inputRef}
                    isInvalid={!!formik.errors.username}
                    autoComplete="username"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  ) : null}
                </FloatingLabel>

                <FloatingLabel
                  label="Пароль"
                  className="mb-3"
                >
                  <Form.Control
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    ref={inputPasswordRef}
                    isInvalid={!!formik.errors.password}
                    autoComplete="current-password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  ) : null}
                </FloatingLabel>

                <button
                  type="submit"
                  onClick={() => setSubmited(true)}
                  className="w-100 mb-3 btn btn-outline-primary"
                >Войти</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
