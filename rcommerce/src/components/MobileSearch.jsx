import { GoArrowLeft } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isMobileSearch } from '../redux/logic';
import Loader from './Loader';

const MobileSearch = () => {
    const dispatch = useDispatch();

    const toggleMobileSearch = () => {
        dispatch(isMobileSearch());
    };

    return (
        <div className='py-2 bg-white absolute top-0 bottom-0 right-0 left-0'>

            <div className=" searchTp flex items-center w-full px-2 justify-between">
                <Link to='/' onClick={toggleMobileSearch}>
                    <GoArrowLeft
                        className='cursor-pointer text-2xl text-gray-600 hover:scale-110 transition-all'
                    />
                </Link>

                <input
                    type="text"
                    placeholder="Search"
                    className="px-5 py-2 w-full border rounded-full border-gray-200
                    focus:border-gray-500 outline-none "
                />
            </div>

            <p className='searchTag bg-gray-400/10 text-center py-1 mt-1 text-gray-500'> Collection</p>

            <div className="wrapper py-5 px-2 grid grid-cols-2 gap-4 ">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto quos soluta numquam aspernatur, repudiandae ipsa blanditiis vero dolorem totam consectetur? Cupiditate molestiae nesciunt praesentium eveniet amet, natus deleniti fugiat.
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur voluptatum sunt commodi dolorum doloribus minima mollitia nesciunt expedita consequatur ad esse quisquam quaerat dolore id in, eum exercitationem laboriosam!
                </div>
            </div>

            <div className="wrapper py-5 px-2 grid grid-cols-2 gap-4 ">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto quos soluta numquam aspernatur, repudiandae ipsa blanditiis vero dolorem totam consectetur? Cupiditate molestiae nesciunt praesentium eveniet amet, natus deleniti fugiat.
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur voluptatum sunt commodi dolorum doloribus minima mollitia nesciunt expedita consequatur ad esse quisquam quaerat dolore id in, eum exercitationem laboriosam!
                </div>
            </div>

            <Loader />
        </div>
    )
}

export default MobileSearch