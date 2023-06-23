import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';
import Image from '~/components/Image';
import Search from '~/components/Search';

import images from '~/assets/images';
import { menuList, menuUserList } from './menuList';
import { InboxIcon, MessageIcon } from '~/assets/icons';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="tik-tok" />
            <Search></Search>
            <div className={cx('options')}>
                {currentUser ? (
                    <>
                        <Button text style={{ marginRight: '-12px' }}>
                            Upload
                        </Button>
                        <Tippy content="Messages" delay={[0, 200]} offset={[0, 5]}>
                            <div>
                                <Button color="#fe2c2cb8" width="40px">
                                    <MessageIcon classnames={cx('margin-top')} width="26px" height="26px" />
                                </Button>
                            </div>
                        </Tippy>
                        <Tippy content="Inbox" delay={[0, 200]} offset={[0, 5]}>
                            <div>
                                <Button color="#fe2c2cb8" width="40px">
                                    <InboxIcon classnames={cx('margin-top')} />
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
                            <Image
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
