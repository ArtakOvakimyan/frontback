import './SignupPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { BasicButton } from '../../components/Buttons/SubmitButton';
import { signupData } from './const';

const b = bem('SignupPage');

const SignupPage = () => {
    return (
        <MainLayout>
            <div className={b('signupPage')}>
                <div className={b('title')}>Signup Page</div>
                <form className={b('form')}>
                    {signupData.map((data) => (
                        <div className={b('inputContainer')} key={data.id}>
                            <label className={b('label')}>
                                {data.labelText}:
                            </label>
                            <input
                                className={b('input')}
                                placeholder={data.placeholder}
                                onChange={() => {}}
                                required
                                {...data.length}
                            ></input>
                        </div>
                    ))}
                    <div className={b('button')}>
                        <BasicButton
                            onClickFunction={() => {}}
                            text={'Signup'}
                            type={'submit'}
                        />
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default SignupPage;
