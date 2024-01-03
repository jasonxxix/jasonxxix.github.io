import { Skeleton } from "./ui/skeleton";
import { useState } from "react";

export default function Image({ ...props}) {
    const [ isLoaded, setIsLoaded ]  = useState(false);
    return (<>
        <img style={isLoaded?{}:{'display':'none'}} onLoad={()=>setIsLoaded(true)} {...props}/>
        {!isLoaded&&<Skeleton {...props}/>}
    </>);
}