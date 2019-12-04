import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  url: string = "http://localhost:8080/actors/";


  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse>{
    return this.http.get(this.url) as Observable<JsonResponse>;
}
save(actor: Actor): Observable<JsonResponse>{
  return this.http.post(this.url, actor) as Observable<JsonResponse>;

}

get(id: number): Observable<JsonResponse>{
  return this.http.get(this.url+id) as Observable<JsonResponse>;
}

delete(id: number): Observable<JsonResponse>{
return this.http.delete(this.url+id) as Observable<JsonResponse>;

}


}