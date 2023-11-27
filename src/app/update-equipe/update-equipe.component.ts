
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent {
  @Input()
  equipe! : Equipe;
 
  @Output()
  equipeUpdated = new EventEmitter<Equipe>();
  @Input()
  ajout!:boolean;
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateEq ",this.equipe);
    }
    saveEquipe(){
      this.equipeUpdated.emit(this.equipe);
      }
      
}
