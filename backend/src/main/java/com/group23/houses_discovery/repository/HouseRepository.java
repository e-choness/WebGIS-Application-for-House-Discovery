package com.group23.houses_discovery.repository;

import com.group23.houses_discovery.model.House;
import com.group23.houses_discovery.payload.CommunityResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {

//    Page<House> findByStreet(String street,Pageable pageable);
//
//    Page<House> findByCommunity(String community,Pageable pageable);
//
//    Page<House> findByRegion(String region, Pageable pageable);


    @Query(value="SELECT new com.group23.houses_discovery.payload.CommunityResult(house.city, house.region, house.street, house.community, AVG(house.average_price), AVG(house.total_price), COUNT(house.id)) FROM House house GROUP BY house.street, house.community, house.region, house.city ORDER BY house.street, house.community")
    List<CommunityResult> getCommunityList();

    @Modifying
    @Transactional
    @Query("update House house set house.longitude = ?1 where house.latitude = ?2")
    public int setLocation(Float lng, Float lat);

//    @Query(value ="SELECT * from Houses house where house.street = ?1", nativeQuery = true)
//    List<House> findStreet(String street);

    List<House> findByIdIn(List<Long> houseIds);

    List<House> findByCommunity(String community);

    List<House> findByCommunityAndStreet(String community, String street);

    List<House> findByStreet(String street);

    List<House> findByRegion(String region);

}