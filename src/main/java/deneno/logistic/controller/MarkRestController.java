package deneno.logistic.controller;

import deneno.logistic.domain.Mark;
import deneno.logistic.repository.MarkRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/marks")
public class MarkRestController extends AbstractRestController<Mark, MarkRepository> {
    public MarkRestController(MarkRepository repository) {
        super(repository);
    }
}


