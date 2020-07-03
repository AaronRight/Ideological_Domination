package com.tengu.parties;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/parties")
public class PartyController {
    private PartyService service;
    public PartyController(PartyService service){
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Party> findAll(){
        return this.service.findAll();
    }

    @GetMapping(value = {"/{id}"})
    public Optional<Party> findById(@PathVariable UUID id){
        return this.service.findById(id);
    }

    @PostMapping("/save")
    public Party save(@RequestBody Party idea){
        return this.service.save(idea);
    }

    @GetMapping("/join/{party_id}/{user_id}")
    public Optional<Party> join(@PathVariable UUID party_id, @PathVariable UUID user_id){
        return this.service.join(party_id, user_id);
    }
}
