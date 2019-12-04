import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit-list/credit-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { BaseComponent } from './feature/base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor-create/actor-create.component';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { ActorEditComponent } from './feature/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor-detail/actor-detail.component';
import { CreditCreateComponent } from './feature/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit-detail/credit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MenuComponent,
    BaseComponent,
    SortPipe,
    MovieCreateComponent,
    ActorCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorEditComponent,
    ActorDetailComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
