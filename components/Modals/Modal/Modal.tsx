import * as React from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import cx from 'classnames';
import css from './Modal.module.scss';

export type ModalBaseProps = Omit<ModalProps, 'open' | 'onHide'> & {
  show: boolean;
  closable?: boolean;
  hideModal: () => {};
  onClose: (...args: any[]) => {};
};

export const ModalBase: React.FC<ModalBaseProps> = ({
  children,
  show,
  hideModal,
  className,
  onClose,
  closable,
  ...props
}) => {
  const onCloseHandler = (...args) => {
    if (closable) {
      hideModal();
    }

    if (onClose) {
      onClose(...args);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onCloseHandler}
      {...props}
      className={cx(css.root, className)}
    >
      {children}
    </Modal>
  );
};

ModalBase.defaultProps = {
  closable: true,
};
