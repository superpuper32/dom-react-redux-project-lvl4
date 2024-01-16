import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, FloatingLabel } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth.jsx';
import routes from '../../utils/routes.js';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .max(50, 'Максимум 50 букв')
    .required('Required')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  password: Yup.string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const response = await axios.post(routes.loginPath(), values);
        auth.logIn(response.data);
        const { from } = location.state;
        navigate(from);
      } catch (error) {
        formik.setSubmitting(false);
        if (error.isAxiosError && error.response.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }
        throw error;
      }
    },
  });

  return (
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
                  required
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  ref={inputRef}
                  isInvalid={authFailed || !!formik.errors.username}
                  autoComplete="username"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {formik.errors.username}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                label="Пароль"
                className="mb-3"
              >
                <Form.Control
                  required
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={authFailed || !!formik.errors.password}
                  autoComplete="current-password"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {formik.errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>

              <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
