import { useState } from "react";
import { ReactComponent as Stack } from "../../assets/icons/Stack.svg";
import { ReactComponent as Contacts } from "../../assets/icons/Contacts.svg";
import { ReactComponent as Copy } from "../../assets/icons/Copy.svg";
import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
import { ReactComponent as Users } from "../../assets/icons/Users.svg";
import { ReactComponent as Layout } from "../../assets/icons/Layout.svg";
import { ReactComponent as BookOpen } from "../../assets/icons/Book-Open.svg";
import { ReactComponent as Sun } from "../../assets/icons/Sun.svg";
import { ReactComponent as Play } from "../../assets/icons/Play.svg";
// import { ReactComponent as FilledArchive} from "./FilledArchive.svg";
// import { ReactComponent as FilledCopy } from "./FilledCopy.svg";
// import { ReactComponent as FilledPenTool } from "./FilledPenTool.svg";
// import { ReactComponent as FilledStack } from "./FilledStack.svg";

import "./nav.scss";

const NavItem = ({ iconType, content }) => {
    return (
        <div
            className="nav-item"
            style={{
                backgroundColor: iconType === "layout" && "var(--orange-bg-1)",
            }}
        >
            {iconType === "stack" && <Stack />}
            {iconType === "contacts" && <Contacts />}
            {iconType === "copy" && <Copy />}
            {iconType === "edit" && <Edit />}
            {iconType === "layout" && <Layout />}
            {iconType === "users" && <Users />}
            <span>{content}</span>
        </div>
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
    };

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
                    <NavFooterItem Icon={Play} text="Tutorials" />
                    <div className="nav-footer__main--content">
                        <h4>Need Help?</h4>
                        <p>Get Support/Feedback</p>
                    </div>
                </div>
                <div className="nav-footer__bottom">
                    <Sun className="sun" />

                    <div
                        onClick={handleToggle}
                        className="toggle-btn"
                        style={{
                            "--position": toggled === true ? "75%" : "5%",
                            "--tranX": toggled === true ? "-50%" : "0%",
                        }}
                    ></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
