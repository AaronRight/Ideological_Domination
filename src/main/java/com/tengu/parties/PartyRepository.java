package com.tengu.parties;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

@org.springframework.stereotype.Repository
public interface PartyRepository extends PagingAndSortingRepository<Party, UUID> {
}

