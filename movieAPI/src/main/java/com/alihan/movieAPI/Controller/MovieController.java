package com.alihan.movieAPI.Controller;

import com.alihan.movieAPI.Model.Movie;
import com.alihan.movieAPI.Services.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/allMovies")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return movieService.getAllMovies();
    }
}
