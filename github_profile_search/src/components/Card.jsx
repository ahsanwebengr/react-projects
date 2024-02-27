import { FaLink, FaLocationDot } from "react-icons/fa6";
import { PiBuildingsFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

const Card = ({ users, errorMessage }) => {

    if (Object.keys(users).length === 0 || errorMessage === 'Not Found') {
        return (
            <section className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 text-center dark:text-white text-black">
                <h1 className="text-2xl font-bold tracking-widest capitalize">No result found 🥺</h1>
                <p className="text-lg tracking-wider font-normal mb-2">Please search your correct name.</p>
            </section>
        );
    }

    const { avatar_url, name, login, created_at, following, followers, public_repos, bio, location, twitter_username, blog, company } = users;

    const date = new Date(created_at);

    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options).replace(/\//g, '-');


    return (
        <section className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <article>
                <div className="flex gap-3 p-3 items-center">
                    <div className="flex-1 flex justify-center">
                        <img
                            className='rounded-full w-20 md:w-32 h-20 md:h-32 object-cover'
                            loading="lazzy"
                            src={!avatar_url ? "https://avatars.githubusercontent.com/u/97723823" : avatar_url} alt={name} />
                    </div>
                    <div className="flex-[2] pt-2 pb-1 px-2">
                        <div className="flex flex-col gap-1.5">
                            <h2 className='text-2xl font-bold tracking-wide'> {!name ? "Not Available" : name}</h2>
                            <h4 className='text-blue-700 text-xl font-medium'>{!login ? 'Not Found' : `@${login}`}</h4>
                            <p className='text-lg tracking-wider font-normal'> {!created_at ? "Not exist yet" : `Joined ${formattedDate}`}</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <p className='text-lg tracking-wider font-normal mb-2 text-white/85'>{bio}</p>
                    <div className="dark:bg-black bg-gray-200 rounded-lg grid grid-cols-3 gap-2 mx-auto p-3 my-3">
                        <div className="flex flex-col gap-1 items-center">
                            <p>Repos</p>
                            <h5 className="font-bold text-xl">{public_repos}</h5>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p>Followers</p>
                            <h5 className="font-bold text-xl">{followers}</h5>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p>Following</p>
                            <h5 className="font-bold text-xl">{following}</h5>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="flex gap-2 ps-3 justify-center mb-3">
                            <FaLocationDot size={24} />
                            <p>{!location ? "Not Available" : location}</p>
                        </div>
                        <div className="flex gap-2 ps-3 justify-center mb-3">
                            <FaTwitter size={24} />
                            <p>{!twitter_username ? 'Not Available' : twitter_username}</p>
                        </div>
                        <div className="flex gap-2 ps-3 justify-center mb-3">
                            <FaLink size={24} />
                            <p>{!blog ? 'Not Available' : blog}</p>
                        </div>
                        <div className="flex gap-2 ps-3 justify-center mb-3">
                            <PiBuildingsFill size={24} />
                            <p>{!company ? "Not Available" : company}</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Card;
