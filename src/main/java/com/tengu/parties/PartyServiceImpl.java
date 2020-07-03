package com.tengu.parties;

import com.tengu.users.User;
import com.tengu.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.Optional;
import java.util.UUID;

@org.springframework.stereotype.Service
public class PartyServiceImpl implements PartyService {
    private PartyRepository repository;
    private UserRepository userRepository;

    @Autowired
    private SimpMessagingTemplate brokerMessagingTemplate;

    public PartyServiceImpl(PartyRepository repository, UserRepository userRepository){
        this.repository = repository;
        this.userRepository = userRepository;
    }

    @Override
    public Iterable<Party> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Party> findById(UUID id) {
        return this.repository.findById(id);
    }

    @Override
    public Party save(Party party) {
        Party saved = this.repository.save(party);
        brokerMessagingTemplate.convertAndSend("/message", party);
        return saved;
    }

    @Override
    public Optional<Party> join(UUID party_id, UUID user_id) {
        Party p = this.repository.findById(party_id).get();
        User u = this.userRepository.findById(user_id).get();

        Party old_p = u.getParty();
        old_p.removeUser(u);

        p.addUser(u);
        u.setParty(p);

        this.userRepository.save(u);
        return Optional.empty();
    }
}
