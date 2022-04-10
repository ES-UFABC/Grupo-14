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

    @NotEmpty
    @Column(length = 2)
    private String age;

    @NotEmpty
    @Column(length = 2)
    private String susCard;

    @NotEmpty
    @Column(length = 100)
    private String maritalStatus;

}
