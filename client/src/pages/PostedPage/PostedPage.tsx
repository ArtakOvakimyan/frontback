import './PostedPage.scss';
import bem from 'bem-ts';
import { MainLayout } from '../MainLayout';
import { BasicButton } from '../../components/Buttons/SubmitButton';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const b = bem('PostedPage');

const PostedPage = () => {
    const [beingEdited, setBeingEdited] = useState(false);
    const [params] = useSearchParams();
    const postId = params.get('id');
    return (
        <MainLayout>
            <div className={b('postedPage')}>
                <div className={b('title')}>{`Post`}</div>
                <div className={b('subTitle')}>{`Author: ${postId}`}</div>
                <div
                    className={b('subTitle')}
                >{`Last modified: ${postId}`}</div>
                <form className={b('form')}>
                    <textarea className={b('area')} readOnly={!beingEdited} />
                    <div className={b('buttonsBox')}>
                        <BasicButton
                            onClickFunction={() => {
                                setBeingEdited(!beingEdited);
                            }}
                            text={'Submit edit'}
                            type={'submit'}
                            styles={{
                                ...(!beingEdited
                                    ? {
                                          cursor: 'not-allowed',
                                          backgroundColor: 'grey',
                                      }
                                    : {}),
                            }}
                        />
                        <BasicButton
                            onClickFunction={() => {
                                setBeingEdited(true);
                            }}
                            text={'Edit'}
                            type={'button'}
                            styles={{
                                ...(beingEdited
                                    ? {
                                          cursor: 'not-allowed',
                                          backgroundColor: 'grey',
                                      }
                                    : {}),
                            }}
                        />
                        <BasicButton
                            onClickFunction={() => {
                                setBeingEdited(false);
                            }}
                            text={'Rest'}
                            type={'reset'}
                        />
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default PostedPage;
