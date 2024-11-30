// @ts-ignore
import PlusIcon from '../../assets/icons/PlusIcon.tsx';

const Button: React.FC = () => (
  <button type="button" className="p-0 text-primary btn btn-group-vertical">
    <PlusIcon />
    <span className="visually-hidden">+</span>
  </button>
);

export default Button;
