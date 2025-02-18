import { MdOutlineDashboard, MdNewspaper } from "react-icons/md";
import { FaRegCalendarAlt, FaUsers, FaRegUser } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { SiSimpleanalytics } from "react-icons/si";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { LucideUserSquare2 } from "lucide-react";


export const Links = [
    { icon: <MdOutlineDashboard />, title: 'Dashboard', link: 'dashboard' },
    { icon: <LucideUserSquare2 />, title: 'Patients management', link: 'patients-management' },
    { icon: <FaRegCalendarAlt />, title: 'Appointments', link: 'appointments' },
    { icon: <VscSettings />, title: 'Transactions', link: 'transactions' },
    { icon: <FaUsers />, title: 'Employers', link: 'employers' },
    { icon: <MdNewspaper />, title: 'Health records', link: 'health-records' },
    { icon: <SiSimpleanalytics />, title: 'Analytics', link: 'analytics' },
    { icon: <IoHelpCircleOutline />, title: 'Help & Support', link: 'help-&-support' },
    { icon: <FaRegUser />, title: 'Profile', link: 'profile' },
    { icon: <IoSettingsOutline />, title: 'Settings', link: 'settings' },
    { icon: <CiLogout />, title: 'Log Out', },
]