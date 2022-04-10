package Application.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;


@MappedSuperclass
public abstract class  User{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotEmpty
	@Column(length = 100)
	private String name;

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
	private String cep = "";
	
}
