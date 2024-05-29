import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.css']
})
export class MovieAPIComponent implements OnInit {

  public movies: movie[] = [];
  public filteredMovies: movie[] = [];
  paginatedMovies: movie[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(private movieService: MovieService, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.movieService.getMovies().subscribe(
      (response: movie[]) => {
        this.movies = response;
        this.filteredMovies = response;
        this.paginateMovies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  getGenres(movie): string {
    return movie.genres.map(genre => genre.name).join(', ');
  }

  public searchMovies(key: string): void {
    console.log(key);
    this.filteredMovies = this.movies.filter(movie => 
      movie.title.toLowerCase().includes(key.toLowerCase())
    );
    this.currentPage = 1;
    this.paginateMovies();
  }

  paginateMovies(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedMovies = this.filteredMovies.slice(start, end);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.paginateMovies();
  }

  totalPages(): number {
    return Math.ceil(this.filteredMovies.length / this.itemsPerPage);
  }
}
