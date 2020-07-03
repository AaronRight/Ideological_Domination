package com.tengu.parties;

import java.util.Optional;
import java.util.UUID;

public interface PartyService {
        Iterable<Party> findAll();
        Optional<Party> findById(UUID id);
        Optional<Party> join(UUID party_id, UUID user_id);
        Party save(Party party);
}
