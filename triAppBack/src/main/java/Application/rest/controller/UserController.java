package Application.rest.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;


import Application.domain.entity.User;
import Application.domain.repository.Users;

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
}
