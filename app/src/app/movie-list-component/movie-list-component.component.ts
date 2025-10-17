import { Component } from '@angular/core';
import { MoviesService } from '../movies.service'; // Adjust path as needed
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { MovieItemComponentComponent } from "../movie-item-component/movie-item-component.component";


interface Movie {
  title: string;
  year: number;
  description: string;
  
}

@Component({
  selector: 'app-movie-list-component',
  standalone: true,
  imports: [NgFor, CommonModule, MovieItemComponentComponent],
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})


export class MovieListComponent {
movies: any[] = [];
selectedMovie = '';
constructor(private movieService: MoviesService) {}
ngOnInit() {
  this.movies = this.movieService.getMovies();
}


onMovieSelected(movieTitle: string) {
  this.selectedMovie = movieTitle;
}}
