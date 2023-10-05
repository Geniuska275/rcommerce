
import { LiaInstagram, LiaSnapchatGhost } from 'react-icons/lia';
import { AiFillYoutube } from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const iconStyle = 'text-xl hover:scale-110 transition-all';

const cSIcons = {
    'https:instgram.com': <LiaInstagram className={iconStyle} />,
    'youtube': <AiFillYoutube className={iconStyle} />,
    'tiktok': <BiLogoTiktok className={iconStyle} />,
    'snapchat': <LiaSnapchatGhost className={iconStyle} />,
}


// eslint-disable-next-line react/prop-types
const ConnetSocial = ({ style }) => {
    return (
        <nav className={style}>
            <ul className='flex space-x-4'>
                {
                    Object.entries(cSIcons).map(([key, value], i) => (
                        <li key={i}>
                            <Link to={key} >
                                {value}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </nav >
    )
}

export default ConnetSocial