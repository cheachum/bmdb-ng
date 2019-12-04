import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../feature/movie-list/movie-list.component';
import { ActorListComponent } from '../feature/actor-list/actor-list.component';
import { CreditListComponent } from '../feature/credit-list/credit-list.component';
import { MovieCreateComponent } from '../feature/movie-create/movie-create.component';
import { ActorCreateComponent } from '../feature/actor-create/actor-create.component';
import { MovieEditComponent } from '../feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from '../feature/movie-detail/movie-detail.component';
import { ActorEditComponent } from '../feature/actor-edit/actor-edit.component';
import { ActorDetailComponent } from '../feature/actor-detail/actor-detail.component';
import { CreditCreateComponent } from '../feature/credit-create/credit-create.component';
import { CreditEditComponent } from '../feature/credit-edit/credit-edit.component';
import { CreditDetailComponent } from '../feature/credit-detail/credit-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MovieListComponent},
  { path: 'movies/list', component: MovieListComponent},
  { path: 'movies/create', component: MovieCreateComponent},
  { path: 'movies/edit/:id', component: MovieEditComponent},
  { path: 'movies/detail/:id', component: MovieDetailComponent},
  { path: 'actors/list', component: ActorListComponent},
  { path: 'actors/create', component: ActorCreateComponent},
  { path: 'actors/edit/:id', component: ActorEditComponent},
  { path: 'actors/detail/:id', component: ActorDetailComponent},
  { path: 'credits/list', component: CreditListComponent},
  { path: 'credits/create', component: CreditCreateComponent},
  { path: 'credits/edit/:id', component: CreditEditComponent},  
  { path: 'credits/detail/:id', component: CreditDetailComponent},  
  {path: '**', component: MovieListComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
