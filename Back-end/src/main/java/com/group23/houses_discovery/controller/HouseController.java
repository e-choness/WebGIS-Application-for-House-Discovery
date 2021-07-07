package com.group23.houses_discovery.controller;

import com.alibaba.fastjson.JSON;
import com.group23.houses_discovery.model.House;
import com.group23.houses_discovery.payload.ApiResponse;
import com.group23.houses_discovery.payload.CommunityUpdate;
import com.group23.houses_discovery.payload.PagedResponse;
import com.group23.houses_discovery.repository.HouseRepository;
import com.group23.houses_discovery.repository.UserRepository;
import com.group23.houses_discovery.security.CurrentUser;
import com.group23.houses_discovery.security.UserPrincipal;
import com.group23.houses_discovery.service.HouseService;
import com.group23.houses_discovery.utils.AppConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class HouseController {

    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HouseService houseService;

    private static final Logger logger = LoggerFactory.getLogger(HouseController.class);

    @GetMapping("/houses")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getHouses(@CurrentUser UserPrincipal currentUser,
                                          @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                          @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return ResponseEntity.ok(new ApiResponse<Object>(0, "success", houseService.getAllHouses(currentUser, page, size)));
    }

    @GetMapping("/community")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getCommunities(@CurrentUser UserPrincipal currentUser,
                                            @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                            @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return ResponseEntity.ok(new ApiResponse<Object>(0, "success", houseService.getAllCommunities(currentUser,page, size)));
    }

    @PostMapping("/community")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateCommunities(@CurrentUser UserPrincipal currentUser, @Valid @RequestBody CommunityUpdate communityUpdate){
        System.out.println(communityUpdate.toString());
//        System.out.println(JSON.parse(communityUpdate));
        houseService.updateHouse(communityUpdate);
        return ResponseEntity.ok(new ApiResponse<Object>(0, "success"));
    }

}
