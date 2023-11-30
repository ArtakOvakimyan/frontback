import './LoginPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { BasicButton } from '../../components/Buttons/SubmitButton';
import { loginData } from './const';
import { useEffect } from 'react';

const b = bem('LoginPage');

const LoginPage = () => {
    useEffect(() => {
        console.log(loginData);
    });
    return (
        <MainLayout>
            <div className={b('loginPage')}>
                <div className={b('title')}>Login Page</div>
                <form className={b('form')}>
                    {loginData.map((data) => (
                        <div className={b('inputContainer')} key={data.id}>
                            <label className={b('label')}>
                                {data.labelText}:
                            </label>
                            <input
                                className={b('input')}
                                placeholder={data.placeholder}
                                type={data.type}
                                onChange={() => {}}
                                required
                            ></input>
                        </div>
                    ))}
                    <div className={b('button')}>
                        <BasicButton
                            onClickFunction={() => {}}
                            text={'Login'}
                            type={'submit'}
                        />
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
