import './PostPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { SubmitButton } from '../../components/Buttons/SubmitButton';

const b = bem('PostPage');

const PostPage = () => {
    return (
        <MainLayout>
            <div className={b('postPage')}>
                <div className={b('title')}>{'New Post'}</div>
                <div className={b('form')}>
                    <textarea className={b('area')} />
                    <SubmitButton
                        onClickFunction={() => {}}
                        text={'Create New Post'}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default PostPage;
