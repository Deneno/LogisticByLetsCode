package deneno.logistic.controller;

import deneno.logistic.domain.CarsMark;
import deneno.logistic.repository.CarsMarkRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mark")
public class CarsMarkRestController extends AbstractRestController<CarsMark, CarsMarkRepository> {
    public CarsMarkRestController(CarsMarkRepository repository) {
        super(repository);
    }
}


