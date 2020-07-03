package com.tengu.initiatives;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/initiatives")
public class IniativeController {
    private IniativeService service;
    public IniativeController(IniativeService service){
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Initiative> findAll(){
        return this.service.findAll();
    }

    @GetMapping(value = {"/{id}"})
    public Optional<Initiative> findById(@PathVariable UUID id){
        return this.service.findById(id);
    }

    @PostMapping("/save")
    public Initiative save(@RequestBody Initiative idea){
        return this.service.save(idea);
    }
}
