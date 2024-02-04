import React, { useState } from 'react';
import { TbEdit } from "react-icons/tb";

const Card = () => {
    const [badge, setBadge] = useState(false);
    return (
        <>
            <div className="bg-gray-200 text-black px-3 py-4 rounded-md shadow-xl mb-3 group h-auto">
                {badge && (
                    <>
                        <span className="badge badge-primary pb-1 m-1">Important</span>
                        <span className="badge badge-primary pb-1 m-1">Quickly</span>
                    </>
                )}
                <p className='text-md font-normal'>Create a Trello Clone.</p>
                <div className="text-end hidden group-hover:block">
                    <button className='btn btn-circle btn-sm bg-gray-400 border-none text-white opacity-0 group-hover:opacity-100 transition-all duration-200'>
                        <TbEdit size={18} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;