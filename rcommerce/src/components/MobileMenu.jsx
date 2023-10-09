import { Link } from "react-router-dom";
import list from './list.json';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from "react";
import { TfiClose } from 'react-icons/tfi';

export const NavList = () => {
    const [showSubs, setShowSubs] = useState(list.map(() => false)); // Initialize all subcategories as hidden

    const toggleSubs = (index) => {
        const updatedShowSubs = [...showSubs];
        updatedShowSubs[index] = !updatedShowSubs[index];
        setShowSubs(updatedShowSubs);
    };

    return (
        <nav className="md:block md:w-[70%] md:mx-auto">
            <ul className="block md:flex md:space-x-3 md:w-full md:justify-between">
                {list.map((category, index) => (
                    <li key={index} className="py-3 font-medium md:flex">
                        {/* labels */}
                        <div className="tp flex items-center justify-between">
                            <Link href={category.link} className="md:text-white md:text-sm "> {category.label}</Link>
                            {!showSubs[index] ? (
                                <IoIosArrowDown className='md:hidden' onClick={() => toggleSubs(index)} />
                            ) : (
                                <TfiClose className='md:hidden' onClick={() => toggleSubs(index)} />
                            )}
                        </div>
                        {showSubs[index] && category.children && (
                            <ul className="block relative">
                                {category.children.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="">
                                        <Link to={subcategory.link}>{subcategory.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// eslint-disable-next-line react/prop-types
const MobileMenu = () => {
    return (
        <>
            <div className='section pt-2 px-5 md:block'>
                {NavList()}
            </div>
        </>
    );
};

export default MobileMenu;
