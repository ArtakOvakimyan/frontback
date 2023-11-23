import './Test.scss';
import { useState } from 'react';
import bem from 'bem-ts';

const b = bem('Test');

const test = () => {
    const [count, setCount] = useState(1);
    return (
        <div className={b('divv')}>
            Hello World!!!
            {count}
            <button
                className={b('button')}
                onClick={() => {
                    setCount((x) => x + 1);
                }}
            ></button>
        </div>
    );
};

export default test;
