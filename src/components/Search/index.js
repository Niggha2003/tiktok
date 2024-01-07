import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import * as searchServices from '~/services/searchServices';
import classNames from 'classnames/bind';
import { Wrapper as PropWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const wrapperRef = useRef();

    const debounce = useDebounce(searchValue, 600);

    console.log('render');

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);
            setSearchResult(result);

            setLoading(false);
        };

        fetchAPI();
    }, [debounce]);

    if (searchValue) {
        wrapperRef.current.classList.add(cx('is-typing'));
    } else {
        if (wrapperRef.current && wrapperRef.current.classList.contains(cx('is-typing'))) {
            wrapperRef.current.classList.remove(cx('is-typing'));
        }
    }

    const handleInputFocus = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    const handleAccountClick = () => {
        setSearchResult([]);
        setSearchValue('');
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this
        // by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0 && showResults}
                // trigger="click"
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PropWrapper>
                            <div className={cx('search-account-title')}>Accounts</div>
                            {searchResult.map((item) => (
                                <AccountItem key={item.id} data={item} onClick={handleAccountClick} />
                            ))}
                        </PropWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResults(false);
                }}
            >
                <div ref={wrapperRef} className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        placeholder="Search accounts anh videos"
                        spellCheck={false}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
