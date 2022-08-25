import { ReactComponent as NotificationIcon } from "../../assets/icons/Notification.svg";

import "./notification.scss";

const Notification = ({ count = 2 }) => {
    return (
        <div className="notification">
            <span>{count}</span>
            <NotificationIcon />
        </div>
    );
};

export default Notification;
