package com.demo.elearn.repository;

import com.demo.elearn.model.Course;
import com.demo.elearn.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String>{

    User findByEmailIdAndPassword(String emailId,String password);
}
