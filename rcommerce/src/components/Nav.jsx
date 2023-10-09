import { CiMenuBurger } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import { RxPerson } from 'react-icons/rx';
import { SlHandbag } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { isMobileMenu, isCart, isMobileSearch } from '../redux/logic';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import Cart from './Cart';
import MobileSearch from './MobileSearch';
import DesktopMenu from './DesktopMenu';


const Nav = () => {
    const showMobileMenu = useSelector((state) => state.genToggle.showMobileMenu);
    const showMobileSearch = useSelector((state) => state.genToggle.showMobileSearch);
    const showCart = useSelector((state) => state.genToggle.showCart);


    const dispatch = useDispatch();

    const iconStyle = 'cursor-pointer text-2xl text-white hover:scale-110 transition-all';





    // a function that takes a functionName name
    const toggleMobileMenu = () => {
        dispatch(isMobileMenu());
    };

    const toggleMobileSearch = () => {
        dispatch(isMobileSearch());
    };

    const toggleIsCart = () => {
        dispatch(isCart());
    };



    return (
        <>
            <section className="z-[2000]">
                <div className="wrap bg-black ">

                    <div className="relative py-7 wrap ">
                        <div className="relative flex items-center justify-between px-5 Container ">

                            {!showMobileMenu
                                ?
                                (
                                    <div className="div">
                                        <CiMenuBurger className={`${iconStyle} md:hidden`} onClick={toggleMobileMenu} />
                                        <GoSearch className={`${iconStyle} hidden md:block`} />
                                    </div>
                                )
                                : <TfiClose className={iconStyle} onClick={toggleMobileMenu} />
                            }


                            <Link to="/" className="text-white text-2xl">
                                Logo
                            </Link>

                            <div className="rght flex items-center space-x-4 md:space-x-5">
                                <div className="wrap">
                                    <RxPerson className={`${iconStyle} hidden md:block`} />
                                    <GoSearch className={`${iconStyle} md:hidden`} onClick={toggleMobileSearch} />
                                </div>
                                <SlHandbag className={iconStyle} onClick={toggleIsCart} />
                            </div>

                        </div>
                    </div>
                    <DesktopMenu />
                </div>

                {/* Calling  */}
                <div className="mobileNav">
                    {showMobileMenu && <MobileMenu isShow='' />}
                    {showMobileSearch && <MobileSearch />}
                    {showCart && <Cart />}
                </div>

            </section>
        </>
    );
};

export default Nav;
