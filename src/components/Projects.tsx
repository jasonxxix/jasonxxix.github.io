import Logo from "./Logo"
import { LogoData, project } from "./Projects.type"

const logoMap : LogoData = {
    Android: "./images/logo-android.svg",
    AWS: "./images/logo-aws.svg",
    Cpp: "./images/logo-cpp.svg",
    Gatsby: "./images/logo-gatsby.svg",
    Github: "./images/logo-github.svg",
    Java: "./images/logo-java.svg",
    Mongo: "./images/logo-mongo.svg",
    MsSql: "./images/logo-mssql.png",
    MySql: "./images/logo-mysql.svg",
    NextJs: "./images/logo-nextjs.svg",
    NodeJs: "./images/logo-nodejs.svg",
    Python: "./images/logo-python.svg",
    R: "./images/logo-r.svg",
    ReactJs: "./images/logo-reactjs.svg",
    VueJs: "./images/logo-vuejs.svg",
}

const projectsData: project[] = [
    {
        name: "Groupee",
        techStack: [
            "Android", "Java", "MySql", "Github"
        ]
    },
    {
        name: "GMA Now",
        techStack: [
            "Android", "Java", "Cpp", "AWS", "NodeJs", "ReactJs", "Python", "MySql", "Mongo","Github"
        ]
    },
    {
        name: "Election 2021",
        techStack: [
            "AWS", "R", "Python"
        ]
    },
    {
        name: "Ayala Cinema System",
        techStack: [
            "NextJs", "Gatsby", "VueJs", "ReactJs", "NodeJs", "MsSql", "Github"
        ]
    }
]

export default function Projects () {
    return <div className="py-4 px-6 max-w-prose m-auto">
    <h1 className="text-2xl  border-b-2 border-emerald-400">Projects</h1>
    {projectsData.map(({ name, techStack }, index)=>
        <div key={`${index}_${name}`}>
            <h3>{name}</h3>
            <div className="grid grid-flow-col auto-cols-max overflow-x-auto m-auto">
                {techStack.map((tech, index)=><Logo key={`${index}_${tech}`} src={logoMap[tech]} text={tech} />)}
            </div>
        </div>
    )}
</div>
}