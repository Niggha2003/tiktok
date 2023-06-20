import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Proper/Menu';
import menuList from './menuList';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="tik-tok" />
            <Tippy
                interactive
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PropWrapper>
                            <div className={cx('search-account-title')}>Accounts</div>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PropWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts anh videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('options')}>
                <Button text>Upload</Button>
                <Button primary color="white" bold>
                    Log in
                </Button>
                <Menu menuList={menuList}>
                    <button className={cx('option-menu-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </header>
    );
}
export default Header;
