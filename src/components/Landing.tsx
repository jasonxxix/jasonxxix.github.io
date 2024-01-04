import Image from "./Image"
import '../Landing.css'

export default function Landing() {
    return (<div className="py-4 px-6 max-w-prose m-auto h-[400px] relative">
        <Image src="./images/drinking_coffee.jpg" className="w-[150px] h-[200px] first-img absolute" alt="drinking_coffee" />
        <Image src="./images/looking_towers.jpg" className="w-[150px] h-[200px] second-img absolute" alt="looking_towers" />
        <Image src="./images/washing.jpg" className="w-[150px] h-[200px] third-img absolute" alt="washing" />
    </div>)
}
