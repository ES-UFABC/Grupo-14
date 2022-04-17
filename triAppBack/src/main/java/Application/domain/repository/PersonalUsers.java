package Application.domain.repository;

import Application.domain.entity.PersonalUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalUsers extends JpaRepository<PersonalUser, Integer> {
    PersonalUsers findFirstBy();
}
