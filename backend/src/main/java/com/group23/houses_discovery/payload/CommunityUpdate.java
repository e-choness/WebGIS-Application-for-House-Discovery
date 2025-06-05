package com.group23.houses_discovery.payload;

import com.group23.houses_discovery.model.Bus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommunityUpdate {

    private String street;

    private String community;

    private Double longitude;

    private Double latitude;

    private List<Bus> buss;

    private List<Double> busDistance;
}
