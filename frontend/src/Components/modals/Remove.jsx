import { Modal, FormGroup } from 'react-bootstrap';

const generateOnSubmit = ({ onHide }) => (e) => {
  e.preventDefault();
  //   updateItems(items => items.filter(item => item.id !== modal.item.id));
  onHide();
};

const Remove = (props) => {
  const { onHide } = props;
  const onSubmit = generateOnSubmit(props);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <input className="btn btn-primary mt-2" type="submit" value="Remove" />
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
