package Application.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Application.domain.entity.HospitalUser;

public interface HospitalUsers extends JpaRepository<HospitalUser, Integer> {

}
