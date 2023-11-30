import './PostPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { BasicButton } from '../../components/Buttons/SubmitButton';

const b = bem('PostPage');

const PostPage = () => {
    return (
        <MainLayout>
            <div className={b('postPage')}>
                <div className={b('title')}>{'New Post'}</div>
                <form className={b('form')}>
                    <textarea className={b('area')} />
                    <BasicButton
                        onClickFunction={() => {}}
                        text={'Create New Post'}
                        type={'submit'}
                    />
                </form>
            </div>
        </MainLayout>
    );
};

export default PostPage;
