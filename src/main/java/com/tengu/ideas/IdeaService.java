package com.tengu.ideas;

import java.util.Optional;
import java.util.UUID;

public interface IdeaService {
        Iterable<Idea> findAll();
        Iterable<IdeaRate> findAllRated();
        Optional<Idea> findById(UUID id);
        Idea save(Idea idea);
        IdeaRate saveRated(IdeaRate ideaRate);
}
