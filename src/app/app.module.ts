import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { FormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegistrationComponent } from './registration/registration.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListeuserComponent } from './liste-user/liste-user.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { VerificationComponent } from './verification/verification.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParEquipeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeEquipesComponent,
    UpdateEquipeComponent,
    LoginComponent,
    ForbiddenComponent,
    HomeComponent,
    RegistrationComponent,
    AddUserComponent,
    AddRoleComponent,
    ListeuserComponent,
    ListeRoleComponent,
    UpdateUserComponent,
    UpdateroleComponent,
    VerificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //Ng2SearchPipeModule
    
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
