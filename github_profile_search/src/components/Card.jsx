
import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { PiBuildingsFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

const Card = ({ users, errorMessage }) => {
    const { avatar_url, name, login, created_at, following, followers, public_repos, bio, location, twitter_username, blog, company } = users;
    return (
        <>
            <section className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {
                    errorMessage !== "Not Found" ? (
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
                                        <h4 className='text-blue-700 text-xl font-medium'>@{login}</h4>
                                        <p className='text-lg tracking-wider font-normal'>Joined {created_at}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <p className='text-lg tracking-wider font-normal mb-2 text-white/85'>{bio}</p>
                                <div className="bg-black rounded-lg grid grid-cols-3 gap-2 mx-auto p-3 my-3">
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
                                    <div className="flex gap-2 ps-3 items-center mb-3">
                                        <CiLocationOn size={24} />
                                        <p>{!location ? "Not Available" : location}</p>
                                    </div>
                                    <div className="flex gap-2 ps-3 items-center mb-3">
                                        <FaTwitter size={24} />
                                        <p>{!twitter_username ? 'Not Available' : twitter_username}</p>
                                    </div>
                                    <div className="flex gap-2 ps-3 items-center mb-3">
                                        <FaLink size={24} />
                                        <p>{!blog ? 'Not Available' : blog}</p>
                                    </div>
                                    <div className="flex gap-2 ps-3 items-center mb-3">
                                        <PiBuildingsFill size={24} />
                                        <p>{!company ? "Not Available" : company}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ) : (
                        <div className="text-center p-3">
                            <h1 className="text-2xl font-bold tracking-widest capitalize">No result found 🥺</h1>
                            <p className="text-lg tracking-wider font-normal mb-2 text-white/85">Please search your correct name.</p>
                        </div>
                    )}


            </section>

        </>
    );
};

export default Card;
