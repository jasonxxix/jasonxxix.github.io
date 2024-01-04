import Image from "./Image"

export default function AboutMe() {
    return <div className="py-4 px-6 max-w-prose m-auto">
        <h1 className="text-2xl  border-b-2 border-emerald-400">About Me</h1>
        <div className="flex flex-col md:flex-row">
            <div className="relative hover:animate-pulse grow shrink-0">
                <Image src="./images/drinking_coffee.jpg" className="w-[150px] h-[200px] mt-4 mx-auto" alt="drinking_coffee" />
                <Image src='./images/avatar.jpg' className="w-[50px] h-[50px] rounded-full absolute animation-icn-up-down md:animate-spin top-12 md:top-52" alt="coffee_icn"/>
                <Image src='./images/avatar.jpg' className="w-[50px] h-[50px] rounded-full absolute animation-icn-left-right md:motion-safe:animate-spin top-48 md:top-96 left-12" alt="coffee_icn"/>
                <Image src='./images/avatar.jpg' className="w-[50px] h-[50px] rounded-full absolute animation-icn-down-up md:animate-bounce top-36 md:top-80 right-4" alt="coffee_icn"/>
                <Image src='./images/avatar.jpg' className="w-[50px] h-[50px] rounded-full absolute animation-icn-up-down md:animate-bounce top-24 md:top-72 right-24" alt="coffee_icn"/>
            </div>
            <p className="text-lg px-2 shrink"><br />Hi Jason Reyes here,<br /><br />
            I'm currently residing in Quezon City, Philippines, and employed as a Research and Development Specialist at GMA New Media Inc. This has been my home for 6 years already.<br /><br />
            Apart from programming and learning new technologies, I spend my time traveling, exploring foods, gaming, and investing.<br /><br />
            I believe that each one of us needs to have a natural curiosity as this triggers a hunger for people to learn.</p>
        </div>
    </div>
}