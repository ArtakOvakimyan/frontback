import './Header.scss';
import bem from 'bem-ts';
import { HeaderNav } from '../HeaderNav';
import { HeaderLogo } from '../HeaderLogo';
import { SearchForm } from '../SearchForm/index';
import { LogNav } from '../LogNav';

const b = bem('Header');
//declare module '*.svg';

const Header = () => {
    return (
        <header className={b('header')}>
            <div className={b('container')}>
                <div className={b('left')}>
                    <HeaderLogo />
                    <HeaderNav />
                    <SearchForm />
                </div>
                <div className={b('right')}>
                    <LogNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
