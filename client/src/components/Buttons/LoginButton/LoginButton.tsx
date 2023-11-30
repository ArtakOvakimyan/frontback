import './LoginButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('LoginButton');
const linkClass = [b('loginButton'), b('link')].join(' ');

const LoginButton = () => {
    return (
        <Link to="/login" className={linkClass}>
            <span className={b('span')}>Login</span>
        </Link>
    );
};

export default LoginButton;
