import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ header, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <span className={cx('menu-header-rollback')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            <h4 className={cx('menu-header-title')}>{header}</h4>
        </div>
    );
}

export default MenuHeader;
