import { Link } from "react-router-dom"
import list from './list.json';

export const NavList = () => {
    return (

        <nav className=" md:w-[70%] md:mx-auto hidden md:flex ">
            <ul className=" block md:flex md:space-x-3 md:w-full md:justify-between">
                {list.map((category, index) => (
                    <li key={index}
                        className="py-2 font-medium md:flex group">

                        {/* labels */}

                        <Link href={category.link} className="md:text-white md:text-sm "> {category.label}</Link>


                        {/* {category.children && (
                            <ul className="absolute">
                                {category.children.map((subcategoy, subIndex) => (
                                    <div
                                        className="flex w-[100vw]"
                                        key={subIndex}>
                                        <li
                                            className="bg-white group-hover:block hidden absolute top-6 left-0">
                                            <Link to={subcategoy.link}>
                                                {subcategoy.children.map(t, i) => (
                                                <div></div>
                                                )}
                                            </Link>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        )} */}
                    </li>
                ))}
            </ul >
        </nav >
    )
}

// eslint-disable-next-line react/prop-types
const DesktopMenu = ({ isShow }) => {
    return (
        <>
            <div className={` ${isShow} section pt-2 px-5 hidden md:block`}>
                {NavList()}
            </div>
        </>
    )
}

export default DesktopMenu