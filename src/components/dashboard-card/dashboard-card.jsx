


import "./dashboard-card.scss";

const DashboardCard = ({ content, progress, icon }) => {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__header">
                <h3>{content}</h3>

            </div>
            <div className="dashboard-card__content">
                <CircularProgressbarWithChildren value={progress}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

                    <strong>{progress}</strong>
                </CircularProgressbarWithChildren>
            </div >
        </div >
    )
};

export default DashboardCard;