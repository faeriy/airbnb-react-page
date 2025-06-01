import './Account.scss';
import navIcon from './img/nav.svg';
import userAvatar from './img/user-avatar.svg';

const Account = ({avatar}) => {
    const defaultAvatar = avatar || userAvatar;
    const defaultNavIcon = navIcon;

    return (
        <button className="account">
            <div className="account__nav-icon"><img src={defaultNavIcon} alt="nav" /></div>
            <div className="account__avatar">
                <img src={defaultAvatar} alt="User Avatar" />
            </div>
        </button>
    );
};

export default Account;