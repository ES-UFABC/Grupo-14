package Application.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data 
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotEmpty
	@Column(length = 100)
	private String name;
	
	@NotEmpty
	@Column(length = 14)
	private String document;
	
	@NotEmpty
	@Column(length = 100)
	private String email;
	
	@NotEmpty
	@Column(length = 100)
	private String password;
	
	@NotEmpty
	@Column(length = 11)
	private String phone;
	
	@NotEmpty
	@Column(length = 9)
	private String cep;

	
}
