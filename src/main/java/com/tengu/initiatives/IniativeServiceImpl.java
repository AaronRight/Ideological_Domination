package com.tengu.initiatives;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.Optional;
import java.util.UUID;

@org.springframework.stereotype.Service
public class IniativeServiceImpl implements IniativeService {
    private IniativeRepository iniativeRepository;
    private InitiativeRepositoryRate repositoryRate;

    @Autowired
    private SimpMessagingTemplate brokerMessagingTemplate;

    public IniativeServiceImpl(IniativeRepository iniativeRepository, InitiativeRepositoryRate repositoryRate){
        this.iniativeRepository = iniativeRepository;
        this.repositoryRate = repositoryRate;
    }

    @Override
    public Iterable<Initiative> findAll() {
        return this.iniativeRepository.findAll();
    }

    @Override
    public Optional<Initiative> findById(UUID id) {
        return this.iniativeRepository.findById(id);
    }

    @Override
    public Initiative save(Initiative idea) {
        Initiative saved = this.iniativeRepository.save(idea);
        brokerMessagingTemplate.convertAndSend("/message", idea);
        return saved;
    }

    @Override
    public Iterable<InitiativeRate> findAllRated() {
        return this.repositoryRate.findAll();
    }

    @Override
    public InitiativeRate saveRated(InitiativeRate initiativeRate) {
        InitiativeRate saved = this.repositoryRate.save(initiativeRate);
        brokerMessagingTemplate.convertAndSend("/message", initiativeRate);
        return saved;
    }
}
