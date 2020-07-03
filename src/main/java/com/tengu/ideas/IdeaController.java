package com.tengu.ideas;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/ideas")
public class IdeaController {
    private IdeaService service;
    public IdeaController(IdeaService service){
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Idea> findAll(){
        return this.service.findAll();
    }

    @GetMapping(value = {"/{id}"})
    public Optional<Idea> findById(@PathVariable UUID id){
        return this.service.findById(id);
    }

    @PostMapping("/save")
    public Idea save(@RequestBody Idea idea){
        return this.service.save(idea);
    }
}
