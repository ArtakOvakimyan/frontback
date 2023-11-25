import './Footer.scss';
import bem from 'bem-ts';

const b = bem('Footer');

const Footer = () => {
    return (
        <footer className={b('footer')}>
            <span className={b('span')}>© 2023 Postbin</span>
        </footer>
    );
};

export default Footer;
