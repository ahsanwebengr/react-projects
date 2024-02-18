
const Card = ({ users }) => {
    const { avatar_url, name, login, created_at, following, followers, public_repos, bio, location, twitter_username, blog, company, message } = users;


    return (
        <>
            <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {!message === 'Not Found' ?
                    <>
                        <div className="flex gap-3 p-3 items-center">
                            <div className="flex-1 flex justify-center">
                                <img
                                    className='rounded-full w-20 md:w-32 h-20 md:h-32 object-cover'
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>{!location ? "Not Available" : location}</p>
                                </div>
                                <div className="flex gap-2 ps-3 items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                    </svg>
                                    <p>{!twitter_username ? 'Not Available' : twitter_username}</p>
                                </div>
                                <div className="flex gap-2 ps-3 items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                    <p>{!blog ? 'Not Available' : blog}</p>
                                </div>
                                <div className="flex gap-2 ps-3 items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                    </svg>

                                    <p>{!company ? "Not Available" : company}</p>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className="text-center p-3">
                            <h1 className="text-2xl font-bold tracking-widest capitalize">No result found 🥺</h1>
                            <p className="text-lg tracking-wider font-normal mb-2 text-white/85">Please search your correct name.</p>
                        </div>
                    </>}
            </div>

        </>
    );
};

export default Card;
