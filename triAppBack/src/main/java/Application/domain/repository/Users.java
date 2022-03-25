package Application.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Application.domain.entity.User;

public interface Users extends JpaRepository<User, Integer> {

}
