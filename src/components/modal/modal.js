import { useEffect, useRef } from "react";
import ModalWarp from "./modal-warp";

const Modal = ({ children, onClose }) => {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);

		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [onClose]);

	return (
		<ModalWarp>
			<div className="c-modal" ref={nodeRef}>
                <div className="c-modal__dialog">
                    <button onClick={onClose} className="c-modal__close" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/>
                            <path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>
                        </svg>
                    </button>

                    <div className="c-modal__content">{children}</div>
                </div>
            </div>
		</ModalWarp>
	);
}


export default Modal;