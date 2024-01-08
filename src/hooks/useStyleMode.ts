import { useState } from "react";


export default function useStyleMode() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const StyleModes: string[] = ["Dark Mode", "Bright Mode"];

    const toggleDarkMode = (data: boolean) => {
        if(data){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        setIsDarkMode(data);
    }

    const textDarkMode = isDarkMode ? StyleModes[0]:StyleModes[1]

    return {
        isDarkMode,
        textDarkMode,
        toggleDarkMode,
    } as const;
}