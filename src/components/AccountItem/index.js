import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image src={data.avatar} alt={data.full_name} className={cx('account-avatar')} />
            <div className={cx('account-info')}>
                <h4 className={cx('account-nickname')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('account-name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
