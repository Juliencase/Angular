import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]> {
      return this.http.get<Movie[]>('http://localhost:8000/movies')
        .pipe(map(
            data => {
                data.map((movie: Movie) => {
                    movie.date = new Date(movie.date);
                });
            return data;
        }));
  }
}
