import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    movies: Movie[] = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
      this.moviesService
      .findAll()
        .subscribe(
            data => this.movies = data
        )
  }

}
