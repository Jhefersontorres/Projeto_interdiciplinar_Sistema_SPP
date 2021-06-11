import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { css, keyframes } from 'styled-components';
import Icon from '@adsk/alloy-icon';
import Button from '@adsk/alloy-button';

const Z_INDEX = {
  MODAL_BODY: 1,
  MODAL_OVERLAY: 1
};
const stopPropagation = e => e.stopPropagation();

const WindowClosing = keyframes`
  0% { top: 131px; }
  30% { top: 125px; }
`;

/**
 * A modal is an overlay that focuses the customer's attention on a single task or set of controls.
 * It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it.
 * Users must interact with the modal window before they can return to the parent application.
 */
const Modal = React.forwardRef(
  ({ children, open, container, hideCloseButton, onClose, ...props }, ref) => (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            {...props}
            ref={ref}
            onClick={onClose}
            css={css({
              position: 'fixed',
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.7)',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              zIndex: Z_INDEX.MODAL_OVERLAY
            })}
          >
            <div
              onClick={stopPropagation}
              css={css({
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',

                opacity: open ? 1.0 : 0,
                transform: 'translateX(-50%)',
                animation: open ? 'none' : `${WindowClosing} 0.4s`,
                transition: 'all ease 0.2s',
                transitionDelay: '0.2s',

                height: '400px',
                width: '400px',
                margin: 'auto',
                left: '50%',
                top: '128px',

                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0px 1px 10px rgba(32, 60, 94, 0.2)',

                zIndex: Z_INDEX.MODAL_BODY
              })}
            >
              {!hideCloseButton && (
                <div
                  css={css({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 10
                  })}
                >
                  <Button variant="blank" size="blank" onClick={onClose}>
                    <Icon type="close" />
                  </Button>
                </div>
              )}
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
);

Modal.displayName = 'Modal';

Modal.defaultProps = {
  container: document.body
};

Modal.propTypes = {
  /** The content of modal */
  children: PropTypes.node,
  /** is modal open */
  open: PropTypes.bool,
  /** modal container by default document.body */
  container: PropTypes.bool,
  /** called on click close modal */
  onClose: PropTypes.bool,
  /** flag removes close button if enabled */
  hideCloseButton: PropTypes.bool
};

export default Modal;