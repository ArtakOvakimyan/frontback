import './MainLayout.scss';
import bem from 'bem-ts';
import { ReactNode } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const b = bem('MainLayout');

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
    return (
        <div className={b('main')}>
            <Header></Header>
            <div className={b('container')}>{props.children}</div>
            <div className={b('topFooter')}></div>
            <Footer />
        </div>
    );
};

export default MainLayout;
