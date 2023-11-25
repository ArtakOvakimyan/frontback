import './PasteButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('PasteButton');

const PasteButton = () => {
    return (
        <div className={b('pasteButton')}>
            <Link to="/" className={b('link')}>
                <span className={b('span')}>Make post</span>
            </Link>
        </div>
    );
};

export default PasteButton;
