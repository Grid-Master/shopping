import './modal.css'

interface Props {
    children?: React.ReactNode;
    active: boolean;
    setActive:  React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({active, setActive, children}) => {
    return (
        <div className={active? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;