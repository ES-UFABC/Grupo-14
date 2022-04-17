package Application.rest.controller;

import Application.domain.entity.PersonalUser;
import Application.domain.repository.PersonalUsers;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/users/pessoas")
public class PersonalController {

    private PersonalUsers repository;

    public PersonalController(PersonalUsers repository) {

        this.repository = repository;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public PersonalUser save(@RequestBody  PersonalUser user){
        PersonalUser userSalvo = repository.save(user);

        return userSalvo;
    }

    @GetMapping(
            value = {"{id}"}
    )
    public PersonalUser getUserById(@PathVariable Integer id){

        return (PersonalUser) repository
                .findById(id)
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Pessoa nao encontrado"));

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
                        "Pessoa não encontrado"));

    }



    @GetMapping()
    public List<PersonalUser> find(PersonalUser filtro){

        ExampleMatcher matcher = ExampleMatcher
                .matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher
                        .StringMatcher.CONTAINING);

        Example example = Example.of(filtro, matcher);

        return repository.findAll(example);

    }

}
