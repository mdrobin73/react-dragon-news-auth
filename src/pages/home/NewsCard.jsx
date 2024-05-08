import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { author, title, image_url, details, _id } = news;
    return (
        <div className="mb-10 shadow-md">
            <div className="flex bg-gray-100 p-3 rounded-t-md items-center">
                <img src={author.img} className="w-14 rounded-full" alt="" />
                <div className="ml-4">
                    <h2 className="font-semibold">{author.name}</h2>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div className="p-5 space-y-4 border border-t-0">
                <h2 className="text-xl font-semibold">{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length > 200 ? 
                    <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className="ml-2 font-semibold text-sky-700">[...Read more]</Link></p> 
                    :
                    <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;