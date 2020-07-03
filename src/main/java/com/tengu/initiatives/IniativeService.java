package com.tengu.initiatives;

import java.util.Optional;
import java.util.UUID;

public interface IniativeService {
        Iterable<Initiative> findAll();
        Optional<Initiative> findById(UUID id);
        Initiative save(Initiative story);
        Iterable<InitiativeRate> findAllRated();
        InitiativeRate saveRated(InitiativeRate initiativeRate);
}
