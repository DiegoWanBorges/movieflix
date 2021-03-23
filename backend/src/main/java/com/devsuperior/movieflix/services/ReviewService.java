package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
@Service
public class ReviewService {
	@Autowired
	private ReviewRepository repository;
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private UserRepository userRepository;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		String nome =SecurityContextHolder.getContext().getAuthentication().getName();
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		entity.setUser(userRepository.findByEmail(nome));
		return new ReviewDTO(repository.save(entity));
	}
}
