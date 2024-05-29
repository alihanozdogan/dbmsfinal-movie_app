package com.alihan.movieAPI.Services;

import com.alihan.movieAPI.Model.Movie;
import com.alihan.movieAPI.Repo.MovieRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class MovieService {

    @Autowired
    private final MovieRepo movieRepo;

    public MovieService(MovieRepo movieRepo) {

        this.movieRepo = movieRepo;
    }
    public ResponseEntity<List<Movie>>  getAllMovies() {
        List<Movie> movies = movieRepo.findAll();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
}
