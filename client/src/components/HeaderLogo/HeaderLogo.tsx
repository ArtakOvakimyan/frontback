import './HeaderLogo.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('HeaderLogo');

const HeaderLogo = () => {
    return (
        <Link to="/" className={b('text')}>
            POSTBIN
        </Link>
    );
};

export default HeaderLogo;
