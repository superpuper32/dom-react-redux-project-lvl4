import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';

const modals = {
  addChannel: Add,
  removeChannel: Remove,
  renameChannel: Rename,
};

export default (modalName) => modals[modalName];
