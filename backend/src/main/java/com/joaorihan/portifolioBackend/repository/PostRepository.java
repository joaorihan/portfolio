package com.joaorihan.portifolioBackend.repository;

import com.joaorihan.portifolioBackend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}