import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7c3919ec5dd414bc01ca160a0205c378~c5_100x100.jpeg?x-expires=1687309200&x-signature=%2F%2Fi0l1cRAx2rVxbteqMBIt7%2Ft1E%3D"
                alt="name-account"
                className={cx('account-avatar')}
            />
            <div className={cx('account-info')}>
                <h4 className={cx('account-nickname')}>
                    <span>_Hân_</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('account-name')}>Bảo Hân</p>
            </div>
        </div>
    );
}

export default AccountItem;
