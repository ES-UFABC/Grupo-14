package Application.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table
public class HospitalUser {

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

    @NotEmpty
    @Column(length = 14)
    private String cnpj;

}
