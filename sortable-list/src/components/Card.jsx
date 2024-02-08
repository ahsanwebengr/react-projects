import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Card = ({ taskDsc, badge, badgeLabels }) => {
    return (
        <div className="relative group">
            <div className="bg-gray-200 text-black px-3 py-4 rounded-md shadow-xl mb-3 group h-auto relative">

                {badge ? (
                    <>
                        {badge && badgeLabels?.map((label, index) => (
                            <span key={index} className="badge badge-primary pb-1 m-1">{label}</span>
                        ))}
                    </>
                ) : null}

                <p className='text-md font-normal cursor-default'>{taskDsc}</p>

                <div className="text-end opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-200 rounded-md group-hover:opacity-85 transition-opacity duration-200">
                    <button className='btn btn-circle btn-sm bg-gray-400 border-none text-white mr-2 hover:bg-red-500'>
                        <MdDelete size={18} />
                    </button>
                    <button className='btn btn-circle btn-sm bg-gray-400 border-none text-white'>
                        <TbEdit size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;
