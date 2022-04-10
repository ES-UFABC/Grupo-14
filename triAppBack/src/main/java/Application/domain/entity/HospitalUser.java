package Application.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table
@Data
public class HospitalUser extends User {


    @NotEmpty
    @Column(length = 14)
    private String cnpj;

}
