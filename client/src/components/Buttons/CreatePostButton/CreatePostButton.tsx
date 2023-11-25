import './CreatePostButton.scss';
import bem from 'bem-ts';
import { FC } from 'react';

const b = bem('CreatePostButton');

type CreatePostButtonProps = {
    onClickFunction: () => void;
};

const createPostButton: FC<CreatePostButtonProps> = (props) => {
    return (
        <div onClick={props.onClickFunction} className={b('createPostButton')}>
            <span className={b('span')}>Create New Post</span>
        </div>
    );
};

export default createPostButton;
