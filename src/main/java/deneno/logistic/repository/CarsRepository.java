package deneno.logistic.repository;

import deneno.logistic.domain.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

public interface CarsRepository extends JpaRepository<Cars, Long> {
}
