package com.group23.houses_discovery.service;

import com.group23.houses_discovery.model.Bus;
import com.group23.houses_discovery.model.House;
import com.group23.houses_discovery.model.HouseBus;
import com.group23.houses_discovery.payload.CommunityResult;
import com.group23.houses_discovery.payload.CommunityUpdate;
import com.group23.houses_discovery.payload.PagedResponse;
import com.group23.houses_discovery.repository.BusRepository;
import com.group23.houses_discovery.repository.HouseRepository;
import com.group23.houses_discovery.repository.UserRepository;
import com.group23.houses_discovery.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
public class HouseService {
    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(HouseService.class);

    public PagedResponse<House> getAllHouses(UserPrincipal currentUser, int page, int size) {
        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size);
        Page<House> houses = houseRepository.findAll(pageable);

        if(houses.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), houses.getNumber(),
                    houses.getSize(), houses.getTotalElements(), houses.getTotalPages(), houses.isLast());
        }
        List<House> houseResponse = houses.map(house -> {return house;}).getContent();
        return new PagedResponse<House>(houseResponse, houses.getNumber(),
                houses.getSize(), houses.getTotalElements(), houses.getTotalPages(), houses.isLast());

    }

    public PagedResponse<CommunityResult> getAllCommunities(UserPrincipal currentUser, int page, int size) {
//        Pageable pageable = PageRequest.of(page, size);
//        System.out.println(houseRepository.getCommunityList(pageable));
        List<CommunityResult> communities = houseRepository.getCommunityList();
//        List<String > communityResponse = communities.map(community -> {return community.trim();}).getContent();
//        List<String> communityResponse = new ArrayList<>();
//        communities.forEach(community -> {
//            communityResponse.add(community.trim());
//        });
        int totalSize = communities.size();
        int totalPages = totalSize / size;
        System.out.println(totalSize);
        return new PagedResponse<CommunityResult>(communities, page, size, totalSize, totalPages, false);
    }

    @Transactional
    public List<House> updateHouse(CommunityUpdate communityUpdate){
        String street = communityUpdate.getStreet();
        String community = communityUpdate.getCommunity();
        Double latitude = communityUpdate.getLatitude();
        Double longitude = communityUpdate.getLongitude();
        List<Bus> buss = communityUpdate.getBuss();
        List<Double> busDistance = communityUpdate.getBusDistance();
        System.out.println(buss);
        List<House> houses = houseRepository.findByCommunityAndStreet(community, street);
        System.out.println(houses.size());
        House house0 = houses.get(0);
        if(latitude != null && house0.getLatitude() == null){
            houses.forEach(house -> {
                house.setLatitude(latitude);
                house.setLongitude(longitude);
            });
        }

        if(buss.size() > 0 && house0.getHouseBusList().size() ==0){
            houses.forEach(house -> {
                for(int i = 0; i < buss.size(); i++){
                    Bus bus = buss.get(i);
                    Bus bus0 = busRepository.findByName(bus.getName());
                    if(bus0 == null) {
                        bus0 = busRepository.save(bus);
                    }
                    HouseBus houseBus = new HouseBus(bus0, busDistance.get(i));
                    house.addBus(houseBus);
                }
            });
        }

//        if(buss.size() > 0 && house0.getBusList().size() == 0){
//            houses.forEach(house -> {
//                buss.forEach(bus -> {
//                    Bus bus0 = busRepository.findByName(bus.getName());
//                    System.out.println(bus0);
//                    if(bus0 == null) {
//                        Bus bus1 = busRepository.save(bus);
//                        house.getBusList().add(bus1);
//                    }
//                    else{
//                        house.getBusList().add(bus0);
//                    }
//                });
//            });
//        }

        return houseRepository.saveAll(houses);
    }
}
