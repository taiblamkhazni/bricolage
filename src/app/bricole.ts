export interface Bricolage{
    id?:string;
    title:string;
    cat:{id:number,name:string};
    ville:{id:number,name:string};
    description:string;
    prix?:number;
    type:string;
    email:string;
    photo?:string;
    tele:number;
}