import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Card = ({ taskDsc, badge, badgeLabels }) => {
    return (
        <>
            <div className="bg-gray-200 text-black px-3 py-4 rounded-md shadow-xl mb-3 group h-auto">

                {badge ? (
                    <>
                        {badge && badgeLabels?.map((label, index) => (
                            <span key={index} className="badge badge-primary pb-1 m-1">{label}</span>
                        ))}
                    </>
                ) : null}

                <p className='text-md font-normal cursor-default'>{taskDsc}</p>


                <div className="text-end hidden group-hover:block">
                    <button className='btn btn-circle btn-sm bg-gray-400 border-none text-white opacity-0 group-hover:opacity-100 transition-all duration-200 mr-2 hover:bg-red-500'>
                        <MdDelete size={18} />
                    </button>
                    <button className='btn btn-circle btn-sm bg-gray-400 border-none text-white opacity-0 group-hover:opacity-100 transition-all duration-200'>
                        <TbEdit size={18} />
                    </button>
                </div>

            </div>
        </>
    );
};

export default Card;