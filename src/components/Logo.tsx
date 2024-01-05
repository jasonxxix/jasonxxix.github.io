import { generateAlt } from './../utils/images'

export default function Logo (props: { src: string, text: string }) {
    return <div className="w-14 p-1 select-none">
        <img src={props.src} className="h-10 w-10 m-auto p-1" alt={generateAlt(props.text, 'logo')} draggable="false"/>
        <div className="text-sm text-center">{props.text}</div>
    </div>
}