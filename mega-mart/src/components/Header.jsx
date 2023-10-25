import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { useAppContext } from './context/Context';
const Header = () => {
    const { handleChange, search, products, handleCategoryChange, selectedCategory, count } = useAppContext();
    return (
        <nav className='py-3 relative'>
            {/* Logo  */}
            <div className="max-w-screen-xl mx-auto px-2 flex items-center justify-between">
                <h4 className="text-mart_brand flex items-center gap-4">
                    <span className="inline-flex items-center justify-center rounded-lg w-10 lg:w-14 h-10 lg:h-14 bg-mart_white_200 text-2xl lg:text-4xl font-bold">M</span>
                    <span className="text-xl lg:text-3xl font-semibold">MegaMart</span>
                </h4>
                {/* Search Filters   */}
                <div className="flex items-center h-12 w-full lg:w-[540px] bg-mart_white_300 lg:rounded-lg absolute lg:static bottom-[-52px] left-0">
                    <select className='w-24 md:w-32 h-full focus:outline-none bg-transparent capitalize p-2' onChange={handleCategoryChange} value={selectedCategory}>
                        <option value={'all'}>All</option>
                        {
                            [...new Set(products.map((product) => product.category))].map((category, index) => (
                                <option value={category} key={index}>{category}</option>
                            ))
                        }
                    </select>
                    <div className="flex items-center w-full px-2">
                        <input type="search" placeholder="Search Here..." className='bg-transparent h-full w-full focus:outline-none px-2' value={search} onChange={handleChange} />
                        <CiSearch className='text-2xl text-mart_brand cursor-pointer' />
                    </div>
                </div>

                {/* Cart Counter  */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="flex gap-2">
                        <AiOutlineShoppingCart className='text-2xl text-mart_brand' />
                        <h4 className='text-lg text-mart_heading font-semibold'>Cart</h4>
                    </div>
                    <span className={`${count > 0 ? 'opacity-1 visible' : 'opacity-0 invisible'} flex items-center justify-center w-6 h-6 rounded-full bg-mart_brand text-xs text-white`}>{count}</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;