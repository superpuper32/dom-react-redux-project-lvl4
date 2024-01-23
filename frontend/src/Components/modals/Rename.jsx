import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const generateOnSubmit = ({ onHide }) => () => {
//   updateItems(() => {
//     // const item = items.find((item) => item.id === modal.item.id);
//     item.body = values.body;
//   });
  onHide();
};

const Rename = (props) => {
  const { onHide, modal } = props;
  const { item } = modal;

  const formik = useFormik({
    initialValues: item,
    onSubmit: generateOnSubmit(props),
  });

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Rename</Modal.Title>
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
          <input className="btn btn-primary mt-2" type="submit" value="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
