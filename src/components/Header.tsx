import styled from "styled-components"
import { Separator } from "./ui/separator"
import { Switch } from "./ui/switch";
import { User } from "../App";
import { generateAlt } from "../utils/images";
import useStyleMode from "../hooks/useStyleMode";

function generateItem (text: string, index: number) {
    return (<div key={index}>
        <Separator orientation="vertical" />
        <div>{text}</div>
    </div>)
}

export default function Header(props: { tabs: string[], user: User }) {
    const { tabs, user } = props;
    const { textDarkMode, toggleDarkMode} = useStyleMode();
    return (
        <header className="border-slate-200 border-b p-3 flex justify-between bg-white dark:bg-slate-600">
            <div className="flex shrink space-x-2">
                <div className="pl-2">Portfolio: </div>
                <Avatar src={user.src} alt={generateAlt(user.name, "avatar")} className="max-h-6"/>
                <div>{user.name}</div>
                <Separator orientation="vertical" />
                <div>{user.position}</div>
            </div>
            <div className="flex h-5 items-center space-x-4 justify-end">
                {tabs.map(generateItem)}
                <Separator orientation="vertical" />
                <Switch 
                    onCheckedChange={toggleDarkMode}
                />
                <div className="w-24">{textDarkMode}</div>
            </div>
        </header>
    )
}

const Avatar = styled.img`
    border-radius: 1rem;
    border-width: 2px;
    border-color: rgb(100 116 139);
`