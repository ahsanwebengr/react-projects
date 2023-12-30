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
                    {currentUser && <button onClick={handleLogOut} className='btn btn-error text-white'>Logout</button>}
                </div>
            </div>
        </nav>
    );
};
