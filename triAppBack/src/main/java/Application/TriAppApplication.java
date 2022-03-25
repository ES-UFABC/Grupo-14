package Application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TriAppApplication {
	
	@GetMapping("/start")
	public String startApplication() {
		return "Application Started";
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(TriAppApplication.class, args);
	}
}
