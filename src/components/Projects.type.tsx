
export interface LogoData {
    Android: string;
    AWS: string;
    Cpp: string;
    Gatsby: string;
    Github: string;
    Java: string;
    Mongo: string;
    MsSql: string;
    MySql: string;
    NextJs: string;
    NodeJs: string;
    Python: string;
    R: string;
    ReactJs: string;
    VueJs: string;
}

export type TechStack = keyof LogoData;

export interface project {
    name: string,
    techStack: TechStack[],
}