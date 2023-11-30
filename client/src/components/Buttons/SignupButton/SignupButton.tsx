import './SignupButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('SignupButton');
const linkClass = [b('link'), b('signupButton')].join(' ');

const SignupButton = () => {
    return (
        <Link to="/signup" className={linkClass}>
            <span className={b('span')}>Sign Up</span>
        </Link>
    );
};

export default SignupButton;
