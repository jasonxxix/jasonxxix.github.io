import styled from "styled-components"
import { Separator } from "./ui/separator"
import { Switch } from "./ui/switch";
import { User } from "../App";
import { generateAlt } from "../utils/images";

function generateItem (text: string) {
    return (<>
        <Separator orientation="vertical" />
        <div>{text}</div>
    </>)
}

export default function Header(props: { tabs: string[], user: User, styleMode: string }) {
    const { tabs, user, styleMode } = props;
    return (
        <header className="border-slate-200 border-b p-3 flex justify-between">
            <div className="flex shrink space-x-2">
                <div>Portfolio: </div>
                <Avatar src={user.src} alt={generateAlt(user.name, "avatar")} className="max-h-6"/>
                <div>{user.name}</div>
                <Separator orientation="vertical" />
                <div>{user.position}</div>
            </div>
            <div className="flex h-5 items-center space-x-4 justify-end">
                {tabs.map((text)=> (generateItem(text)))}
                <Separator orientation="vertical" />
                <Switch />
                <div>{styleMode}</div>
            </div>
        </header>
    )
}

const Avatar = styled.img`
    border-radius: 1rem;
    border-width: 2px;
    border-color: rgb(100 116 139);
`