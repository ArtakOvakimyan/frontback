import './LoginButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('LoginButton');

const LoginButton = () => {
    return (
        <div className={b('loginButton')}>
            <Link to="/login" className={b('link')}>
                <span className={b('span')}>Login</span>
            </Link>
        </div>
    );
};

export default LoginButton;
