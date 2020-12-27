package com.humancloud.identity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.humancloud.identity.entity.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long> {
		
	User findByUserIdAndIsActive(Long userId, int isActive);
    User findByEmailAddressAndPasswordAndIsActive(String emailAddress, String password, int isActive);
    User findByEmailAddressAndIsActive(String emailAddress, int isActive);
	}
	

