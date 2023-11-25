import './SignupPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { SubmitButton } from '../../components/Buttons/SubmitButton';

const b = bem('SignupPage');

const SignupPage = () => {
    return (
        <MainLayout>
            <div className={b('signupPage')}>
                <div className={b('title')}>Signup Page</div>
                <div className={b('form')}>
                    <div className={b('inputContainer')}>
                        <label className={b('label')}>Username:</label>
                        <input
                            className={b('input')}
                            placeholder={'username'}
                            onChange={() => {}}
                        ></input>
                    </div>
                    <div className={b('inputContainer')}>
                        <label className={b('label')}>Password:</label>
                        <input
                            className={b('input')}
                            placeholder={'password'}
                            onChange={() => {}}
                        ></input>
                    </div>
                    <div className={b('inputContainer')}>
                        <label className={b('label')}>Confirm password:</label>
                        <input
                            className={b('input')}
                            placeholder={'password'}
                            onChange={() => {}}
                        ></input>
                    </div>
                    <div className={b('button')}>
                        <SubmitButton
                            onClickFunction={() => {}}
                            text={'Signup'}
                            styles={{ width: '62px', height: '35px' }}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SignupPage;
