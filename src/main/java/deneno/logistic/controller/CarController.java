package deneno.logistic.controller;

import deneno.logistic.domain.Car;
import deneno.logistic.repository.CarRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cars")
public class CarController extends AbstractRestController<Car, CarRepository> {
    public CarController(CarRepository repository) {
        super(repository);
    }
}
