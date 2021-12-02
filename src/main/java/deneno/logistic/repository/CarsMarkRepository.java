package deneno.logistic.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import deneno.logistic.domain.CarsMark;

public interface CarsMarkRepository extends JpaRepository<CarsMark, Long> {
}
