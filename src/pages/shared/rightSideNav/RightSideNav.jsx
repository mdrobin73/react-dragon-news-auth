import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import image1 from "../../../assets/qZone1.png";
import image2 from "../../../assets/qZone2.png";
import image3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div className="p-2 pt-0">
            <h2 className="text-2xl font-semibold mb-4">Login With</h2>
            <div className="">
                <button className="btn w-full btn-outline mb-2 "><FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn w-full btn-outline"><FaGithub></FaGithub>Login with GitHub</button>
            </div>

            <h2 className="text-2xl mt-10 mb-6">Find Us On</h2>
            <div className="border rounded">
                <a href="" className="flex items-center border-b py-3 px-4 hover:bg-slate-100"><FaFacebookF className="mr-2 text-blue-800"></FaFacebookF>Facebook</a>

                <a href="" className="flex items-center border-b py-3 px-4 hover:bg-slate-100"><FaTwitter className="mr-2 text-sky-500"></FaTwitter>Twitter</a>

                <a href="" className="flex items-center border-b py-3 px-4 hover:bg-slate-100"><FaInstagram className="mr-2 text-red-500"></FaInstagram>Instagram</a>
            </div>

            <div className="bg-gray-100 p-2 mt-6">
                <h2 className="text-2xl mb-5 ml-2">Q-Zone</h2>
                <div className="space-y-4">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;