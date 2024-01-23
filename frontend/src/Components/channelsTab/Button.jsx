import PlusIcon from '../icons/PlusIcon';

const Button = () => (
  <button type="button" className="p-0 text-primary btn btn-group-vertical">
    <PlusIcon />
    <span className="visually-hidden">+</span>
  </button>
);

export default Button;
