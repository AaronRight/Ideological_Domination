package com.tengu.ideas;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

@org.springframework.stereotype.Repository
public interface IdeaRepository extends PagingAndSortingRepository<Idea, UUID> {
}

