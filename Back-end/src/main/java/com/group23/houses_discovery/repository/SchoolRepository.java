package com.group23.houses_discovery.repository;

import com.group23.houses_discovery.model.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

    School findByName(String name);

}
