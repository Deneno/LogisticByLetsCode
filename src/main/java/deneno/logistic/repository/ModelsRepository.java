package deneno.logistic.repository;

import deneno.logistic.domain.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelsRepository extends JpaRepository<Model, Long> {
}
