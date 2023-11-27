import { Equipe } from "./equipe.model";
import { Image } from "./image.model";

export class Joueur {
    idJoueur! : number ;
    nomJoueur? : string;
    prenomJoueur? : string;
     dateNaissance? : Date ;
     equipe! : Equipe;
     image! : Image;
    imageStr!:string;
    images!: Image[];


    }