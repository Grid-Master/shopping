import './PresentPhoto.css'

interface Props {
    photo: string;
}

const PresentPhoto: React.FC<Props> = ({photo}) => {
    return (
        <div className='presentPhotoItem'>
            <img src={photo} alt='present' />
        </div>
    );
};

export default PresentPhoto;