import { FaPlus, FaImages } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./Card";

const Board = ({ title }) => {
    return (
        <div className='bg-gray-500 rounded-lg p-3'>
            <div className="flex items-center justify-between p-3 mb-4">
                <h5 className="text-2xl text-white font-medium">{title}</h5>
                <BsThreeDotsVertical size={22} className="cursor-pointer" />
            </div>

            <Card />

            <div className="bg-gray-200 text-black px-3 py-4 rounded-lg shadow-md mb-3">
                <p className='text-md font-normal'>Create a Trello Clone. This is a huge task. And you have do it quickly due to sharp deadline.</p>
            </div>
            <div className="flex items-center justify-between p-3 mt-4">
                <h5 className="flex gap-2 items-center cursor-pointer"><FaPlus /> Add a card</h5>
                <FaImages size={26} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Board;