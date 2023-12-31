import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = UserAuth();

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/');
            toast.success('Logged Out!');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        }
    };
    return (
        <nav className="navbar bg-base-100">
            <div className='mx-auto container max-w-4xl px-2'>
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-3xl font-bold">Whats<span className="text-primary">Chat</span></h2>
                    {currentUser && <button onClick={handleLogOut} className='btn btn-error text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                    </button>}
                </div>
            </div>
        </nav>
    );
};
