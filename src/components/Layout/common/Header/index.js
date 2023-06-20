import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPaperPlane,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PropWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Proper/Menu';
import { menuList, menuUserList } from './menuList';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="tik-tok" />
            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={cx('options')}>
                {currentUser ? (
                    <>
                        <Button text style={{ marginRight: '-12px' }}>
                            Upload
                        </Button>
                        <Tippy content="Messages" delay={[0, 200]} offset={[0, 5]}>
                            <div>
                                <Button color="#fe2c2cb8" width="40px">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </Button>
                            </div>
                        </Tippy>
                        <Tippy content="Inbox" delay={[0, 200]} offset={[0, 5]}>
                            <div>
                                <Button color="#fe2c2cb8" width="40px">
                                    <FontAwesomeIcon icon={faMessage} />
                                </Button>
                            </div>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary color="white" bold>
                            Log in
                        </Button>
                    </>
                )}

                {currentUser ? (
                    <>
                        <Menu menuList={menuUserList} light="true">
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6b189e63582aa929d0d2a48572c1f6e3~c5_100x100.jpeg?x-expires=1687435200&x-signature=bafS38xrudX6a6AGvVj3VBDMEfM%3D"
                                className={cx('user-avatar')}
                                alt="Nguyễn Văn A"
                            />
                        </Menu>
                    </>
                ) : (
                    <>
                        <Menu menuList={menuList}>
                            <button className={cx('option-menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </>
                )}
            </div>
        </header>
    );
}
export default Header;
