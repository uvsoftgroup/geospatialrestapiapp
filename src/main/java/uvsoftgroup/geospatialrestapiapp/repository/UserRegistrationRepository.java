package uvsoftgroup.geospatialrestapiapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uvsoftgroup.geospatialrestapiapp.model.UserRegistration;


public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Long> {

}
