export interface Project {
    id: number,
    key:string,
    titleFront?: string,
    descriptionFront?: string,
    titleBack?: string,
    descriptionBack?: string,
    languagesUsed: string[],
    img: string,
    link: string,
    isFlipped: boolean
}