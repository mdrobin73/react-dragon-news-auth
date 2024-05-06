import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <div className="m-1">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=""><LeftSideNav></LeftSideNav></div>
                <div className="border md:col-span-2"><h2 className="text-3xl">Dragon News coming soon...</h2></div>
                <div className=""><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;