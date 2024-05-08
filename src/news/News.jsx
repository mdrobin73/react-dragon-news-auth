import { useParams } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Navbar from "../pages/shared/navbar/Navbar";
import RightSideNav from "../pages/shared/rightSideNav/RightSideNav";
import { useEffect, useState } from "react";

const News = () => {
    const {id} = useParams();

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("/news.json")
        .then((result) => result.json())
        .then((data) => setNews(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl font-semibold">Dragon News: {news.length}</h2>
                    {/* <p>{id}</p> */}
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;