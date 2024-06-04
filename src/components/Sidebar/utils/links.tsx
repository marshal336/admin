import { MdOutlineDashboard, MdNewspaper } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { FaRegCalendarAlt, FaUsers,FaRegUser } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { SiSimpleanalytics } from "react-icons/si";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";


export const Links = [
    { icon: <MdOutlineDashboard />, title: 'Dashboard', link: 'dashboard' },
    { icon: <LuUserSquare2 />, title: 'Patients management', link: '' },
    { icon: <FaRegCalendarAlt />, title: 'Appointments', link: '' },
    { icon: <VscSettings />, title: 'Transactions', link: '' },
    { icon: <FaUsers />, title: 'Employers', link: '' },
    { icon: <MdNewspaper />, title: 'Health records', link: '' },
    { icon: <SiSimpleanalytics />, title: 'Analytics', link: 'analytics' },
    { icon: <IoHelpCircleOutline />, title: 'Help & Support', link: '' },
    { icon: <FaRegUser />, title: 'Profile', link: '' },
    { icon: <IoSettingsOutline />, title: 'Settings', link: 'settings' },
    { icon: <CiLogout />, title: 'Log Out', },
]