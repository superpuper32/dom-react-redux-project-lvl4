import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const generateOnSubmit = ({ onHide, updateItems }) => (values) => {
  const item = { id: _.uniqueId(), body: values.body };
  updateItems((items) => {
    items.push(item);
  });
  onHide();
};

const Add = (props) => {
  const { onHide } = props;

  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: generateOnSubmit(props),
  });

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              required
              ref={inputRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
              data-testid="input-body"
              name="body"
            />
          </FormGroup>
          <input className="btn btn-primary mt-2" type="submit" value="Отправить" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
