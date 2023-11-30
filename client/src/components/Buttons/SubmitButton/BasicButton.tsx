import './BasicButton.scss';
import bem from 'bem-ts';
import { FC } from 'react';

const b = bem('BasicButton');

type SubmitButtonProps = {
    onClickFunction: () => void;
    text: string;
    styles?: React.CSSProperties;
    type: 'submit' | 'reset' | 'button' | undefined;
};

const BasicButton: FC<SubmitButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClickFunction}
            className={b('basicButton')}
            type={props.type}
            style={props.styles}
        >
            <span className={b('span')}>{props.text}</span>
        </button>
    );
};

export default BasicButton;
