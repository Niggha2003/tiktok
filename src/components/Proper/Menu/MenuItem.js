import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, ...passProps }) {
    let Comp = 'div';

    const props = {
        onClick,
        ...passProps,
    };

    if (data.to) {
        Comp = Link;
        props.to = data.to;
    } else if (data.href) {
        Comp = 'a';
        props.href = data.href;
    }
    return (
        <Comp className={cx('menu-item')} {...props}>
            <span className={cx('menu-icon')}>{data.icon}</span>
            <p className={cx('menu-title')}>{data.title}</p>
        </Comp>
    );
}

export default MenuItem;
