import React from 'react';
import { useFormik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';

const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const initialValues = {
  firstName: '',
  password: '',
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  password: Yup.string()
    .min(8, 'Must Contain 8 Characters')
    .required('Please Enter your password')
    .matches(
      passwordRegExp,
      'One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1>Sign Up</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter name"
            autoComplete="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password :</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
