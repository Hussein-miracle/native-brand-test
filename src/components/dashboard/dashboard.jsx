import DashboardCard from "../dashboard-card/dashboard-card";
import DashboardHeader from "../dashboard-header/dashboard-header";
import DashboardTablesLower1, {
    Table2 as DashboardTablesLower2,
} from "../dashboard-tables-lower/dashboard-tables-lower";
import DashboardCharts, {
    Donutchart,
} from "../dashboard-charts/dashboard-charts";
import "./dashboard.scss";

const cardData = [
    {
        content: "My Projects",
        progress: 42,
        type: "FilledStack",
    },
    {
        content: "My Proposals",
        progress: 25,
        type: "FilledArchive",
    },
    {
        content: "My Designs",
        progress: 15,
        type: "FilledCopy",
    },
    {
        content: "My Drawings",
        progress: 28,
        type: "FilledPenTool",
    },
];

const CardContainer = () => {
    return (
        <div className="dashboard-cards-container">
            {cardData.map((data, id) => (
                <DashboardCard {...data} key={id} />
            ))}
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardHeader />
            <CardContainer />
            <div className="dashboard-tables">
                <div className="dashboard-tables-1">
                    <DashboardTablesLower2 />
                </div>
                <div className="dashboard-tables-2">
                    <DashboardTablesLower1 />
                    <DashboardTablesLower2 />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
