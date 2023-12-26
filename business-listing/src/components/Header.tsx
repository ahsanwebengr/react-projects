import Image from "next/image";

const Header = () => {
    return (
        <nav className="flex items-center justify-between p-3 px-5 shadow-sm">
            <div className="flex gap-3 items-center">
                <Image src={'/logo.png'} alt="logo" width={50} height={50} />
                <h4 className="uppercase text-2xl text-red-500 tracking-widest font-semibold">Discover</h4>
            </div>
            <ul className="flex items-center gap-8 ">
                <li className="text-lg hover:text-red-500 cursor-pointer">Home</li>
                <li className="text-lg hover:text-red-500 cursor-pointer">About Us</li>
                <li className="text-lg hover:text-red-500 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
};

export default Header;