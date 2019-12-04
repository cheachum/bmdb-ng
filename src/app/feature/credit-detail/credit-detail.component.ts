import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title: string = "Credit Edit";
  credit: Credit = new Credit();
  movies: Movie[] = [];
  actors: Actor[] = [];
  id: number = 0;

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {this.route.params.subscribe(parms => this.id=parms['id']);
  this.creditSvc.get(this.id).subscribe(jr => {
    this.credit = jr.data as Credit;
    console.log("Credit to edit: ", this.credit);
  });
  //populate list of movies 
  this.movieSvc.list().subscribe(jr => {
    this.movies = jr.data as Movie[];
    console.log("movies", this.movies);
  });

  //populate list of actors 
  this.actorSvc.list().subscribe(jr => {
    this.actors = jr.data as Actor[];
    console.log("actors", this.actors);
  });
  }

  delete() {
    this.creditSvc.delete(this.id).subscribe(jr =>{
      //fix here to jr 
      this.router.navigateByUrl("credits/list");
    });
  }

  compMovie(a:Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

  compActor(a:Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

}
