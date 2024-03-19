import { IoIosSearch, IoMdHome } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import './style.css'
import { IconContext } from "react-icons";


export const Header = () => {
    return (
        <div className="header">
            <div className="cotainer">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <IoIosSearch />

                    <input />
                </div>
                <div className="menu-icons" style={{fontSize: '26px'}}>
                    
                        <div><IoMdHome /></div>
                        <div><RiMessengerLine /></div>
                        <div><BsPlusSquare /></div>
                        <div><MdOutlineExplore /></div>
                        <div><FiHeart /></div>
                    

                </div>

            </div>
        </div>
    )
}