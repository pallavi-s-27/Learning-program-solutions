
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Transactional
    public void addEmployee(Employee employee) {
        repository.save(employee);
        System.out.println("Employee saved with Spring Data JPA");
    }
}
