import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../redux/slices/modalSlice.js';

import getModal from './getModal.js';

const RenderModal = () => {
  const { isOpened, type } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const hideModal = () => dispatch(closeModal());

  if (!isOpened || !type) return null;

  const Component = getModal(type);
  return <Component onHide={hideModal} />;
};

export default RenderModal;
