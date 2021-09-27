import { showModal as showModalBase } from 'react-redux-modal-provider';

const showModal = (modal: React.ElementType, options?: any) => {
  return showModalBase(modal, options);
};

export default showModal;
