import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import { Wrapper } from '~/components/Proper';
import styles from './Menu.module.scss';
import MenuHeader from './MenuHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, menuList, light }) {
    const [history, setHistory] = useState([{ data: menuList }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () =>
        currentMenu.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    light={light}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory([...history, item.children]);
                        }
                    }}
                />
            );
        });

    const handleMenuBack = () => {
        setHistory(history.slice(0, history.length - 1));
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            offset={[15, 12]}
            delay={[100, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        {history.length > 1 && <MenuHeader header={currentMenu.header} onBack={handleMenuBack} />}
                        {renderItems()}
                    </Wrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
