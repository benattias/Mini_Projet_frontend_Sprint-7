import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from "../model/equipe.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EquipeWrapper } from '../model/EquipeWrapped.model';
import { AuthService } from './auth.service';
import { Image } from '../model/image.model';

const httpOptions = {
 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class JoueurService {
apiURL: string = 'http://localhost:8080/joueurs/api';
apiURLEq: string = 'http://localhost:8080/joueurs/eq';


joueur! : Joueur;
/*equipes : Equipe[];*/

constructor(private http : HttpClient,private authService : AuthService) {
/*
this.joueurs = [
  {idJoueur : 1, nomJoueur : "ahmed", prenomJoueur : "ben salah", dateNaissance : new Date("01/14/209"),equipe : {idEq : 1, nomEq : "A"}},
    {idJoueur : 2, nomJoueur : "aziz", prenomJoueur : "amara", dateNaissance : new Date("12/17/2010"),equipe : {idEq : 2, nomEq : "B"}},
    {idJoueur : 3, nomJoueur :"amine", prenomJoueur : "ben foulen", dateNaissance : new Date("02/20/2008"),equipe : {idEq : 1, nomEq : "A"}}
]
this.equipes = [ {idEq : 1, nomEq : "A"},
{idEq : 2, nomEq : "B"}];*/
}
listeJoueur(): Observable<Joueur[]>{
  return this.http.get<Joueur[]>(this.apiURL+"/all");

  }
  
ajouterJoueur( prod: Joueur):Observable<Joueur>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  
  return this.http.post<Joueur>(this.apiURL+"/addjoueur", prod, {headers:httpHeaders});
}
supprimerJoueur(idJoueur: number) {
  const url = `${this.apiURL}/deljoueur/${idJoueur}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.delete(url, {headers:httpHeaders});
    }

 
  
  consulterJoueur(id:number):  Observable<Joueur>{
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Joueur>(url,{headers:httpHeaders});
    }
    /*
    trierJoueurs(){
      this.joueurs = this.joueurs.sort((n1,n2) => {
        if (n1.idJoueur! > n2.idJoueur!) {
            return 1;
        }
       if (n1.idJoueur! < n2.idJoueur!) {
            return -1;
        }
      return 0;
    });
    }
*/
    updateJoueur(j:Joueur)
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.put<Joueur>(this.apiURL+"/updatejoueur", j, {headers:httpHeaders});

  } 
  
  listeEquipes():Observable<EquipeWrapper>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<EquipeWrapper>(this.apiURLEq,{headers:httpHeaders}
);

    }
  /*consulterEquipe(id:number): Equipe{
      return this.equipes.find(eq => eq.idEq == id)!;
      }*/
      rechercherParEquipe(idEq: number):Observable< Joueur[]> {
        const url = `${this.apiURL}/jsEq/${idEq}`;
return this.http.get<Joueur[]>(url);

        }
  rechercherParNom(nom: string):Observable< Joueur[]> {
        const url = `${this.apiURL}/prodsByName/${nom}`;
        return this.http.get<Joueur[]>(url);
        
          }   
  ajouterEquipe( cat: Equipe):Observable<Equipe>{
          return this.http.post<Equipe>(this.apiURLEq, cat, httpOptions);
            }   
  uploadImage(file: File, filename: string): Observable<Image>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/upload'}`;
              return this.http.post<Image>(url, imageFormData);
              }
  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }
  uploadImageJoueur(file: File, filename: string, idJoueur: number): Observable<any> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uplaodImageJoueur'}/${idJoueur}`;
    return this.http.post(url, imageFormData);
  }
  supprimerImage(id: number) {
    const url = `${this.apiURL}/image/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }
  uploadImageFS(file: File, filename: string, idJoueur : number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uploadFS'}/${idJoueur}`;
    return this.http.post(url, imageFormData);
    }

}
