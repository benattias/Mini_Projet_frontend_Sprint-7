import { Role } from "./role.model";

export class User{
    public user_id!:number;
    public username!:string ;
    public email!:String;
    public password !: string ;
    public enabled!: Boolean;
    public roles!:Role[];
    public confirmPassword!: string;
    public code!:string; 
    
}