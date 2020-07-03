package com.tengu.users;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

@org.springframework.stereotype.Repository
public interface UserRepository extends CrudRepository<User, UUID> {
	Optional<User> findByEmail(String email);
	Optional<User> findByName(String name);

	/*@Query("select new java.lang.Boolean(count(*) > 0) from User u where u.nickName = :nickName")
	Boolean existsByUsername(@Param("nickName")String nickName);

	@Query("select new java.lang.Boolean(count(*) > 0) from User u where u.email = :email")
	Boolean existsByEmail(@Param("email")String email);*/
}
