import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faGear,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faKeyboard,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const menuList = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            header: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const menuUserList = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...menuList,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

export { menuList, menuUserList };
