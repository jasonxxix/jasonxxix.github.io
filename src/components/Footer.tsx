import { Linkedin, Github } from 'react-bootstrap-icons';
import { User } from '../App.type';

export default function Footer ({ user }:{ user: User }) {
    return <div className="bg-amber-50 dark:bg-lime-950 h-[150px] flex justify-center content-center items-center">
            <div className='text-lg'>Learn more About Me: </div>
            <a className='m-3' href={user.linkdn}><Linkedin size={40}/></a>
            <a className='m-3' href={user.github}><Github size={40}/></a>
    </div>
}