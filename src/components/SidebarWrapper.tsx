import { Link, useLocation } from "react-router-dom"
import { MatrixText } from "./MatrixText"


type SidebarLinkType = {
    text: string
    to: string
    sublinks?: SidebarLinkType[]
}

export const SidebarWrapper = ({ children } : { children: React.ReactNode}) => {

    const location = useLocation();

    const currentPage = location.pathname.substring(1)

    const links: SidebarLinkType[] = [
        {
            text: 'Plugins',
            to: 'plugins',
            sublinks: [
                {
                    text: 'Disperse',
                    to: 'plugins/disperse'
                }
            ]
        },
        {
            text: 'About',
            to: 'about'
        }
    ]
    
    return <div className="flex">
        <div className="h-full w-1/4 p-5">
            <MatrixText text="Sideria DSP" className="text-4xl" linkTo="/"/>
         
            <div className="mb-5"/>
            <SidebarLinks links={links} currentPage={currentPage}/>

        </div>
        <div className="h-full w-3/4 p-5 pt-10">
            {children}
        </div>
    </div>
}

const SidebarLinks = ({ links, currentPage } : {links: SidebarLinkType[], currentPage: string}) => {
    return <ul>
        {
            links.map(link => {
                return <SidebarLink key={link.to} link={link} currentPage={currentPage}/>
            })
        }
    </ul>
}

const SidebarLink = ({link, currentPage} : {link: SidebarLinkType, currentPage: string}) => {
    const selected = currentPage === link.to

    return <li key={link.to}>
        <MatrixText linkTo={link.to} text={link.text} className={`text-xl ${selected ? 'underline' : ''}`}/>
        <div className="mb-1"/>
        {link.sublinks && <div className="ms-4">
                <SidebarLinks links={link.sublinks} currentPage={currentPage}/>
            </div>}
    </li>
}