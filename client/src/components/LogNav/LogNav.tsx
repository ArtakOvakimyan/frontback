import './LogNav.scss';
import bem from 'bem-ts';
import { LoginButton } from '../Buttons/LoginButton';
import { SignupButton } from '../Buttons/SignupButton';

const b = bem('LogNav');

const LogNav = () => {
    return (
        <div className={b('logNav')}>
            <LoginButton></LoginButton>
            <SignupButton></SignupButton>
        </div>
    );
};

export default LogNav;
