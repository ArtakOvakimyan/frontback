import './SubmitButton.scss';
import bem from 'bem-ts';
import { FC } from 'react';

const b = bem('SubmitButton');

type SubmitButtonProps = {
    onClickFunction: () => void;
    text: string;
    styles?: React.CSSProperties;
};

const SubmitButton: FC<SubmitButtonProps> = (props) => {
    return (
        <div
            onClick={props.onClickFunction}
            className={b('submitButton')}
            style={props.styles}
        >
            <span className={b('span')}>{props.text}</span>
        </div>
    );
};

export default SubmitButton;
