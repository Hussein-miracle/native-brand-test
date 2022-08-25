import { Progress } from "antd";
import { ReactComponent as FilledArchive } from "../../assets/icons/FilledArchive.svg";
import { ReactComponent as FilledCopy } from "../../assets/icons/FilledCopy.svg";
import { ReactComponent as FilledPenTool } from "../../assets/icons/FilledPenTool.svg";
import { ReactComponent as FilledStack } from "../../assets/icons/FilledStack.svg";

import "./dashboard-card.scss";
import "antd/dist/antd.css";

const getBg = {
    FilledStack: "rgba(242,48,48,0.25)",
    FilledArchive: "rgba(61,191,145,0.25)",
    FilledCopy: "rgba(141,8,245,0.25)",
    FilledPenTool: "rgba(255,102,0,0.25)",
};
const getColor = {
    FilledStack: "rgba(242,48,48,0.75)",
    FilledArchive: "rgba(61,191,145,0.75)",
    FilledCopy: "rgba(141,8,245,0.75)",
    FilledPenTool: "rgba(255,102,0,0.75)",
};

const DashboardCard = ({ content, progress, type }) => {
    // console.log(type);
    return (
        <div
            className="dashboard-card"
            style={{
                "--card-bg": getBg[type],
            }}
        >
            <div className="dashboard-card__header">
                <h2>{content}</h2>

                {type === "FilledStack" && <FilledStack />}
                {type === "FilledArchive" && <FilledArchive />}
                {type === "FilledCopy" && <FilledCopy />}
                {type === "FilledPenTool" && <FilledPenTool />}
            </div>
            <div className="dashboard-card__content">
                <Progress
                    type="circle"
                    percent={progress}
                    format={(percent) => `${percent}`}
                    strokeColor={getColor[type]}
                    trailColor={"#fff"}
                    strokeLinecap="butt"
                    width={30}
                />
            </div>
        </div>
    );
};

export default DashboardCard;
