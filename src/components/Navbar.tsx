import { 
    FaGithubSquare, 
    FaLinkedin,
    FaHome,
    FaInfoCircle
} from 'react-icons/fa';
import { IoAppsSharp, IoMail } from 'react-icons/io5'
import MenuItem from './MenuItem';
import NavbarItem from './NavbarItem';

export default function Sidebar() {
    return (
        <div className="fixed left-0 bottom-0 w-full h-16 bg-dark-200 shadow-md flex gap-10 items-center justify-center z-10 sm:flex-col sm:w-16 sm:h-full">
            <NavbarItem Icon={FaHome} address='/' />
            {/* <NavbarItem Icon={IoAppsSharp} address='/projects' /> */}
            <MenuItem Icon={FaGithubSquare} address='https://github.com/devalmagno' />
            <MenuItem Icon={FaLinkedin} address='https://www.linkedin.com/in/devalmagno/' />
            {/* <NavbarItem Icon={IoMail} address='/contact' />
            <NavbarItem Icon={FaInfoCircle} address='/about-me' /> */}
        </div>
    );
}