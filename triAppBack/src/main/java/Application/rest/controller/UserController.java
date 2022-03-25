package Application.rest.controller;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;


import Application.domain.entity.User;
import Application.domain.repository.Users;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private Users repository;
	
	public UserController(Users repository) {
		
		this.repository = repository;
	}
	
	@PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public User save( @RequestBody  User user){
		User userSalvo = repository.save(user);

        return userSalvo;
    }

	@GetMapping(
			value = {"{id}"}
	)
	public User getUserById(@PathVariable Integer id){

		return repository
				.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente nao encontrado"));

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
						"Usuário não encontrado"));

	}

	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void  update(@PathVariable Integer id,
						@RequestBody @Valid User user){
		repository
				.findById(id)
				.map(clienteExistente ->{
					user.setId(clienteExistente.getId());
					repository.save(user);
					return ResponseEntity.noContent().build();
				}).orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Usuario não encontrado"));
	}

	@GetMapping()
	public List<User> find(User filtro){

		ExampleMatcher matcher = ExampleMatcher
				.matching()
				.withIgnoreCase()
				.withStringMatcher(ExampleMatcher
						.StringMatcher.CONTAINING);

		Example example = Example.of(filtro, matcher);

		return repository.findAll(example);

	}

}
