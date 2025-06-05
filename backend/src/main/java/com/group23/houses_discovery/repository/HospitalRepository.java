package com.group23.houses_discovery.repository;

import com.group23.houses_discovery.model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {

    Hospital findByName(String name);

}
