import Input from "../input/input";
import Notification from "../notification/notification";
import { ReactComponent as ArrowDown } from "../../assets/icons/ArrowDown.svg";
import UserImg from "../../assets/images/user.svg";

import "./dashboard-header.scss";

const DashboardHeader = () => {
    return (
        <div className="dashboard-header">
            <Input />
            <div className="dashboard-header__right">
                <Notification />

                <div className="dashboard-header__user">
                    <img src={UserImg} alt="User" />

                    <div className="dashboard-header__user--right">
                        {/* name */}
                        <h4>Chibuzo</h4>
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
