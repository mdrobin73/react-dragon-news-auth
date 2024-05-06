import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {

    return (
        <div className="bg-gray-100 p-3 mt-8 flex">
            <button className=" bg-rose-600 text-white py-1 px-4 mr-3">Latest</button>

            <Marquee pauseOnHover={true} speed={100}>
                <Link to={"/"} className="mr-10">I can be a React component, multiple React components, or just some text <span className="font-bold text-rose-950">[Read More]</span></Link>

                <Link to={"/"} className="mr-10">I can be a React component, multiple React components, or just some text <span className="font-bold text-rose-950">[Read More]</span></Link>

                <Link to={"/"} className="mr-10">I can be a React component, multiple React components, or just some text <span className="font-bold text-rose-950">[Read More]</span></Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;