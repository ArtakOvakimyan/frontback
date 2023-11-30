import './PasteButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('PasteButton');
const linkClass = [b('pasteButton'), b('link')].join(' ');

const PasteButton = () => {
    return (
        <Link to="/" className={linkClass}>
            <span className={b('span')}>Make post</span>
        </Link>
    );
};

export default PasteButton;
