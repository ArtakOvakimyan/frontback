import './HeaderNav.scss';
import bem from 'bem-ts';
import { PasteButton } from '../Buttons/PasteButton';

const b = bem('HeaderNav');

const HeaderNav = () => {
    return (
        <div className={b('nav')}>
            <PasteButton></PasteButton>
        </div>
    );
};

export default HeaderNav;
