import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/Modal.module.css';
import ReactDOM from 'react-dom';

const Modal = ({ show, onClose, title, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modal = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href='#' onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modal, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

export default Modal;
