package org.practice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController{
    @Autowired
    private HotelRepository hotelRepository;

    public HotelController(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @GetMapping("/all")
    public List<Hotel> getAll(){
        List<Hotel> hotels = this.hotelRepository.findAll();
        return hotels;
    }

    @PostMapping
    public void insert(@RequestBody Hotel hotel){
        this.hotelRepository.insert(hotel);
    }

    @PutMapping
    public void update(@RequestBody Hotel hotel){
        this.hotelRepository.save(hotel);
    }

    @GetMapping("/{id}")
    public Hotel getById(@PathVariable("id") String id){
        Hotel hotel = this.hotelRepository.findById(id).get();
        return hotel;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        this.hotelRepository.deleteById(id);
    }

//    @GetMapping("/price/{maxPrice}")
//    public List<Hotel> getByPricePerNight(@PathVariable("maxPrice") int maxPrice){
//        List<Hotel> hotels = this.hotelRepository.findByPricePerNightLessThan(maxPrice);
//
//        return hotels;
//    }
//
//    @GetMapping("/address/{city}")
//    public List<Hotel> getByCity(@PathVariable("city") String city){
//        List<Hotel> hotels = this.hotelRepository.findByCity(city);
//
//        return hotels;
//    }

}
