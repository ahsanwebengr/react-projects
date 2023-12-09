import './loader.css';
const Loader = () => {
    return (
        <div className='fixed top-[50%] left-[50%] w-full min-h-screen flex'>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;