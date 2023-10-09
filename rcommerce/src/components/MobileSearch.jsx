import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const MobileSearch = () => {
    return (
        <div className='  bg-white absolute top-0 bottom-0 right-0 left-0'>

            <div className="searchTp flex items-center w-full px-2 justify-between">
                <Link to='/'>
                    <GoArrowLeft
                        className='cursor-pointer text-2xl text-gray-600 hover:scale-110 transition-all'
                    />
                </Link>


                <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-3 w-full border rounded-full border-gray-200"
                />
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto quos soluta numquam aspernatur, repudiandae ipsa blanditiis vero dolorem totam consectetur? Cupiditate molestiae nesciunt praesentium eveniet amet, natus deleniti fugiat.
        </div>
    )
}

export default MobileSearch