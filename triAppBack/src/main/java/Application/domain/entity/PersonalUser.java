package Application.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table
@Data
public class PersonalUser extends User{

    @NotEmpty
    @Column(length = 14)
    private String cpf;

    @NotNull
    @Column(length = 2)
    private Integer age;

    @NotEmpty
    @Column(length = 100)
    private String maritalStatus;

}
