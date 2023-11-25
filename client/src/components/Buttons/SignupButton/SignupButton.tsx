import './SignupButton.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';

const b = bem('SignupButton');

const SignupButton = () => {
    return (
        <div className={b('signupButton')}>
            <Link to="/signup" className={b('link')}>
                <span className={b('span')}>Sign Up</span>
            </Link>
        </div>
    );
};

export default SignupButton;
