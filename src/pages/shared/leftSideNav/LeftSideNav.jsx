import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-5">All Category</h2>
            <div className="space-y-2 text-gray-500">
                {
                    categories.map((category) => {
                       return <NavLink className="block font-semibold hover:bg-slate-900 hover:text-white pl-16 py-3 rounded-md" key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
                    })
                }
            </div>
        </div>
    );

};

export default LeftSideNav;