import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent extends BaseComponent implements OnInit {
title: string = "Movie List";
movies:Movie[]=[];
jr:JsonResponse;

  constructor(private MovieSvc: MovieService) {
    super();
   }

  ngOnInit() {
    console.log("Calling movie service list...");
    this.MovieSvc.list().subscribe(jresp => {
      this.jr =jresp;
      this.movies =this.jr.data as Movie[];
      console.log(this.movies);
    });
  }

}
