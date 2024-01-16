import { Separator } from "./ui/separator"
import { Switch } from "./ui/switch";
import { User, Tab } from "../App.type";
import { generateAlt } from "../utils/images";
import useStyleMode from "../hooks/useStyleMode";
import Image from "./Image";
import "../Nav.css"

function generateItem (tab: Tab, index: number) {
    return (<div key={index}>
        <li><a href={`#${tab.sectionId}`} >{tab.text}</a></li>
    </div>)
}

const burgerShow = () => {
    const burgerOpen = document.getElementById("burger-open");
    burgerOpen?.classList.replace("block", "hidden");
    const burgerClose = document.getElementById("burger-close");
    burgerClose?.classList.replace("hidden", "block");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu?.classList.replace("invisible", "visible");
    mobileMenu?.classList.add("opened");
}

const burgerHide = () => {
    const burgerOpen = document.getElementById("burger-open");
    burgerOpen?.classList.replace("hidden", "block");
    const burgerClose = document.getElementById("burger-close");
    burgerClose?.classList.replace("block", "hidden");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu?.classList.replace("visible", "invisible");
    mobileMenu?.classList.remove("opened");
}

export default function Navbar(props: { tabs: Tab[], user: User }) {
    const { tabs, user } = props;
    const { isDarkMode, textDarkMode, toggleDarkMode} = useStyleMode();
    return (
        <nav className="border-slate-200 border-b p-3 flex justify-between bg-white dark:bg-slate-600">
            <div className="flex flex-col md:flex-row shrink md:space-x-2 truncate">
                <div className="inline-flex">
                    <Image src={user.src} alt={generateAlt(user.name, "avatar")}
                        className="rounded border-2 h-6 w-6 mr-1 border-purple-900 dark:border-amber-400"/>{user.name}</div>
                    <Separator className="hidden md:block" orientation="vertical" />
                <div>{user.position}</div>
            </div>
            <ul className="flex flex-col md:hidden">
                <div className="flex justify-end">
                    <svg id="burger-open" className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                        onClick={burgerShow}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg id="burger-close" className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                        onClick={burgerHide}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <Switch 
                        onCheckedChange={toggleDarkMode}
                        checked={isDarkMode}
                    />
                </div>

            </ul>
            <div className="navDialog invisible md:hidden absolute top-16 max-w-prose bg-inherit" id="mobile-menu">
                <ul className="space-y-1 px-2 pb-3 pt-2">
                    {tabs.map(generateItem)}
                </ul>
            </div>
          
            <ul className="hidden md:flex h-5 items-center space-x-4 justify-end">
                {tabs.map(generateItem)}
                <Separator orientation="vertical" />
                <Switch 
                    onCheckedChange={toggleDarkMode}
                    checked={isDarkMode}
                />
                <div className="w-24">{textDarkMode}</div>
            </ul>
        </nav>
    )
}
