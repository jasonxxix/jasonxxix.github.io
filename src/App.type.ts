
export interface User {
    name: string;
    position: string;
    src: string;
    linkdn: string;
    github: string;
} 
  
export interface Tab {
    text: string;
    sectionId: string;
    Component: JSX.Element;
}