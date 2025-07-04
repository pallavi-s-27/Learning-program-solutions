
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class HibernateExample {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            Employee emp = new Employee();
            emp.setName("John");
            emp.setDept("IT");
            emp.setSalary(5000);

            session.save(emp);
            tx.commit();
            System.out.println("Employee saved with Hibernate");
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        factory.close();
    }
}

class Employee {
    private int id;
    private String name;
    private String dept;
    private double salary;
    // getters and setters
}
