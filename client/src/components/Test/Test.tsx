import './Test.scss';
import { useEffect, useState } from 'react';
import bem from 'bem-ts';
import { useStaticContext } from '../../context/context';

const b = bem('Test');
declare global {
    interface Window {
        appData: any;
    }
}
const test = () => {
    const [count, setCount] = useState(1);
    const [a, setA] = useState('aaa');
    const context = useStaticContext();
    useEffect(() => {
        if (window?.appData) {
            setA(window?.appData?.user?.name);
        } else if (context?.user) {
            setA(context?.user.name);
        } else {
            setA('goy');
        }
    });
    return (
        <div className={b('divv')}>
            <span>{`Hello ${a}!!!`}</span>
            <span>{count}</span>
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
