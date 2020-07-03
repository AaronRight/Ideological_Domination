package com.tengu.initiatives;

import com.tengu.ideas.IdeaRate;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

@org.springframework.stereotype.Repository
public interface InitiativeRepositoryRate extends PagingAndSortingRepository<InitiativeRate, UUID> {
}
