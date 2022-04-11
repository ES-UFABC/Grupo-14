package Application.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table
public class PersonalUser {

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
    private String cpf;

    @NotNull
    @Column(length = 2)
    private Integer age;

    @NotEmpty
    @Column(length = 15)
    private String susCard;

    @NotEmpty
    @Column(length = 100)
    private String maritalStatus;

}
