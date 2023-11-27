import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { joueurGuard } from './joueur.guard';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component'; 
import { ListeuserComponent } from './liste-user/liste-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
{path: "joueurs", component : JoueursComponent},
//{path: "add-joueur", component : AddJoueurComponent},
{ path: "", redirectTo: "joueurs", pathMatch: "full" },
{path: "updateJoueur/:id", component: UpdateJoueurComponent},
{path: "rechercheParEquipe", component : RechercheParEquipeComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeEquipes", component : ListeEquipesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path : "add-joueur", component : AddJoueurComponent, canActivate:[joueurGuard]},
{path :"home" , component : HomeComponent},
 {path: "registration", component: RegistrationComponent },
 {path:"liste_user",component:ListeuserComponent},
 {path:"add-user",component:AddUserComponent},
 {path:"updateuser/:id",component:UpdateUserComponent},
 {path:"liste-role",component:ListeRoleComponent},
 {path:"add-role",component:AddRoleComponent},
 {path:"updaterole/:id",component:UpdateroleComponent},
{path:"verification",component:VerificationComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
