import { useState } from "react";
import {
    Stack,
    Contacts,
    Copy,
    Edit,
    Users,
    Layout,
    BookOpen,
    Sun,
    Play,
} from "../../assets/icons/icons";

import "./nav.scss";

const NavItem = ({ iconType, content }) => {

    return (
        <div className="nav-item" style={{
            backgroundColor: iconType === "layout" && "var(--orange-bg-1)"
        }}>
            {iconType === "stack" && <Stack />}
            {iconType === "contacts" && <Contacts />}
            {iconType === "copy" && <Copy />}
            {iconType === "edit" && <Edit />}
            {iconType === "layout" && <Layout />}
            {iconType === "users" && <Users />}
            <span>{content}</span>
        </div >
    );
};
const NavFooterItem = ({ Icon, text }) => {
    return (
        <div className="nav-footer__item">
            <Icon />
            <span>{text}</span>
        </div>
    );
};


const Nav = () => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled((prev) => !prev);
    }

    return (
        <nav className="nav">
            <div className="nav-top">
                <h2 className="nav-top__title">
                    <span className="colored-text">AV</span> DESIGNER
                </h2>

                <div className="nav-top__content">
                    <NavItem iconType="layout" content="Dashboard" />
                    <NavItem iconType="edit" content="Create Project" />
                    <NavItem iconType="stack" content="All Projects" />
                    <NavItem iconType="copy" content="Proposals" />
                    <NavItem iconType="users" content="Clients" />
                    <NavItem iconType="contacts" content="All Contacts" />
                </div>
            </div>
            <div className="nav-footer">
                <div className="nav-footer__main">
                    <NavFooterItem Icon={BookOpen} text="Learn AV Designer" />
                    < NavFooterItem Icon={Play} text="Tutorials" />
                    <div className="nav-footer__main--content">
                        <h4>Need Help?</h4>
                        <p>Get Support/Feedback</p>
                    </div>
                </div>
                <div className="nav-footer__bottom">
                    <Sun className="sun" />

                    <div onClick={handleToggle} className="toggle-btn" style={{
                        "--position": toggled === true ? "75%" : "5%",
                        "--tranX": toggled === true ? "-50%" : "0%"
                    }}>

                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Nav;
