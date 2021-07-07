package com.group23.houses_discovery.repository;

import com.group23.houses_discovery.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {

    Bus findByName(String name);

}
