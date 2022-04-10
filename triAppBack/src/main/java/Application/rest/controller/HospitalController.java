package Application.rest.controller;

import Application.domain.entity.HospitalUser;
import Application.domain.repository.HospitalUsers;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/users/hospitais")
public class HospitalController {

    private HospitalUsers repository;

    public HospitalController(HospitalUsers repository) {

        this.repository = repository;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public HospitalUser save(@RequestBody  HospitalUser user){
        HospitalUser userSalvo = repository.save(user);

        return userSalvo;
    }

    @GetMapping(
            value = {"{id}"}
    )
    public HospitalUser getUserById(@PathVariable Integer id){

        return (HospitalUser) repository
                .findById(id)
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Hospital nao encontrado"));

    }

    @DeleteMapping(
            value = {"{id}"}
    )
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id){
        repository.findById(id)
                .map(user -> {
                    repository.delete(user);
                    return user;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Hospital não encontrado"));

    }



    @GetMapping()
    public List<HospitalUser> find(HospitalUser filtro){

        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher
                        .StringMatcher.CONTAINING);

        Example example = Example.of(filtro, matcher);

        return repository.findAll(example);

    }

}
