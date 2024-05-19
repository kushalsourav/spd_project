import ReactModal from 'react-modal';
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Modal = ({children, openModal, setCloseModal}) => {
    return (
            <ReactModal  
               isOpen={openModal}
               className={"modal"}
            >
                {children}
                <span className='modal-close' onClick={() => {setCloseModal()
                
                }}>
                 <FontAwesomeIcon icon={faXmark} />
                </span>
            </ReactModal>
    );
}

export default Modal;
