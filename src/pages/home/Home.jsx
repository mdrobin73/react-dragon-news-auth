import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news);
    return (
        <div className="m-1">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1"><LeftSideNav></LeftSideNav></div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-5">Dragon News Home</h2>
                    {
                        news.map((aNews, index) => <NewsCard key={index} news={aNews}></NewsCard>)
                    }
                </div>

                <div className="md:col-span-1"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;