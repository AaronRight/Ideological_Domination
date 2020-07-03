package com.tengu.ideas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.Optional;
import java.util.UUID;

@org.springframework.stereotype.Service
public class IdeaServiceImpl implements IdeaService {
    private IdeaRepository repository;
    private IdeaRepositoryRate repositoryRate;

    @Autowired
    private SimpMessagingTemplate brokerMessagingTemplate;

    public IdeaServiceImpl(IdeaRepository repository, IdeaRepositoryRate repositoryRate){
        this.repository = repository;
        this.repositoryRate = repositoryRate;
    }

    @Override
    public Iterable<Idea> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Idea> findById(UUID id) {
        return this.repository.findById(id);
    }
    @Override
    public Idea save(Idea idea) {
        Idea saved = this.repository.save(idea);
        brokerMessagingTemplate.convertAndSend("/message", idea);
        return saved;
    }

    @Override
    public Iterable<IdeaRate> findAllRated() {
        return this.repositoryRate.findAll();
    }

    @Override
    public IdeaRate saveRated(IdeaRate ideaRate) {
        IdeaRate saved = this.repositoryRate.save(ideaRate);
        brokerMessagingTemplate.convertAndSend("/message", ideaRate);
        return saved;
    }
}
