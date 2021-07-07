package com.group23.houses_discovery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "houses")
public class House implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 240)
    private String title;

    @Size(max = 140)
    private String url;

    @Size(max = 40)
    private String city;

    @Size(max = 80)
    private String region;

    @Size(max = 160)
    private String street;

    @NotBlank
    @Size(max = 160)
    private String community;

    @Size(max = 160)
    private String floor;

    private Double total_price;

    private Double average_price;

    @Size(max = 140)
    private String image;

    private Integer watch;

    @Size(max = 140)
    private String release_date;

    @Size(max = 140)
    private String room_count;

    @Size(max = 140)
    private String towards;

    private Double house_area;

    @Size(max = 140)
    private String decoration;

    private Integer house_age;

    private Double longitude;

    private Double latitude;

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "house"
    )
    @EqualsAndHashCode.Exclude
    private Set<HouseBus> houseBusList;

    @JsonIgnore // Avoid infinite loops
    public void addBus(HouseBus... busList){
        System.out.println("=====" + busList);
        for(HouseBus houseBus : busList) houseBus.setHouse(this);
        this.houseBusList.addAll(Stream.of(busList).collect(Collectors.toSet()));
    }

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "house"
    )
    @EqualsAndHashCode.Exclude
    private Set<HouseHospital> houseHospitalList;

    @JsonIgnore // Avoid infinite loops
    public void addBus(HouseHospital... hospitalList){
        for(HouseHospital houseHospital : hospitalList) houseHospital.setHouse(this);
        this.houseHospitalList.addAll(Stream.of(hospitalList).collect(Collectors.toSet()));
    }

    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "house"
    )
    @EqualsAndHashCode.Exclude
    private Set<HouseSchool> houseSchoolList;

    @JsonIgnore // Avoid infinite loops
    public void addBus(HouseSchool... schoolList){
        for(HouseSchool houseSchool : schoolList) houseSchool.setHouse(this);
        this.houseSchoolList.addAll(Stream.of(schoolList).collect(Collectors.toSet()));
    }



}
