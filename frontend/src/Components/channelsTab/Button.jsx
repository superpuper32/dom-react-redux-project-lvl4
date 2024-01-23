import PlusIcon from '../icons/PlusIcon';

const Button = ({ showModal }) => (
  <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={() => showModal('addChannel')}>
    <PlusIcon />
    <span className="visually-hidden">+</span>
  </button>
);

export default Button;
