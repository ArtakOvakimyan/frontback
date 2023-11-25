import './PostPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { CreatePostButton } from '../../components/Buttons/CreatePostButton';

const b = bem('PostPage');

const PostPage = () => {
    return (
        <MainLayout>
            <div className={b('postPage')}>
                <div className={b('title')}>{'New Post'}</div>
                <div className={b('form')}>
                    <textarea className={b('area')} />
                    <CreatePostButton onClickFunction={() => {}} />
                </div>
            </div>
        </MainLayout>
    );
};

export default PostPage;
