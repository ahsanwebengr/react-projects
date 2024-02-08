import { useState } from "react";
import { FaPlus, FaImages } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./Card";
import { data } from "../data";

const Board = ({ title }) => {
    const [isAddingCard, setAddingCard] = useState(false);
    const [newCardDescription, setNewCardDescription] = useState("");

    const handleAddCardClick = () => {
        setAddingCard(true);
    };

    const handleCancelAddCard = () => {
        setAddingCard(false);
        setNewCardDescription("");
    };

    const handleAddCard = () => {
        // Generate a unique ID for the new card
        const newCardId = Math.floor(Math.random() * 10000);

        // Create a new card object with the provided description and the unique ID
        const newCard = {
            id: newCardId,
            desc: newCardDescription,
            badge: false, // You may want to set a default value for badge
            badgeLabels: [] // You may want to set a default value for badgeLabels
        };

        // Update the data array with the new card
        data.push(newCard);

        // Reset the state
        setAddingCard(false);
        setNewCardDescription("");
    };

    return (
        <article className='bg-gray-500 rounded-lg p-3'>

            {/* Header  */}

            <div className="flex items-center justify-between p-3 mb-4">
                <h5 className="text-2xl text-white font-medium">{title}</h5>
                <BsThreeDotsVertical size={22} className="cursor-pointer" />
            </div>

            {/* Cards  */}
            <div className="max-h-96 overflow-auto scrollbar px-1">
                {
                    data?.map((card) => (
                        <Card taskDsc={card?.desc} badge={card?.badge} key={card?.id} badgeLabels={card?.badgeLabels} />
                    ))
                }
            </div>

            {
                title === 'Todo' && (
                    <>
                        {isAddingCard ? (
                            <form className="flex items-center flex-col justify-between mt-4">
                                <textarea
                                    value={newCardDescription}
                                    onChange={(e) => setNewCardDescription(e.target.value)}
                                    placeholder="Enter card description..."
                                    required="required"
                                    className="w-full p-1 bg-gray-200 text-black rounded-md shadow-xl focus:outline-none mb-2"
                                />
                                <div className="flex gap-4">
                                    <button type="submit" onClick={handleAddCard} className="text-primary">Add Card</button>
                                    <button onClick={handleCancelAddCard} className="text-error">Cancel</button>
                                </div>
                            </form>
                        ) : (
                            <div className="flex items-center justify-between p-3 mt-4">
                                <h5 className="flex gap-2 items-center cursor-pointer" onClick={handleAddCardClick}><FaPlus /> Add a card</h5>
                                <FaImages size={26} className="cursor-pointer" />
                            </div>
                        )}
                    </>
                )
            }
        </article>
    );
};

export default Board;
