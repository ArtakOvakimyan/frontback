import './SearchForm.scss';
import bem from 'bem-ts';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchSVG from '../../assets/Svg/SearchSVG';

const b = bem('SearchForm');

const SearchForm = () => {
    const [text, setText] = useState('');
    return (
        <form className={b('searchBar')}>
            <input
                className={b('input')}
                placeholder={'Search...'}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <Link to={text}>
                <button className={b('button')}>
                    <SearchSVG />
                </button>
            </Link>
        </form>
    );
};

export default SearchForm;
