package uvsoftgroup.geospatialrestapiapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import uvsoftgroup.geospatialrestapiapp.model.UserRegistration;

@Service
public interface UserRegistrationService {
	public void saveUserRegistration(UserRegistration userRegistration) throws Exception;
	public List<UserRegistration> findAllUserRegistration();
	public UserRegistration findUserRegistration(Long urId);
	public UserRegistration deleteUserRegistration(Long urId);
	
	
}
