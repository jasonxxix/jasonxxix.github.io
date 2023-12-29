import styled from "styled-components"
import { Separator } from "./ui/separator"
import { User } from "../App";
import { generateAlt } from "../utils/images";

function generateItem (text: string) {
    return (<>
        <Separator orientation="vertical" />
        <div>{text}</div>
    </>)
}

export default function Header(props: { Tabs: string[], User: User }) {
    const { Tabs, User } = props;
    return (
        <header className="border-slate-200 border-b p-3 flex justify-between">
            <div className="flex shrink space-x-2">
                <div>Portfolio: </div>
                <Avatar src={User.src} alt={generateAlt(User.name, "avatar")} className="max-h-6"/>
                <div>{User.name}</div>
                <Separator orientation="vertical" />
                <div>{User.position}</div>
            </div>
            <div className="flex h-5 items-center space-x-4 justify-end">
                {Tabs.map((text)=> (generateItem(text)))}
            </div>
        </header>
    )
}

const Avatar = styled.img`
    border-radius: 1rem;
    border-width: 2px;
    border-color: rgb(100 116 139);
`