import Nav from "../nav/nav";
import Dashboard from "../dashboard/dashboard";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <Dashboard/>
        </div>
    )
};

export default Home;
