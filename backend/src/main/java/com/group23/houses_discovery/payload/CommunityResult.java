package com.group23.houses_discovery.payload;


public class CommunityResult {
    private String city;
    private String region;
    private String street;
    private String community;
    private Double averagePrice;
    private Double averageTotalPrice;
    private Long availableHouses;

    public CommunityResult(){

    }

    public CommunityResult(String city, String region, String street, String community, Double averagePrice, Double averageTotalPrice, Long availableHouses) {
        this.city = city;
        this.region = region;
        this.street = street;
        this.community = community;
        this.averagePrice = averagePrice;
        this.averageTotalPrice = averageTotalPrice;
        this.availableHouses = availableHouses;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCommunity() {
        return community;
    }

    public void setCommunity(String community) {
        this.community = community;
    }

    public Double getAveragePrice() {
        return averagePrice;
    }

    public void setAveragePrice(Double averagePrice) {
        this.averagePrice = averagePrice;
    }

    public Double getAverageTotalPrice() {
        return averageTotalPrice;
    }

    public void setAverageTotalPrice(Double averageTotalPrice) {
        this.averageTotalPrice = averageTotalPrice;
    }

    public Long getAvailableHouses() {
        return availableHouses;
    }

    public void setAvailableHouses(Long availableHouses) {
        this.availableHouses = availableHouses;
    }
}
