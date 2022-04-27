import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(rootId) {
  const modalElement = document.createElement('div');
  modalElement.setAttribute("id", rootId);
  document.body.appendChild(modalElement);
  return modalElement;
}


function ModalWarp({ children }) {
  const rootId = 'modal-root';
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(rootId);
    let modalCreated = false;
    
    if (!element) {
      modalCreated = true;
      element = createWrapperAndAppendToBody(rootId);
    }
    setWrapperElement(element);
  
    return () => {
      if (modalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [rootId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ModalWarp;