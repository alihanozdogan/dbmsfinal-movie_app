package com.alihan.movieAPI.Repo;

import com.alihan.movieAPI.Model.Actors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActorRepo extends JpaRepository<Actors,Long> {
}
