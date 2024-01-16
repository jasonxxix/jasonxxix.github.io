import Image from "./Image"
import '../Landing.css'
import styled from "styled-components"

export default function Landing() {
    return (<LandingDiv className="h-[400px]" >
        <div className="py-4 px-6 max-w-prose m-auto h-[400px] relative">
            <Image src="./images/looking_towers.jpg" className="w-[150px] h-[200px] second-img absolute" alt="looking_towers" />
            <Image src="./images/washing.jpg" className="w-[150px] h-[200px] third-img absolute" alt="washing" />
        </div>
    </LandingDiv>)
}

export function EmptyLanding () {
    return <div className="h-[400px]"></div>
}

const LandingDiv = styled.div`
    background-image: url("./images/landing_bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`