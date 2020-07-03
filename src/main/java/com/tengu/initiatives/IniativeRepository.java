package com.tengu.initiatives;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

@org.springframework.stereotype.Repository
public interface IniativeRepository extends PagingAndSortingRepository<Initiative, UUID> {
}

