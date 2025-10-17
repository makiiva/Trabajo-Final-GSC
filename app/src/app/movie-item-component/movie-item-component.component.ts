import { Component, EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';


interface Movie {
  title: string;
  year: number;
  description: string;
}


@Component({
  selector: 'app-movie-item-component',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './movie-item-component.component.html',
  styleUrl: './movie-item-component.component.css'
})
export class MovieItemComponentComponent {
  @Input() movie!: Movie;
  @Output() onMovieSelected = new EventEmitter<string>;

  selectMovie(title: string) {
    this.onMovieSelected.emit(this.movie.title);
  }
}

