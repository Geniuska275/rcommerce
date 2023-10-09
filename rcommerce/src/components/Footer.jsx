import { Link } from 'react-router-dom'
import access_bank from "../assets/accessbank_color.svg"
import visa from "../assets/visa.svg"
import masterCard from "../assets/mastercard-text.svg"
import paystack from "../assets/paystack_color.svg"
import zenith from "../assets/zenithbank_color.svg"
import firstBank from "../assets/firstbankplc_color.svg"
import gtBank from "../assets/guarantytrustbank_color.svg"
import airtel from "../assets/airtel_color.svg"
import { CiInstagram } from 'react-icons/ci'
import { BiLogoTiktok } from 'react-icons/bi'
import { LiaSnapchat } from 'react-icons/lia'

import { AiFillYoutube } from 'react-icons/ai'
import Currency from './Currency'


const payImageStyle = 'inline-flex w-[60px] h-fit mt-5'

const payImages = {
    'Link1': <img src={access_bank} alt="access_bank" className={payImageStyle} />,
    'Link2': <img src={visa} alt="visa" className={payImageStyle} />,
    'Link3': <img src={masterCard} alt="masterCard" className={payImageStyle} />,
    'Link4': <img src={access_bank} alt="access_bank" className={payImageStyle} />,
    'Link5': <img src={paystack} alt="paystack" className={payImageStyle} />,
    'Link6': <img src={firstBank} alt="firstBank" className={payImageStyle} />,
    'Link7': <img src={zenith} alt="zenith" className={payImageStyle} />,
    'Link8': <img src={gtBank} alt="gtBank" className={payImageStyle} />,
    'Link9': <img src={airtel} alt="airtel" className={payImageStyle} />,
}


const Footer = () => {
    return (
        <>
            <nav>
                <p className='font-bold'>Quick Links</p>
                <ul>
                    <li> <Link to='' className=''>Home</Link></li>
                    <li> <Link to='' className=''>Shop</Link></li>
                    <li> <Link to='' className=''>Blog</Link></li>
                </ul>


                <p className='font-bold'>About Us</p>
                <ul>
                    <li> <Link to='' className=''>About</Link></li>
                    <li> <Link to='' className=''>Contact</Link></li>
                </ul>
            </nav>

            <div className='py-5'>
                <p className=' text-center  mb-5 font-bold'> Supported payment methods </p>

                <div className="wrap flex mx-auto flex-wrap justify-center px-5">
                    {Object.entries(payImages).map(([key, image]) => (
                        <>
                            <div key={key}>
                                {image}
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="border-b socialHandles flex space-x-3 justify-center py-10 my-5 ">
                <Link to='/'><CiInstagram /></Link>
                <Link to='/'><AiFillYoutube /></Link>
                <Link to='/'><BiLogoTiktok /></Link>
                <Link to='/'><LiaSnapchat /></Link>
            </div>

            <Currency />
        </>
    )
}

export default Footer