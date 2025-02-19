import { VscSettings } from "react-icons/vsc";
import { IoMdOptions } from "react-icons/io";
import { FaFish } from "react-icons/fa6";
import { CgScreenMirror } from "react-icons/cg";

export const links = [
    { value: 'Access and permission' },
    { value: 'Language settings' },
    { value: 'Notification preference' },
    { value: 'Data and privacy ' },
    { value: 'Backup and recovery option' },
    { value: 'Help and support ' },
    { value: 'Log out ' },
]
export const accordions = [
    {
        el: <VscSettings />,
        title: 'Filter',
        descriprion: 'Select the notifications you prefer to receive and those you would rather avoid.'
    },
    {
        el: <CgScreenMirror />,
        title: 'Preference',
        descriprion: 'Choose your notification preferences based on the type of notification you prefer.'
    },
    {
        el: <IoMdOptions />,
        title: 'Lorem',
        descriprion: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  .'
    },
    {
        el: <FaFish />,
        title: 'Lorem',
        descriprion: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  .'
    },
] 