package deneno.logistic.controller;

import deneno.logistic.domain.Cars;
import deneno.logistic.repository.CarsRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cars")
public class CarsController extends AbstractRestController<Cars, CarsRepository> {
    public CarsController(CarsRepository repository) {
        super(repository);
    }
}
