import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  equipes! : Equipe[];
  updatedEqId! : number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
  private joueurService: JoueurService) { }
  /*ngOnInit(): void {
    this.joueurService.listeEquipes().
    subscribe(cats => {this.equipes = cats._embedded.equipes;
    console.log(cats);
    });
    this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentJoueur = prod;
    this.updatedEqId = prod.equipe.idEq;
    this.joueurService
    .loadImage(this.currentJoueur.image.idImage)
    .subscribe((img: Image) => {
    this.myImage = 'data:' + img.type + ';base64,' + img.image;
    });
    } ) ;
    }*/
    ngOnInit(): void {
      this.joueurService.listeEquipes().
      subscribe(eqs => {this.equipes = eqs._embedded.equipes;
      });
      this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id'])
      .subscribe( j =>{ this.currentJoueur = j;
      this.updatedEqId = j.equipe.idEq;
      } ) ;
      }
     
  /*updateJoueur()
{ //console.log(this.currentProduit);
  this.currentJoueur.equipe = this.equipes.find(cat => cat.idEq == this.updatedEqId)!;
  this.joueurService.updateJoueur(this.currentJoueur).subscribe(j => {
    this.router.navigate(['joueurs']); }
    );
    
}*/
/*updateJoueur() {
  this.currentJoueur.equipe = this.equipes.find(eq => eq.idEq ==
  this.updatedEqId)!;
  //tester si l'image du produit a été modifiée
  if (this.isImageUpdated)
  {
  this.joueurService
  .uploadImage(this.uploadedImage, this.uploadedImage.name)
  .subscribe((img: Image) => {
  this.currentJoueur.image = img;
  this.joueurService
  .updateJoueur(this.currentJoueur)
  .subscribe((j) => {
  this.router.navigate(['joueurs']);
  });
  });
  }
  else{
  this.joueurService
  .updateJoueur(this.currentJoueur)
  .subscribe((j) => {
  this.router.navigate(['joueurs']);
  });
  }
  }*/
  updateJoueur() {
    this.currentJoueur.equipe = this.equipes.find(eq => eq.idEq ==
    this.updatedEqId)!;
    this.joueurService
    .updateJoueur(this.currentJoueur)
    .subscribe((j) => {
    this.router.navigate(['joueurs']);
    });
    }

onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
  }
  onAddImageJoueur() {
    this.joueurService
    .uploadImageJoueur(this.uploadedImage,
    this.uploadedImage.name,this.currentJoueur.idJoueur)
    .subscribe( (img : Image) => {
    this.currentJoueur.images.push(img);
    });
    }
  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.joueurService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentJoueur.images
    const index = this.currentJoueur.images.indexOf(img, 0);
    if (index > -1) {
    this.currentJoueur.images.splice(index, 1);
    }
    });
    }
  }