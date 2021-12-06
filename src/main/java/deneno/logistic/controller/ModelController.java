package deneno.logistic.controller;

import deneno.logistic.domain.Model;
import deneno.logistic.repository.ModelRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/models")
public class ModelController extends AbstractRestController<Model, ModelRepository> {
    public ModelController(ModelRepository repository) {
        super(repository);
    }
}
